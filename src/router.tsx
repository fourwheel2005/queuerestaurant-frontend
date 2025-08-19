
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import TicketStatus from "./pages/TicketStatus";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Reserve" element={<Reserve />} />
            <Route path="/TicketStatus" element={<TicketStatus />} />
        </Routes>
    );
}

