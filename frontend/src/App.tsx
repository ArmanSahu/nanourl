import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main } from "./Pages/main"
import { Signup } from "./Pages/signup"
import { Login } from "./Pages/login"










function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
