import { getNextEpisode } from "./api";

const playNext = async () => {

    const nextEpisodeURL = await getNextEpisode();

    console.log("Next episode URL: " + nextEpisodeURL);

    chrome.tabs.query({ url: "*://*.netflix.com/*" }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { url: nextEpisodeURL });
        } else {
            chrome.tabs.create({ url: nextEpisodeURL });        
        }
    });

    window.close();
}

export { playNext };