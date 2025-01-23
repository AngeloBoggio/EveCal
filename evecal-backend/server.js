const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('api/events', async (req,res) => {
	const {city, state} = req.query;

	if(!city || !state) {
		return res.status(400).json({error: 'City and state are required'});
	}

	try {
		const events = await fetchEvents(city,state);
		res.json(events);
	} catch (error) {
		res.status.(500).json({error: 'Error fetching events'});
	}
});

const fetchEvents = async (city, state) => {
	const url = `https://www.eventbrite.com/d/${state}--${city}/all-events/`;
	const { data } = await axios.get(url);
	const $ = cheerio.load(data);
	const events = [];
	
	$('.event-card').each((i,el) => {
		const title = $(el).find('.event-title').text();
		const data = $(el).find('.event-date').text();
		const category = $(el).find('.event-category').text();
		events.push({title, date, category});
	});
	return events;
};

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

