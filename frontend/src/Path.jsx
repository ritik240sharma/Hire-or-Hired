import { Routes, Route } from "react-router-dom"
import RegisterHr from "./Pages/HR/RegisterHr"
import HrList from "./Pages/HR/HrList"
import HrInfo from "./Pages/HR/HrInfo"
import Home from "./Pages/Home"
import Error from "./Pages/Error"

function Path() {
  return (
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/RegisterHr" element={<RegisterHr />}/>
      <Route path="/HrList" element={<HrList />}/>
      <Route path="/HrInfo" element={<HrInfo />}/>
      <Route path="*" element={<Error />}/>
   </Routes>
  )
}

export default Path