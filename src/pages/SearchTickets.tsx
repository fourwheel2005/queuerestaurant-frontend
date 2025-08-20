import React, { useState } from "react";
import type { FromSearchTicket } from "../service/SearchTicketsService";
import Button from "../assets/button";
import BackButton from "../assets/BackButton";
import { useNavigate } from "react-router-dom";
const SearchTickets: React.FC = () => {
    
    const navigate = useNavigate();
    const [formSearch, setFormSearch] = useState<FromSearchTicket>({
        phone: '',
        date: '',
    });
    const [showPopup, setShowPopup] = useState("");
    const handleSubmit = () => {
        if (!formSearch.date || !formSearch.phone) {
            setShowPopup("กรุณากรอกวันเดือยและเบอร์โทรให้ครบ"); return;
        }
        
        navigate("/TicketStatus", { state: formSearch });


    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormSearch({
            ...formSearch,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-80 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
                    <h1 className="text-center mb-4 font-bold">ข้อมูลการจองคิว</h1>

                    <input
                        type="text"
                        name="date"
                        placeholder="วันที้จอง (dd/mm)"
                        value={formSearch.date}
                        onChange={handleChange}
                        className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="เบอร์โทรศัพท์"
                        value={formSearch.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />



                    <Button onClick={handleSubmit} className="w-full py-2 rounded-lg">ค้นหาคิว</Button>
                </div>
                <div className="flex justify-center mt-4">
                    <BackButton className="mt-4">กลับ</BackButton>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-40 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <p className="mb-4 font-semibold text-red-600">
                            {showPopup}
                        </p>
                        <button
                            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                            onClick={() => setShowPopup("")}
                        >
                            ปิด
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default SearchTickets;