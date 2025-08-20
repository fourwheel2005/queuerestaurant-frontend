import React, { useState } from "react";
import BackButton from "../assets/BackButton";

type Booking = {
    id: number;
    name: string;
    people: number;
    time: string;
    phone: string;
};

const ConfirmAttendance: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    // mock data (คุณอาจโหลดจาก API ได้)
    const bookings: Booking[] = [
        { id: 13, name: "D", people: 5, time: "19:10", phone: "333-33-3333" },
        { id: 14, name: "สมชาย", people: 3, time: "19:20", phone: "099-999-9999" },
        { id: 15, name: "Alice", people: 2, time: "19:25", phone: "081-111-1111" },
        { id: 15, name: "Alice", people: 2, time: "19:25", phone: "081-111-1111" },

    ];

    return (
        <main className="min-h-screen flex items-start justify-center bg-gray-50 text-gray-800">
            <div className="w-full max-w-5xl px-4 py-10">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        สถานะการจองคิว
                    </h1>
                    <p className="text-gray-500 mt-1">ติดตามสถานะ</p>
                </header>

                {/* ลิสต์การจองคิว */}
                <div className="grid grid-cols-3 gap-6">
                    {bookings.map((booking) => (
                        <section
                            key={booking.id}
                            className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
                        >
                            {/* Queue Number */}
                            <div className="mb-6 sm:mb-8 rounded-lg bg-gray-100 text-center p-8">
                                <div className="text-4xl font-extrabold tracking-widest text-gray-900">
                                    #{booking.id}
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                    หมายเลขคิวของคุณ
                                </div>
                            </div>

                            {/* Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                                <div className="space-y-1">
                                    <div className="text-gray-500">ชื่อ:</div>
                                    <div className="font-medium">{booking.name}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-gray-500">จำนวน:</div>
                                    <div className="font-medium">{booking.people}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-gray-500">จองเมื่อ:</div>
                                    <div className="font-medium">{booking.time}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-gray-500">โทรศัพท์:</div>
                                    <div className="font-medium">{booking.phone}</div>
                                </div>
                            </div>

                            {/* Confirm Button */}
                            <div className="mt-6 ">
                                <button
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setShowModal(true);
                                    }}
                                    className="w-full rounded-md border border-gray-300 bg-white py-2.5 text-sm font-medium hover:bg-gray-50 active:bg-gray-100"
                                >
                                    ยืนยันการจองคิว
                                </button>
                            </div>
                             <div className="mt-6 ">
                                <button
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setShowModal(true);
                                    }}
                                    className="w-full rounded-md border border-gray-300 bg-white py-2.5 text-sm font-medium hover:bg-gray-50 active:bg-gray-100"
                                >
                                    ยกเลิกการจองคิว
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <BackButton className="">ย้อนกลับ</BackButton>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
                        <h2 className="text-xl font-bold mb-6">
                            ยกเลิกการจองคิว #{selectedBooking.id}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            คุณต้องการยกเลิกการจองของ{" "}
                            <span className="font-semibold">{selectedBooking.name}</span> ใช่หรือไม่?
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
                                onClick={() => {
                                    alert(
                                        `ยืนยันการยกเลิกคิว #${selectedBooking.id} เรียบร้อยแล้ว!`
                                    );
                                    setShowModal(false);
                                }}
                            >
                                ยืนยัน
                            </button>
                            <button
                                className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                                onClick={() => setShowModal(false)}
                            >
                                ยกเลิก
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ConfirmAttendance;
