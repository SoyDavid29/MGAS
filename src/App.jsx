import { Routes, Route, Navigate } from "react-router-dom";
import Splash from "./Splash";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
