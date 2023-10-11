import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import "./App.css"
import Reviews from "./components/Reviews"
import Residents from "./components/Residents"
import Users from "./components/Users"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="residents" element={<Residents />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
