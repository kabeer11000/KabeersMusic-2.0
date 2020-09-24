export default function generateName() {
	const
		capFirst = string => string.charAt(0).toUpperCase() + string.slice(1),
		getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min,
		name1 = ["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable"],
		name2 = ["product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis"];

	return capFirst(name1[getRandomInt(0, name1.length + 1)]) + " " + capFirst(name2[getRandomInt(0, name2.length + 1)]);
}
