import axios from "axios";
import mongoose from "mongoose";

import showModel from "../database/models/show.js";

const AvatarData = {
	results: [
		{
			id: 26376,
			title: "Avatar: The Last Airbender",
			img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfckM6bte1VR0xi8Vrzogt5sKG8_zr6b3MKl3MZo0tss5Tpc95pzopVin3zLtV1qXJnGs-5jeaZynTaMQYQearKlQw.jpg?r=fdc",
			vtype: "series",
			nfid: 70142405,
			synopsis:
				"Siblings Katara and Sokka wake young Aang from a long hibernation and learn he&#39;s an Avatar, whose air-bending powers can defeat the evil Fire Nation.",
			avgrating: 4.2209716,
			year: 2005,
			runtime: 0,
			imdbid: "tt0417299",
			poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZjhhYWU5N2UtOGU4Yi00M2E2LWE2ODktZDQ2MDNiN2RjNDgwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
			imdbrating: 9.2,
			top250: 0,
			top250tv: 12,
			clist: '"CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+16"',
			titledate: "2015-04-14"
		},
		{
			id: 62845,
			title: "The King&#39;s Avatar",
			img: "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABakC3FfX_XjgcsEaSZc0b-1HJIQxz_gqOBmGGsyt1BluY4XejnvXIsAsg2IopLXk_gGSspHCSDh8gpq1TV433UwQaw.jpg?r=f62",
			vtype: "series",
			nfid: 81175361,
			synopsis:
				"When an elite gamer is forced out of his professional team, he becomes a manager of an Internet café and reinvents himself to return to online glory.",
			avgrating: 0,
			year: 2019,
			runtime: 0,
			imdbid: "tt10736726",
			poster: "N/A",
			imdbrating: 0,
			top250: 0,
			top250tv: 0,
			clist: '"CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+27"',
			titledate: "2019-08-16"
		},
		{
			id: 91301,
			title: "Avatar The Last Airbender",
			img: "https://occ-0-363-2567.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRHKS5h1C92ASm7KakhY0m1AtafysAerbvJ7agdsGl7XasN6ZYk8CgJGZYN89czzK9SUecttoWEFBj8HYLlFwoe6ZqmVRhdccAkBPN3a9S-dcPxeQdKt2R9HVexdOMdUaVRznq1NGNXxEYE3ea1fEZDoFDQCkpy-rkzS3kzf3rtcX1FWCeooK209F-JS-UXJBGUV-fShc-FuQ6PZ45vNCui6Zf80OCR1lrOIH8uncK2_o2ts9Kk_ivzdcm86sL5qeccx7ZdkaK2ATJqZy854nr2OygJyNUwPvotVzYVRPmr0YWBt6YNW-2I.jpg?r=441",
			vtype: "series",
			nfid: 80237957,
			synopsis:
				"A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.",
			avgrating: 0,
			year: 2024,
			runtime: 0,
			imdbid: "tt0417299",
			poster: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
			imdbrating: 9.3,
			top250: null,
			top250tv: null,
			clist: '"CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+27"',
			titledate: "2024-02-22"
		}
	],
	total: 3,
	elapse: 0.4235
};

