import { Routes, Route } from "react-router-dom"
import RegisterHr from "./Pages/HR/RegisterHr"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
function Path() {
  return (
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/RegisterHr" element={<RegisterHr />}/>
      <Route path="*" element={<Error />}/>
   </Routes>
  )
}

export default Path