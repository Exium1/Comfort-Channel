import "./ShowInput.css"

import NetflixLogo from "data-base64:~assets/icons/netflix-logo.svg"
import { useState } from "react"

export const ShowInput = ({handleQuery} : {handleQuery: any}) => {
  const [searchValue, setSearchValue] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleQuery(searchValue)
    }
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="show-input-wrapper">
      <button>
        <img
          className="show-input-logo"
          src={NetflixLogo}
          alt="Netflix Logo"
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
  )
}