const AvatarEpisodes = {
    "platform": "netflix",
    "showID": "70142405",
    "seasons": [
        {
            "seasonNum": 1,
            "episodes": [
                {
                    "episodeID": 70116061,
                    "seasonID": 70043989,
                    "title": "The Boy in the Iceberg",
                    "img": "https://so-s.nflximg.net/soa4/835/1505777835.jpg",
                    "episodeNum": 1,
                    "seasonNum": 1,
                    "synopsis": "Waterbenders Katara and Sokka make a startling discovery while fishing: a boy frozen in an iceberg, perfectly preserved and -- amazingly -- alive."
                },
                {
                    "episodeID": 70116062,
                    "seasonID": 70043989,
                    "title": "The Avatar Returns",
                    "img": "https://so-s.nflximg.net/soa5/250/1505603250.jpg",
                    "episodeNum": 2,
                    "seasonNum": 1,
                    "synopsis": "An accident results in Aang&#39;s expulsion from the Southern Water Tribe, and the villagers soon find themselves beset by sinister Prince Zuko."
                },
                {
                    "episodeID": 70116063,
                    "seasonID": 70043989,
                    "title": "The Southern Air Temple",
                    "img": "https://so-s.nflximg.net/soa2/213/1384245213.jpg",
                    "episodeNum": 3,
                    "seasonNum": 1,
                    "synopsis": "Aang returns to his childhood temple hoping to find evidence that his people still thrive in the region but is disappointed that temple is abandoned."
                },
                {
                    "episodeID": 70116064,
                    "seasonID": 70043989,
                    "title": "The Warriors of Kyoshi",
                    "img": "https://so-s.nflximg.net/soa6/462/1507903462.jpg",
                    "episodeNum": 4,
                    "seasonNum": 1,
                    "synopsis": "Aang, Sokka and Katara go to the island of Kyoshi, where they receive a chilly reception. After Aang proves he&#39;s the Avatar, he becomes a celebrity."
                },
                {
                    "episodeID": 70116065,
                    "seasonID": 70043989,
                    "title": "The King of Omashu",
                    "img": "https://so-s.nflximg.net/soa1/905/1384281905.jpg",
                    "episodeNum": 5,
                    "seasonNum": 1,
                    "synopsis": "Sokka and Katara must again indulge Aang when he drags them to the Earth Kingdom city of Omashu, another favorite haunting ground of his youth."
                },
                {
                    "episodeID": 70116066,
                    "seasonID": 70043989,
                    "title": "Imprisoned",
                    "img": "https://so-s.nflximg.net/soa6/080/1508311080.jpg",
                    "episodeNum": 6,
                    "seasonNum": 1,
                    "synopsis": "Aang and the others find an Earth Kingdom mining town under the thumb of the Fire Nation, and Katara feels guilty when her actions lead to an arrest."
                },
                {
                    "episodeID": 70116067,
                    "seasonID": 70043989,
                    "title": "Winter Solstice: Part 1: The Spirit World",
                    "img": "https://so-s.nflximg.net/soa7/741/1423282741.jpg",
                    "episodeNum": 7,
                    "seasonNum": 1,
                    "synopsis": "Aang takes on the task of defending a town from an interdimensional monster, but his untested skills and uncertainty could prove the town&#39;s undoing."
                },
                {
                    "episodeID": 70116068,
                    "seasonID": 70043989,
                    "title": "Winter Solstice: Part 2: Avatar Roku",
                    "img": "https://so-s.nflximg.net/soa6/292/1384318292.jpg",
                    "episodeNum": 8,
                    "seasonNum": 1,
                    "synopsis": "During the winter solstice, Aang must travel into the Fire Nation -- which wants to capture him -- to communicate with his predecessor, Avatar Roku."
                },
                {
                    "episodeID": 70116069,
                    "seasonID": 70043989,
                    "title": "The Waterbending Scroll",
                    "img": "https://so-s.nflximg.net/soa4/157/1652408157.jpg",
                    "episodeNum": 9,
                    "seasonNum": 1,
                    "synopsis": "While teaching Aang about waterbending, Katara realizes her skills are inadequate. Luckily, she comes across a waterbending scroll at a boutique."
                },
                {
                    "episodeID": 70116070,
                    "seasonID": 70043989,
                    "title": "Jet",
                    "img": "https://so-s.nflximg.net/soa3/097/1509126097.jpg",
                    "episodeNum": 10,
                    "seasonNum": 1,
                    "synopsis": "A band of rebel guerillas with a charming, roguish leader rescues Aang, Sokka and Katara as they&#39;re fleeing the Fire Nation&#39;s minions."
                },
                {
                    "episodeID": 70116071,
                    "seasonID": 70043989,
                    "title": "The Great Divide",
                    "img": "https://so-s.nflximg.net/soa3/474/1508918474.jpg",
                    "episodeNum": 11,
                    "seasonNum": 1,
                    "synopsis": "Arriving at a giant gorge, Aang and his friends encounter two feuding refugee groups fighting over the right to cross the abyss."
                },
                {
                    "episodeID": 70116072,
                    "seasonID": 70043989,
                    "title": "The Storm",
                    "img": "https://so-s.nflximg.net/soa7/582/1504422582.jpg",
                    "episodeNum": 12,
                    "seasonNum": 1,
                    "synopsis": "When Aang, Katara and Sokka find themselves broke, Katara urges Sokka to take a fishing job. But the plan goes awry when the angler recognizes Aang."
                },
                {
                    "episodeID": 70116073,
                    "seasonID": 70043989,
                    "title": "The Blue Spirit",
                    "img": "https://so-s.nflximg.net/soa6/704/215804704.jpg",
                    "episodeNum": 13,
                    "seasonNum": 1,
                    "synopsis": "With Sokka and Katara still ailing from the effects of the storm, Aang must find some frozen frogs to cure his cohorts."
                },
                {
                    "episodeID": 70116074,
                    "seasonID": 70043989,
                    "title": "The Fortune-Teller",
                    "img": "https://so-s.nflximg.net/soa7/185/1508949185.jpg",
                    "episodeNum": 14,
                    "seasonNum": 1,
                    "synopsis": "Aang, Sokka and Katara come across a village that&#39;s dependent on its resident fortune-teller, who has reliably predicted its future for generations."
                },
                {
                    "episodeID": 70116075,
                    "seasonID": 70043989,
                    "title": "Bato of the Water Tribe",
                    "img": "https://so-s.nflximg.net/soa4/365/1384282365.jpg",
                    "episodeNum": 15,
                    "seasonNum": 1,
                    "synopsis": "Aang acts childish during a reunion between Sokka, Katara and a longtime friend. Fearing that Sokka and Katara will desert him, Aang betrays them."
                },
                {
                    "episodeID": 70116076,
                    "seasonID": 70043989,
                    "title": "The Deserter",
                    "img": "https://so-s.nflximg.net/soa1/962/1507801962.jpg",
                    "episodeNum": 16,
                    "seasonNum": 1,
                    "synopsis": "Aang and the others slip into a Fire Nation town so he can observe firebending firsthand. But their plans go quickly wrong, and they must seek refuge."
                },
                {
                    "episodeID": 70116077,
                    "seasonID": 70043989,
                    "title": "The Northern Air Temple",
                    "img": "https://so-s.nflximg.net/soa3/052/1507026052.jpg",
                    "episodeNum": 17,
                    "seasonNum": 1,
                    "synopsis": "On their continuing journey north, Aang and the others hear rumors about a surviving band of airbenders, requiring a visit to the Northern Air Temple."
                },
                {
                    "episodeID": 70116078,
                    "seasonID": 70043989,
                    "title": "The Waterbending Master",
                    "img": "https://so-s.nflximg.net/soa7/122/1506624122.jpg",
                    "episodeNum": 18,
                    "seasonNum": 1,
                    "synopsis": "After going to the home of the Northern Water Tribe, Aang and Katara search for a waterbending master, and Sokka becomes smitten with a princess."
                },
                {
                    "episodeID": 70116079,
                    "seasonID": 70043989,
                    "title": "The Siege of the North: Part 1",
                    "img": "https://so-s.nflximg.net/soa6/179/1508139179.jpg",
                    "episodeNum": 19,
                    "seasonNum": 1,
                    "synopsis": "After hunting his prey halfway around the world, Adm. Zhao zeroes in on Aang&#39;s location and prepares to lay siege to the entire Northern Water Tribe."
                },
                {
                    "episodeID": 70116080,
                    "seasonID": 70043989,
                    "title": "The Siege of the North: Part 2",
                    "img": "https://so-s.nflximg.net/soa5/644/1509365644.jpg",
                    "episodeNum": 20,
                    "seasonNum": 1,
                    "synopsis": "As Adm. Zhao&#39;s army continues its assault on the beleaguered Northern Water Tribe, Sokka, Katara and Yue try to retrieve Aang from the spirit world."
                }
            ]
        },
        {
            "seasonNum": 2,
            "episodes": [
                {
                    "episodeID": 70136314,
                    "seasonID": 70059201,
                    "title": "The Avatar State",
                    "img": "https://so-s.nflximg.net/soa3/522/1952130522.jpg",
                    "episodeNum": 1,
                    "seasonNum": 2,
                    "synopsis": "Aang and the group meet an Earth Kingdom general who wants to use Aang&#39;s powerful &#39;Avatar State&#39; as a weapon to defeat the Fire Nation."
                },
                {
                    "episodeID": 70136315,
                    "seasonID": 70059201,
                    "title": "The Cave of Two Lovers",
                    "img": "https://so-s.nflximg.net/soa1/555/1954520555.jpg",
                    "episodeNum": 2,
                    "seasonNum": 2,
                    "synopsis": "On their way to Omashu, the kids become lost in the treacherous &#39;Cave of Two Lovers."
                },
                {
                    "episodeID": 70136316,
                    "seasonID": 70059201,
                    "title": "Return to Omashu",
                    "img": "https://so-s.nflximg.net/soa5/763/2017988763.jpg",
                    "episodeNum": 3,
                    "seasonNum": 2,
                    "synopsis": "Aang enters Omashu so he can learn Earthbending from King Bumi, but the city is in the hands of the Fire Nation."
                },
                {
                    "episodeID": 70136317,
                    "seasonID": 70059201,
                    "title": "The Swamp",
                    "img": "https://so-s.nflximg.net/soa7/440/1944162440.jpg",
                    "episodeNum": 4,
                    "seasonNum": 2,
                    "synopsis": "When the kids end up in a mysterious and strange swamp, their fears are exposed."
                },
                {
                    "episodeID": 70136318,
                    "seasonID": 70059201,
                    "title": "Avatar Day",
                    "img": "https://so-s.nflximg.net/soa3/688/1953400688.jpg",
                    "episodeNum": 5,
                    "seasonNum": 2,
                    "synopsis": "Aang must clear up a wave of anti-Avatar sentiment and atone for something he did in the past."
                },
                {
                    "episodeID": 70136319,
                    "seasonID": 70059201,
                    "title": "The Blind Bandit",
                    "img": "https://so-s.nflximg.net/soa7/143/1955291143.jpg",
                    "episodeNum": 6,
                    "seasonNum": 2,
                    "synopsis": "Aang discovers a possible Earthbending mentor at an underground tournament."
                },
                {
                    "episodeID": 70136320,
                    "seasonID": 70059201,
                    "title": "Zuko Alone",
                    "img": "https://so-s.nflximg.net/soa4/578/2017400578.jpg",
                    "episodeNum": 7,
                    "seasonNum": 2,
                    "synopsis": "Traveling without Uncle now, Zuko wanders alone into an Earth Kingdom town where he bonds with a local boy."
                },
                {
                    "episodeID": 70136321,
                    "seasonID": 70059201,
                    "title": "The Chase",
                    "img": "https://so-s.nflximg.net/soa4/569/1953493569.jpg",
                    "episodeNum": 8,
                    "seasonNum": 2,
                    "synopsis": "As the kids are pursued relentlessly by a mysterious machine, their exhaustion puts them at each other&#39;s throats."
                },
                {
                    "episodeID": 70136322,
                    "seasonID": 70059201,
                    "title": "Bitter Work",
                    "img": "https://so-s.nflximg.net/soa4/475/1945054475.jpg",
                    "episodeNum": 9,
                    "seasonNum": 2,
                    "synopsis": "When Aang struggles with a block while trying to learn Earthbending from Toph, he wonders if the problem is with him or his teacher."
                },
                {
                    "episodeID": 70136323,
                    "seasonID": 70059201,
                    "title": "The Library",
                    "img": "https://so-s.nflximg.net/soa1/710/2016892710.jpg",
                    "episodeNum": 10,
                    "seasonNum": 2,
                    "synopsis": "A professor leads the kids to a spirit library in the middle of the desert, where Sokka hopes to discover secrets to use against the Fire Nation."
                },
                {
                    "episodeID": 70136324,
                    "seasonID": 70059201,
                    "title": "The Desert",
                    "img": "https://so-s.nflximg.net/soa1/285/1955460285.jpg",
                    "episodeNum": 11,
                    "seasonNum": 2,
                    "synopsis": "Aang searches for Appa, while Katara struggles to keep everyone together so they can survive in the vast desert."
                },
                {
                    "episodeID": 70136331,
                    "seasonID": 70059201,
                    "title": "The Secret of the Fire Nation",
                    "img": "https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQjUyEIsoIm9hCZExEdB9Xcf8pZqYMlKMWynwnaYaFWkrNANrGLhReob2grm7SP2nA6anBM5yh6mV0Up7cWTYYrighg1AJmcOyuXvhenFPD9eY-c.jpg?r=0b0",
                    "episodeNum": 12,
                    "seasonNum": 2,
                    "synopsis": "Aang escorts some refugees to Ba Sing Se through the deadly \"Serpent&#39;s Pass,\" only to discover a plot by the Fire Nation that threatens the city."
                },
                {
                    "episodeID": 70222655,
                    "seasonID": 70059201,
                    "title": "Journey to Ba Sing Se: Part 1: The Serpent&#39;s Pass",
                    "img": "https://so-s.nflximg.net/soa4/798/1955166798.jpg",
                    "episodeNum": 12,
                    "seasonNum": 2,
                    "synopsis": "Leaving the desert for Ba Sing Se, Suki and friends guide Earth Kingdom refugees through a treacherous pass. Meanwhile, Zuko meets a new friend, Jet."
                },
                {
                    "episodeID": 70222656,
                    "seasonID": 70059201,
                    "title": "Journey to Ba Sing Se: Part 2: The Drill",
                    "img": "https://so-s.nflximg.net/soa3/198/1955585198.jpg",
                    "episodeNum": 13,
                    "seasonNum": 2,
                    "synopsis": "At the outer wall of Ba Sing Se, the gang faces the Fire Nation army, while Jet becomes suspicious of Zuko and Iroh, whose cover might be blown."
                },
                {
                    "episodeID": 70136325,
                    "seasonID": 70059201,
                    "title": "City of Walls and Secrets",
                    "img": "https://so-s.nflximg.net/soa6/558/2017581558.jpg",
                    "episodeNum": 14,
                    "seasonNum": 2,
                    "synopsis": "Aang and the kids finally arrive in Ba Sing Se to see the Earth King, only to find mysterious forces within the city conspiring to stop them."
                },
                {
                    "episodeID": 70136326,
                    "seasonID": 70059201,
                    "title": "Tales of Ba Sing Se",
                    "img": "https://so-s.nflximg.net/soa3/917/1955473917.jpg",
                    "episodeNum": 15,
                    "seasonNum": 2,
                    "synopsis": "This series of short stories highlights different characters and their individual adventures in the city of Ba Sing Se."
                },
                {
                    "episodeID": 70136327,
                    "seasonID": 70059201,
                    "title": "Appa&#39;s Lost Days",
                    "img": "https://so-s.nflximg.net/soa3/516/1954620516.jpg",
                    "episodeNum": 16,
                    "seasonNum": 2,
                    "synopsis": "In this special episode, we go back in time to the moment Appa was stolen."
                },
                {
                    "episodeID": 70136328,
                    "seasonID": 70059201,
                    "title": "Lake Laogai",
                    "img": "https://so-s.nflximg.net/soa7/951/1954246951.jpg",
                    "episodeNum": 17,
                    "seasonNum": 2,
                    "synopsis": "While searching for Appa, the kids run into Jet but are torn about whether to trust him or not. Meanwhile, Zuko also hunts for Appa."
                },
                {
                    "episodeID": 70136330,
                    "seasonID": 70059201,
                    "title": "The Guru / The Crossroads of Destiny",
                    "img": "https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjlwPU1N0nYpFEWIyn6AXZPXNAhc-3GOo0eSohfZLOveNr4nwDjTbLEEMAxdfTTgTqU_qPdPWsL6aJ7rJA07L2rWYEorbetmu5aq2S7nOEXHIMR.jpg?r=857",
                    "episodeNum": 18,
                    "seasonNum": 2,
                    "synopsis": "A guru at the Eastern Air Temple helps Aang take the next step in his Avatar journey. Sokka meets his long lost father."
                },
                {
                    "episodeID": 70136329,
                    "seasonID": 70059201,
                    "title": "The Earth King",
                    "img": "https://so-s.nflximg.net/soa6/737/1945516737.jpg",
                    "episodeNum": 18,
                    "seasonNum": 2,
                    "synopsis": "The kids battle Long Feng the Dai Li when they attempt to show the Earth King the vast conspiracy taking place in his city."
                },
                {
                    "episodeID": 70222657,
                    "seasonID": 70059201,
                    "title": "The Guru",
                    "img": "https://so-s.nflximg.net/soa5/002/1944190002.jpg",
                    "episodeNum": 19,
                    "seasonNum": 2,
                    "synopsis": "A guru at the Eastern Air Temple helps Aang take the next step in his Avatar journey. Sokka meets his long lost father."
                },
                {
                    "episodeID": 70222658,
                    "seasonID": 70059201,
                    "title": "The Crossroads of Destiny",
                    "img": "https://so-s.nflximg.net/soa6/504/1944565504.jpg",
                    "episodeNum": 20,
                    "seasonNum": 2,
                    "synopsis": "A guru at the Eastern Air Temple helps Aang take the next step in his Avatar journey. Sokka meets his long lost father."
                }
            ]
        },
        {
            "seasonNum": 3,
            "episodes": [
                {
                    "episodeID": 70136332,
                    "seasonID": 70077825,
                    "title": "The Awakening",
                    "img": "https://so-s.nflximg.net/soa4/301/1944397301.jpg",
                    "episodeNum": 1,
                    "seasonNum": 3,
                    "synopsis": "After sustaining serious injuries at the end of Season 2, Aang awakens to find himself aboard a Fire Nation ship. Meanwhile, Zuko journeys home."
                },
                {
                    "episodeID": 70136333,
                    "seasonID": 70077825,
                    "title": "The Headband",
                    "img": "https://so-s.nflximg.net/soa4/055/1955211055.jpg",
                    "episodeNum": 2,
                    "seasonNum": 3,
                    "synopsis": "To better camouflage themselves as real Fire Nation citizens, the kids check out a Fire Nation school. Also, Zuko confronts Uncle."
                },
                {
                    "episodeID": 70136334,
                    "seasonID": 70077825,
                    "title": "The Painted Lady",
                    "img": "https://so-s.nflximg.net/soa5/051/1955442051.jpg",
                    "episodeNum": 3,
                    "seasonNum": 3,
                    "synopsis": "When the gang comes to a suffering fishing village, a mysterious spirit appears to help the villagers."
                },
                {
                    "episodeID": 70136335,
                    "seasonID": 70077825,
                    "title": "Sokka&#39;s Master",
                    "img": "https://so-s.nflximg.net/soa2/688/1954172688.jpg",
                    "episodeNum": 4,
                    "seasonNum": 3,
                    "synopsis": "When Sokka feels he&#39;s not contributing enough to the group, he seeks out a mysterious master to teach him the ways of the sword."
                },
                {
                    "episodeID": 70136336,
                    "seasonID": 70077825,
                    "title": "The Beach",
                    "img": "https://so-s.nflximg.net/soa4/287/1944223287.jpg",
                    "episodeNum": 5,
                    "seasonNum": 3,
                    "synopsis": "Zuko, Azula, Mai and Ty Lee go on vacation, where they learn a lot about themselves and each other. Meanwhile, the kids face a new enemy."
                },
                {
                    "episodeID": 70136337,
                    "seasonID": 70077825,
                    "title": "The Avatar and the Firelord",
                    "img": "https://so-s.nflximg.net/soa7/912/1955039912.jpg",
                    "episodeNum": 6,
                    "seasonNum": 3,
                    "synopsis": "Aang and Zuko are given insight into their forefathers&#39; pasts -- but how does the tale of Roku and Sozin matter to them now?"
                },
                {
                    "episodeID": 70136338,
                    "seasonID": 70077825,
                    "title": "The Runaway",
                    "img": "https://so-s.nflximg.net/soa5/184/1955013184.jpg",
                    "episodeNum": 7,
                    "seasonNum": 3,
                    "synopsis": "When Toph discovers a quick way to make cash, Katara disapproves, and the rift between them has disastrous consequences."
                },
                {
                    "episodeID": 70136339,
                    "seasonID": 70077825,
                    "title": "The Puppetmaster",
                    "img": "https://so-s.nflximg.net/soa6/445/1945179445.jpg",
                    "episodeNum": 8,
                    "seasonNum": 3,
                    "synopsis": "The kids investigate mysterious disappearances in a spooky town. Katara makes a special connection."
                },
                {
                    "episodeID": 70136340,
                    "seasonID": 70077825,
                    "title": "Nightmares and Daydreams",
                    "img": "https://so-s.nflximg.net/soa4/035/1827221035.jpg",
                    "episodeNum": 9,
                    "seasonNum": 3,
                    "synopsis": "On the eve of the eclipse, Aang&#39;s anxiety gets the better of him. His dreams become nightmares, and soon he can no longer tell dream from reality."
                },
                {
                    "episodeID": 70136347,
                    "seasonID": 70077825,
                    "title": "Day of the Black Sun",
                    "img": "https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX0PeinIS3h7OeuXxwJ99oIOiPzki4ICT8IZzPgMDmwgY6lO0oO0ftoV8W1gJ1o4i_F-sc5TLoGIzDIleGcnVD1_nR5oNfuqoeoAm0QTTNH3Mr3k.jpg?r=7c4",
                    "episodeNum": 10,
                    "seasonNum": 3,
                    "synopsis": "With the day of the eclipse upon them, the kids -- along with a ragtag force of old friends -- enact their long-planned invasion of the Fire Nation."
                },
                {
                    "episodeID": 70231579,
                    "seasonID": 70077825,
                    "title": "The Day of the Black Sun: Part 1",
                    "img": "https://so-s.nflximg.net/soa7/120/1944641120.jpg",
                    "episodeNum": 10,
                    "seasonNum": 3,
                    "synopsis": "With the eclipse almost upon them, the kids prepare to invade the Fire Nation."
                },
                {
                    "episodeID": 70231580,
                    "seasonID": 70077825,
                    "title": "The Day of the Black Sun: Part 2",
                    "img": "https://so-s.nflximg.net/soa5/316/1945420316.jpg",
                    "episodeNum": 11,
                    "seasonNum": 3,
                    "synopsis": "While the forces siege the capital of the Fire Nation, the kids help Aang find the Fire Lord before the eclipse. But they&#39;re met with surprises..."
                },
                {
                    "episodeID": 70136341,
                    "seasonID": 70077825,
                    "title": "The Western Air Temple",
                    "img": "https://so-s.nflximg.net/soa5/098/1008816098.jpg",
                    "episodeNum": 12,
                    "seasonNum": 3,
                    "synopsis": "When our gang regroups at the Western Air temple, they find someone there they weren&#39;t expecting."
                },
                {
                    "episodeID": 70136346,
                    "seasonID": 70077825,
                    "title": "The Boiling Rock",
                    "img": "https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQij5f0vnJ7U6zzyUs8d9_wAAka132N48kx4HydZCimC44h2yJbtTrXf3-HSMp98tDogKNtYKc5jpvOz4-9LzlkBggndrAjfv8tgQzrxRcsC3hDG.jpg?r=e85",
                    "episodeNum": 13,
                    "seasonNum": 3,
                    "synopsis": "Sokka and Zuko hope to break out the captured invasion force from prison, but have to rethink their escape plan after things go wrong."
                },
                {
                    "episodeID": 70136342,
                    "seasonID": 70077825,
                    "title": "The Firebending Masters",
                    "img": "https://so-s.nflximg.net/soa4/898/1953351898.jpg",
                    "episodeNum": 13,
                    "seasonNum": 3,
                    "synopsis": "When it comes time for Zuko to teach Aang Firebending, the two set out to learn the true meaning of Firebending from the original teachers."
                },
                {
                    "episodeID": 70231581,
                    "seasonID": 70077825,
                    "title": "The Boiling Rock: Part 1",
                    "img": "https://so-s.nflximg.net/soa5/892/1945034892.jpg",
                    "episodeNum": 14,
                    "seasonNum": 3,
                    "synopsis": "Sokka and Zuko head toward the best-guarded prison in the Fire Nation, the Boiling Rock, hoping to find and break out the invading forces."
                },
                {
                    "episodeID": 70231582,
                    "seasonID": 70077825,
                    "title": "The Boiling Rock: Part 2",
                    "img": "https://so-s.nflximg.net/soa7/126/1945650126.jpg",
                    "episodeNum": 15,
                    "seasonNum": 3,
                    "synopsis": "Sokka and Zuko have to revise their escape plan when something goes wrong. They end up receiving help from unexpected places."
                },
                {
                    "episodeID": 70136345,
                    "seasonID": 70077825,
                    "title": "Sozin&#39;s Comet",
                    "img": "https://occ-0-1091-299.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS8kzSEXys8kcWatFk-zxtZE0vd9GDDmUobwPPCGx47XbnZ9VDN_55lG-K7R41QMSxHpHy2bqkvKEcU0iTQevAH8pMdvbWTUBWv9rkmczneKXjzs.jpg?r=c29",
                    "episodeNum": 16,
                    "seasonNum": 3,
                    "synopsis": "In the climactic series finale, Zuko confronts Azula, and Aang finally faces the Firelord."
                },
                {
                    "episodeID": 70136343,
                    "seasonID": 70077825,
                    "title": "The Southern Raiders",
                    "img": "https://so-s.nflximg.net/soa2/370/1955513370.jpg",
                    "episodeNum": 16,
                    "seasonNum": 3,
                    "synopsis": "Katara sets out to confront the Fire Nation soldier who killed her mother. But what will she do when she finds him?"
                },
                {
                    "episodeID": 70136344,
                    "seasonID": 70077825,
                    "title": "The Ember Island Players",
                    "img": "https://so-s.nflximg.net/soa5/164/1945458164.jpg",
                    "episodeNum": 17,
                    "seasonNum": 3,
                    "synopsis": "The kids see a play about themselves and all their past adventures. But they aren&#39;t happy with the production."
                },
                {
                    "episodeID": 70231583,
                    "seasonID": 70077825,
                    "title": "Sozin&#39;s Comet: Part 1: The Phoenix King",
                    "img": "https://so-s.nflximg.net/soa7/052/1955540052.jpg",
                    "episodeNum": 18,
                    "seasonNum": 3,
                    "synopsis": "The kids get some new information on Fire Lord Ozai&#39;s master plan and decide to attack earlier than planned. Will Aang be ready?"
                },
                {
                    "episodeID": 70231584,
                    "seasonID": 70077825,
                    "title": "Sozin&#39;s Comet: Part 2: The Old Masters",
                    "img": "https://so-s.nflximg.net/soa1/795/1943773795.jpg",
                    "episodeNum": 19,
                    "seasonNum": 3,
                    "synopsis": "When Fire Lord Ozai puts his master plan in action, the group tries to stop him. Meanwhile, Aang seeks advice from his past lives."
                },
                {
                    "episodeID": 70231585,
                    "seasonID": 70077825,
                    "title": "Sozin&#39;s Comet: Part 3: Into the Inferno",
                    "img": "https://so-s.nflximg.net/soa4/784/1945063784.jpg",
                    "episodeNum": 20,
                    "seasonNum": 3,
                    "synopsis": "In the final battle, Zuko faces Azula and Aang finally confronts the Fire Lord."
                },
                {
                    "episodeID": 70231586,
                    "seasonID": 70077825,
                    "title": "Sozin&#39;s Comet: Part 4: Avatar Aang",
                    "img": "https://so-s.nflximg.net/soa4/684/1468181684.jpg",
                    "episodeNum": 21,
                    "seasonNum": 3,
                    "synopsis": "In the final battle, Zuko faces Azula and Aang finally confronts the Fire Lord."
                }
            ]
        }
    ]
}

