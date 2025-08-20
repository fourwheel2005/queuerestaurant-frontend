import React, { useState } from "react";
import BackButton from "../assets/BackButton";
import Swal from "sweetalert2";
const TicketStatus: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowPopup = () => {
    Swal.fire({
      title: "แจ้งเตือน",
      text: "ยกเลิกการจองคิว",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        alert("ยืนยันการยกเลิกเรียบร้อยแล้ว!");
        setShowModal(false);
      } else {
        setShowModal(false);
      }
    });
  };

  return (
    <main className="min-h-screen flex items-start justify-center bg-gray-50 text-gray-800">
      <div className="w-full max-w-5xl px-4 py-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">
            สถานะการจองคิว
          </h1>
          <p className="text-gray-500 mt-1">
            ติดตามสถานะคิวของคุณได้ที่นี่
          </p>
        </header>

        {/* Card */}
        <section className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          {/* Queue Number */}
          <div className="mb-6 sm:mb-8 rounded-lg bg-gray-100 text-center p-8">
            <div className="text-4xl font-extrabold tracking-widest text-gray-900">
              #13
            </div>
            <div className="mt-2 text-sm text-gray-500">หมายเลขคิวของคุณ</div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1">
              <div className="text-gray-500">ชื่อ:</div>
              <div className="font-medium">D</div>
            </div>
            <div className="space-y-1">
              <div className="text-gray-500">จำนวน:</div>
              <div className="font-medium">5</div>
            </div>
            <div className="space-y-1">
              <div className="text-gray-500">จองเมื่อ:</div>
              <div className="font-medium">19:10</div>
            </div>
            <div className="space-y-1">
              <div className="text-gray-500">โทรศัพท์:</div>
              <div className="font-medium">333-33-3333</div>
            </div>
            <div className="space-y-1">
              <div className="text-gray-500">จำนวณคิวที่รอ:</div>
              <div className="font-medium">20 คน</div>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="mt-6">
            <button
              onClick={handleShowPopup}
              className="w-full rounded-md border border-gray-300 bg-white py-2.5 text-sm font-medium hover:bg-gray-50 active:bg-gray-100"
            >
              ยืนยันการจองคิว
            </button>
          </div>
        </section>
        <div className="flex justify-center mt-4">
          <BackButton className=""  >ย้อยกลับ</BackButton>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
            <h2 className="text-xl font-bold mb-6">ยกเลิกการจองคิว</h2>
            <div className="flex justify-center gap-4">
              <button
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
                onClick={() => {
                  alert("ยืนยันการยกเลิกเรียบร้อยแล้ว!");
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

export default TicketStatus;
