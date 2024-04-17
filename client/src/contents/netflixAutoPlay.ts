import { sendToBackground } from "@plasmohq/messaging"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.netflix.com/*"],
}

window.addEventListener("load", () => {

  var interval = setInterval(async () => {

    var nextEpisodeButton = document.querySelectorAll('button[data-uia="next-episode-seamless-button"]');
    var nextEpisodeButton2 = document.querySelectorAll('button[data-uia="next-episode-seamless-button-draining"]');

    if (nextEpisodeButton.length > 0 || nextEpisodeButton2.length > 0) {

      const resp = await sendToBackground({
        name: "autoPlay" as const,
        extensionId: 'omffkccjejmkmcbmfbmnaphpbjpkgbhe' 
      })

      console.log(resp);

      clearInterval(interval);
    }
  }, 500);
});