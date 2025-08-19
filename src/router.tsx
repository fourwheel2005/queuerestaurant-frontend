
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Reserve" element={<Reserve />} />
        </Routes>
    );
}

