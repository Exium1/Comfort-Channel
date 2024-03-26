import { ShowInput } from '../ShowInput/ShowInput';
import { ShowCard } from '../ShowCard/ShowCard';
import "./ShowSearch.css"

export const ShowSearch = () => {

    const showList = [
        {
            id: "6780532",
            name: "Adventure Time",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/83/cf/ec/83cfeca9-4f8a-bcc9-4039-c270537079d4/mzl.ylczufvu.lsr/600x600bb.jpg",
            seasonCount: 6,
            episodeCount: 43,
            added: false
        },
        {
            id: "73232544",
            name: "Adventure Time",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/83/cf/ec/83cfeca9-4f8a-bcc9-4039-c270537079d4/mzl.ylczufvu.lsr/600x600bb.jpg",
            seasonCount: 6,
            episodeCount: 43,
            added: true
        },
        {
            id: "43760982",
            name: "Adventure Time",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/83/cf/ec/83cfeca9-4f8a-bcc9-4039-c270537079d4/mzl.ylczufvu.lsr/600x600bb.jpg",
            seasonCount: 6,
            episodeCount: 43,
            added: false
        }
    ]

    const handleQuery = (query: string) => {
        window.alert(`Search query: ${query}`)
    }

    return (
        <div className='flex flex-col gap-3'>
            <ShowInput handleQuery={handleQuery}/>
            {showList.map((show) => <ShowCard key={show.id} show={show}/>)}
        </div>
    )
}