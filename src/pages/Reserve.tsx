import React, { useState } from "react";
import BackButton from "../assets/BackButton";
import Button from "../assets/Button";
import { createTicket } from "../service/ReserveService";
import type { FormTicket } from "../service/ReserveService";
import { useNavigate } from "react-router-dom";
import Swal, { type SweetAlertIcon } from "sweetalert2";

const Reserve: React.FC = () => {
    const navigate = useNavigate();
    const [formTicket, setFormTicket] = useState<FormTicket>({
        name: "",
        phone: "",
        people: "",
        note: "",
    });
    const peopleOptions = [1, 2, 3, 4, 5, 6, 7];

    const handleShowPopup = async (message: string, icon: SweetAlertIcon = "info") => {
        const result = await Swal.fire({
            title: "แจ้งเตือน",
            text: message,
            icon: icon,
            confirmButtonText: "ตกลง",
            confirmButtonColor: "red",
        });
        return result.isConfirmed
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormTicket({
            ...formTicket,
            [e.target.name]: e.target.value,

        });
    };
    const handleSubmit = async () => {
        if (!formTicket.name || !formTicket.phone || !formTicket.people ||  formTicket.phone.length > 10 ||  formTicket.phone.length < 10) {
            handleShowPopup("กรุณากรอกชื่อ, เบอร์โทร และจำนวนคนให้ครบ", "warning"); return;
        }
        try {
            const data = await createTicket(formTicket);
            console.log(data);
            if (data.status === "Success") {
                const isConfirmed = await handleShowPopup("จองคิวเรียบร้อยแล้ว 🎉", data.status.toLowerCase());
                if (isConfirmed) {
                    navigate("/TicketStatus", { state: { id: data.ticket.id, all: false } });
                }
            } else {
                handleShowPopup(data.message, "warning");
            }
        } catch {
            handleShowPopup("ไม่สามารถเชื่อมต่อเซิฟเวอร์ได้", "error");
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-80 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
                    <h1 className="text-center mb-4 font-bold">ข้อมูลการจองคิว</h1>

                    <input
                        type="text"
                        name="name"
                        placeholder="ชื่อ"
                        value={formTicket.name}
                        onChange={handleChange}
                        className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="เบอร์โทรศัพท์"
                        value={formTicket.phone}
                        onChange={handleChange}
                        maxLength={10}
                        pattern="[0-9]*"
                        className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <select
                        name="people"
                        value={formTicket.people}
                        onChange={handleChange}
                        className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">เลือกจำนวนคน</option>
                        {peopleOptions.map((num) => (
                            <option key={num} value={num}>
                                {num} คน
                            </option>
                        ))}
                    </select>

                    <textarea
                        name="note"
                        placeholder="หมายเหตุ"
                        value={formTicket.note}
                        onChange={handleChange}
                        className="w-full mb-6 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <Button onClick={handleSubmit} className="w-full py-2 rounded-lg">ยืนยันการจองคิว</Button>
                </div>
                <div className="flex justify-center ">
                    <BackButton className="mt-4">กลับ</BackButton>
                </div>
            </div>
        </div>
    );
};

export default Reserve;
