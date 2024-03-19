import Button from "@/components/Button/button";
import Popup from "@/components/Popup/popup";

export default function AddShow() {
  // const close = () => window.close();

  return (
    <Popup title="Time to unwind?">
      <div className="flex flex-col gap-3">
        <Button text={"Play"} icon="/assets/icons/player-play.svg" type="primary"/>
        <div className="flex space-between gap-3">
          <Button text={"Add Show"} type="primary"/>
          <Button text={"View Shows"} type="primary"/>
        </div>
      </div>
    </Popup>
  );
}
