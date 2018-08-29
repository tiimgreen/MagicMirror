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
				animatedVinyl: false,
				limit: 200
			}
		},
		{
			module: "MMM-Football-Fixtures",
			position: "bottom_right",
			config: {
				leagues: {
					"Champions League": "CL",
					"Premier League": "PL",
					"1. Bundesliga": "BL1",
					"Lique 1": "FL1",
					"Serie A": "SA",
					"La Liga Santander": "PD"
				},
				leaguesShowAllGames: {
					// "World Cup": "WC"
				},
				teams: [
					// England
  					// Prem
  					"Manchester City FC",
  					"Tottenham Hotspur FC",
  					"Chelsea FC",
  					"Manchester United FC",
  					"Arsenal FC",
  					"Liverpool FC",
            // Championship
            "Leeds United FC",
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
					"Borussia Dortmund"
				],
				teamBadges: {
					'Germany': 'https://img.fifa.com/images/flags/4/ger.png',
					'Brazil': 'https://img.fifa.com/images/flags/4/bra.png',
					'Belgium': 'https://img.fifa.com/images/flags/4/bel.png',
					'Portugal': 'https://img.fifa.com/images/flags/4/por.png',
					'Argentina': 'https://img.fifa.com/images/flags/4/arg.png',
					'Switzerland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1024px-Flag_of_Switzerland.svg.png',
					'France': 'https://img.fifa.com/images/flags/4/fra.png',
					'Poland': 'https://img.fifa.com/images/flags/4/pol.png',
					'Spain': 'https://img.fifa.com/images/flags/4/esp.png',
					'Peru': 'https://img.fifa.com/images/flags/4/per.png',
					'Denmark': 'https://img.fifa.com/images/flags/4/den.png',
					'England': 'https://img.fifa.com/images/flags/4/eng.png',
					'Uruguay': 'https://img.fifa.com/images/flags/4/uru.png',
					'Mexico': 'https://img.fifa.com/images/flags/4/mex.png',
					'Colombia': 'https://img.fifa.com/images/flags/4/col.png',
					'Croatia': 'https://img.fifa.com/images/flags/4/cro.png',
					'Tunisia': 'https://img.fifa.com/images/flags/4/tun.png',
					'Iceland': 'https://img.fifa.com/images/flags/4/isl.png',
					'Costa Rica': 'https://img.fifa.com/images/flags/4/crc.png',
					'Sweden': 'https://img.fifa.com/images/flags/4/swe.png',
					'Senegal': 'https://img.fifa.com/images/flags/4/sen.png',
					'Serbia': 'https://img.fifa.com/images/flags/4/srb.png',
					'Australia': 'https://img.fifa.com/images/flags/4/aus.png',
					'Iran': 'https://img.fifa.com/images/flags/4/irn.png',
					'Morocco': 'https://img.fifa.com/images/flags/4/mar.png',
					'Egypt': 'https://img.fifa.com/images/flags/4/egy.png',
					'Nigeria': 'https://img.fifa.com/images/flags/4/nga.png',
					'Korea Republic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png',
					'Panama': 'https://www.onlinestores.com/flagdetective/images/download/panama-hi.jpg',
					'Saudi Arabia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1000px-Flag_of_Saudi_Arabia.svg.png',
					'Japan': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
					'Russia': 'https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg',
          'Arsenal FC': 'http://aux.iconspalace.com/uploads/arsenal-logo-icon-256.png',
          'Fulham FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/144.png',
          'Newcastle United FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/13.png',
          'Manchester United FC': 'http://aux2.iconspalace.com/uploads/manchester-united-logo-icon-256.png',
          'Cardiff City FC': 'https://i.pinimg.com/originals/9c/4f/ab/9c4fab30d606869d168c16d4a2e4d26b.png',
          'Tottenham Hotspur FC': 'http://aux2.iconspalace.com/uploads/tottenham-hotspur-logo-icon-256.png',
          'Huddersfield Town AFC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1939.png',
          'Watford FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1795.png',
          'Brighton & Hove Albion FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1808.png',
          'Manchester City FC': 'https://futhead.cursecdn.com/static/img/17/clubs/10.png',
          'West Ham United FC': 'http://aux2.iconspalace.com/uploads/west-ham-united-logo-icon-256.png',
          'Everton FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/7.png',
          'Chelsea FC': 'http://aux.iconspalace.com/uploads/chelsea-logo-icon-256.png',
          'Wolverhampton Wanderers FC': 'http://aux2.iconspalace.com/uploads/wolverhampton-wanderers-logo-icon-256.png',
          'Southampton FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/17.png',
          'Liverpool FC': 'http://aux.iconspalace.com/uploads/liverpool-fc-logo-icon-256.png',
          'Watford FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1795.png',
          'Burnley FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1796.png',
          'AFC Bournemouth': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1943.png',
          'Leicester City FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/95.png',
          'Crystal Palace FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1799.png',
          'Sunderland AFC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/106.png',
          'Stoke City FC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1806.png',
          'Swansea City AFC': 'https://futhead.cursecdn.com/static/img/15/clubs_large/1960.png',
          'Hull City': 'https://futhead.cursecdn.com/static/img/17/items/badges/6000211.png'
				},
				apiKey: "853dcb03f6744e43a3d851c5af5e722d",
				displayMax: 20,
				timeFrame: "n28"
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
