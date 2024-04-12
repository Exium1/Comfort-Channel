import { Popup } from "~src/components/Popup/Popup"
import { ShowCard } from "~src/components/ShowCard/ShowCard";
import { ShowEpisodes } from "~src/components/ShowEpisodes/ShowEpisodes";

export const ShowDetails = () => {

    const show =
        {
            id: "6780532",
            name: "Adventure Time",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/83/cf/ec/83cfeca9-4f8a-bcc9-4039-c270537079d4/mzl.ylczufvu.lsr/600x600bb.jpg",
            seasonCount: 6,
            episodeCount: 43,
            added: 0,
            episodes: [
                {
                    id: "1",
                    name: "Slumber Party Panic",
                    season: 1,
                    episode: 1,
                    added: false
                },
                {
                    id: "2",
                    name: "Trouble in Lumpy Space",
                    season: 1,
                    episode: 2,
                    added: false
                },
                {
                    id: "3",
                    name: "Prisoners of Love",
                    season: 1,
                    episode: 3,
                    added: false
                },
                {
                    id: "4",
                    name: "Tree Trunks",
                    season: 1,
                    episode: 4,
                    added: false
                },
                {
                    id: "5",
                    name: "The Enchiridion!",
                    season: 1,
                    episode: 5,
                    added: false
                },
                {
                    id: "6",
                    name: "The Jiggler",
                    season: 1,
                    episode: 6,
                    added: false
                },
                {
                    id: "7",
                    name: "Ricardio the Heart Guy",
                    season: 1,
                    episode: 7,
                    added: false
                },
                {
                    id: "8",
                    name: "Business Time",
                    season: 2,
                    episode: 1,
                    added: false
                },
                {
                    id: "9",
                    name: "My Two Favorite People",
                    season: 2,
                    episode: 2,
                    added: false
                },
                {
                    id: "10",
                    name: "Memories of Boom Boom Mountain",
                    season: 2,
                    episode: 3,
                    added: false
                },
                {
                    id: "11",
                    name: "Wizard",
                    season: 2,
                    episode: 4,
                    added: false
                },
                {
                    id: "12",
                    name: "Evicted!",
                    season: 2,
                    episode: 5,
                    added: false
                },
                {
                    id: "13",
                    name: "City of Thieves",
                    season: 2,
                    episode: 6,
                    added: false
                },
                {
                    id: "14",
                    name: "The Witch's Garden",
                    season: 2,
                    episode: 7,
                    added: false
                }
            ]
        }

    return (
        <Popup title="Show Details" back={true} className="gap-3">
            <div className="flex flex-col gap-3">
                <ShowCard show={show}/>
                <ShowEpisodes episodes={show.episodes}/>
            </div>
        </Popup>
    );
}