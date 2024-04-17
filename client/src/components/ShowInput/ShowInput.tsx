import "./ShowInput.css"

import NetflixLogo from "data-base64:~assets/logos/netflix-logo.svg"
import PrimeVideoLogo from "data-base64:~assets/logos/prime-video-logo.svg"
import DisneyLogo from "data-base64:~assets/logos/disney-logo.svg"
import HuluLogo from "data-base64:~assets/logos/hulu-logo.svg"

import { useState } from "react"

export const ShowInput = ({handleQuery} : {handleQuery: any}) => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState("Netflix")

  const getPlatformLogo = (platform: string) => {
    switch (platform) {
      case "Netflix":
        return NetflixLogo
      case "Prime Video":
        return PrimeVideoLogo
      case "Disney+":
        return DisneyLogo
      case "Hulu":
        return HuluLogo
      default:
        return NetflixLogo
    }
  }

  const [dispPlatforms, setDispPlatforms] = useState(false)

  const platformDropDown = () => {
    setDispPlatforms(!dispPlatforms)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleQuery(searchValue, selectedPlatforms)
    }
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="show-input-wrapper">
        <button onClick={platformDropDown}>
          <img
            className="show-input-logo"
            src={getPlatformLogo(selectedPlatforms)}
            alt={selectedPlatforms + " logo"}
            height={30}
            width={30}
          />
        </button>
        <input
          type="search"
          placeholder="Search"
          className="show-input-field text-md"
          value={searchValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
      <div className={"show-input-platforms show-input-wrapper " + (dispPlatforms ? "show" : "")}>
        <button onClick={() => setSelectedPlatforms("Netflix")}><img className="show-input-logo" src={NetflixLogo} height={30} width={30} alt="Netflix logo"/></button>
        <button onClick={() => setSelectedPlatforms("Hulu")}><img className="show-input-logo" src={HuluLogo} height={30} width={30} alt="Hulu logo"/></button>
        <button onClick={() => setSelectedPlatforms("Disney+")}><img className="show-input-logo" src={DisneyLogo} height={30} width={30} alt="Disney logo"/></button>
        <button onClick={() => setSelectedPlatforms("Prime Video")}><img className="show-input-logo" src={PrimeVideoLogo} height={30} width={30} alt="Prime videoo logo"/></button>
      </div>
    </>
  )
}
