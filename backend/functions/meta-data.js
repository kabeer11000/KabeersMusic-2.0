const pj_scraper = require("pj-scraper");

const searchWeb = async (keywords = [], len = 1, engine = "google") => {
	return await pj_scraper.scrape({}, {
		search_engine: engine,
		keywords: [...keywords],
		num_pages: len,
	});
};
module.exports = {
	searchWeb: searchWeb
};