const SeinfeldData = {
	platform: "netflix",
	query: "Seinfeld",
	shows: [
		{
			platformID: 70153373,
			title: "Seinfeld",
			img: "https://occ-0-4012-1490.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVM_z0cJlIzxHBx5dvdJRkeLAkUU_-aobRgDYq-bIeBAk_9_SN-wtKsdtWmLQ0vXDAd5t4KHHFIvs8wPNN_Ie1BFUQ.jpg?r=840",
			poster: "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
			synopsis:
				'The "show about nothing" is a sitcom landmark, with comic Jerry and his three sardonic friends finding laughs in both the mundane and the ridiculous.',
			releaseDate: "2021-10-01"
		}
	]
};

const queryShows = async (query, normalize = true) => {
	// if (query.toLowerCase() === "avatar") {
	// 	if (normalize) return normalizeShows(AvatarData, "avatar");
	// 	else return AvatarData;
	// }

    console.log(`Querying unogs for shows under "${query}"`)

	const options = {
		method: "GET",
		url: "https://unogsng.p.rapidapi.com/search",
		params: {
			type: "series",
			query: query
		},
		headers: {
			"X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
			"X-RapidAPI-Host": "unogsng.p.rapidapi.com"
		}
	};

	try {
		const response = await axios.request(options);

		if (normalize) {
            const normalizedData = normalizeShows(response.data, query);
            
            return normalizedData;
        } else return response.data;
	} catch (error) {
		console.error(error);
	}
};

