import "./styles/globals.css"

import { MemoryRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { AddShow } from "./pages/AddShow"
import { ShowDetails } from "./pages/ShowDetails"

function IndexPopup() {

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shows/" element={<Shows />} /> */}
        <Route path="/shows/add" element={<AddShow />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
      </Routes>
    </MemoryRouter>
  )
}

export default IndexPopup
