/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
												// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
												// - another specific IPv4/6 to listen on a specific interface
												// - "", "0.0.0.0", "::" to listen on any interface
												// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
																												 // or add a specific IPv4 of 192.168.1.5 :
																												 // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
																												 // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
																												 // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "BBC News",
						url: "http://feeds.bbci.co.uk/news/rss.xml?edition=uk"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "MMM-Sonos-Control",
			position: "bottom_center"
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_left",
			config: {
				currency: ["bitcoin", "ethereum", "chainlink"],
				showUSD: true,
				headers: ["change24h", "change1h", "change7d"],
				displayType: "logoWithChanges",
				showGraphs: true,
				coloredLogos: true,
				animatedVinyl: false
			}
		},
		{
			module: "MMM-Football-Fixtures",
			position: "bottom_right",
			config: {
				leagues: {
					"Premier League": 445,
					"Serie A": 456,
					"Lique 1": 450,
					"World Cup": 467,
					"Champions League": 464,
					"1. Bundesliga": 452,
					"La Liga Santander": 455
				},
				teams: [
					// England
					"Manchester City FC",
					"Tottenham Hotspur FC",
					"Chelsea FC",
					"Manchester United FC",
					"Arsenal FC",
					"Liverpool FC",
					// Italy
					"Juventus Turin",
					"SSC Napoli",
					"AS Roma",
					"SS Lazio",
					"FC Internazionale Milano",
					"AC Milan",
					// France
					"Paris Saint-Germain",
					"AS Monaco FC",
					"Olympique de Marseille",
					"Olympique Lyonnais",
					// Spain
					"FC Barcelona",
					"Real Madrid CF",
					"Sevilla FC",
					"Villarreal CF",
					"Real Sociedad de Fútbol",
					"Club Atlético de Madrid",
					// Germany
					"FC Bayern München",
					"Borussia Dortmund",
					// World Cup
					"England",
					"Poland",
					"Germany",
					"Brazil",
					"Belgium",
					"Portugal",
					"Argentina",
					"Switzerland",
					"France",
					"Chile",
					"Spain",
					"Peru",
					"Denmark",
					"Uruguay",
					"Mexico",
					"Colombia",
					"Netherlands",
					"Wales",
					"Italy",
					"Croatia",
					"Sweden",
					"Senegal",
					"Costa Rica",
					"Serbia",
					"Japan",
					"Saudi Arabia",
					"Tunisa",
					"Korea Republic",
					"Panama",
					"Iran",
					"Morocco",
					"Australia"
				],
				api_key: "853dcb03f6744e43a3d851c5af5e722d",
				display_max: 25
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
