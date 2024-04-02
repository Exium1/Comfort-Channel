import axios from "axios";

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
	if (query.toLowerCase() === "avatar") {
		if (normalize) return normalizeShows(AvatarData, "avatar");
		else return AvatarData;
	}

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

		if (normalize) return normalizeShows(response.data, query);
		else return response.data;
	} catch (error) {
		console.error(error);
	}
};

const normalizeShows = (data, query) => {
	const results = data.results.map((result) => {
		return {
			platformID: result.nfid,
			title: result.title,
			img: result.img,
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

const queryEpisodes = async (showID, normalize = true) => {
	const options = {
		method: "GET",
		url: "https://unogsng.p.rapidapi.com/episodes",
		params: {
			netflixid: showID
		},
		headers: {
			"X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
			"X-RapidAPI-Host": "unogsng.p.rapidapi.com"
		}
	};

	try {
		const response = await axios.request(options);

		console.log(response.data);

		if (normalize) return normalizeEpisodes(response.data, showID);
		else return response.data;
	} catch (error) {
		console.error(error);
	}
};

const normalizeEpisodes = (data, showID) => {
	const episodes = data.map((season) => {
        return season.episodes.map((episode) => {
            return {
                episodeID: episode.episodeid,
                seasonID: season.seasonid,
                title: episode.title,
                episodeNum: episode.epnum,
                seasonNum: episode.seanum,
                episode: episode.episode,
                synopsis: episode.synopsis
            };
        });
	});

	return {
		platform: "netflix",
		showID: showID,
		episodes: results
	};
};

export default { queryShows, queryEpisodes };