const normalizeShows = (data, query) => {
	const results = data.results.map((result) => {
		return {
			showID: result.nfid,
			title: result.title,
			image: result.img,
			poster: result.poster,
			synopsis: result.synopsis,
			releaseDate: result.titledate
		};
	});

	return {
		platform: "netflix",
		query: query,
		shows: results
	};
};

const queryEpisodes = async (netflixID, normalize = true) => {

    console.log(`Querying unogs for a show with ID: ${netflixID}`)

	const options = {
		method: "GET",
		url: "https://unogsng.p.rapidapi.com/episodes",
		params: {
			netflixid: netflixID
		},
		headers: {
			"X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
			"X-RapidAPI-Host": "unogsng.p.rapidapi.com"
		}
	};

	try {
		const response = await axios.request(options);

		if (normalize) return normalizeEpisodes(response.data, netflixID);
		else return response.data;
	} catch (error) {
		console.error(error);
	}
};

const normalizeEpisodes = (data, netflixID) => {
	const seasons = data.map((season) => {
		return {
			seasonID: season.episodes[0].seasid,
			seasonNum: season.season,
			episodes: season.episodes.map((episode) => {
				return {
					episodeID: episode.epid,
					episodeNum: episode.epnum,
					title: episode.title,
					image: episode.img,
					synopsis: episode.synopsis
				};
			})
        }
	});

	return {
		platform: "netflix",
		showID: netflixID,
		seasons: seasons
	};
};
 
export default { queryShows, queryEpisodes };
