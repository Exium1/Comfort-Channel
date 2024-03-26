import "./styles/globals.css"

import { MemoryRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { AddShow } from "./pages/AddShow"

function IndexPopup() {

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addshow" element={<AddShow />} />
      </Routes>
    </MemoryRouter>
  )
}

export default IndexPopup
