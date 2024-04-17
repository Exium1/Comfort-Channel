import type { PlasmoMessaging } from "@plasmohq/messaging"
import { playNext } from "~scripts/playNext";
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    playNext();
 
    res.send({message: "Playing next episode!"})
}
 
export default handler