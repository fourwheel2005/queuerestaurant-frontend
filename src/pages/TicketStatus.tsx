import React, { use, useState } from "react";
import BackButton from "../assets/BackButton";
import Swal, { type SweetAlertIcon } from "sweetalert2";
import { useLocation } from "react-router-dom";
import type { FromSearchTicket } from "../service/SearchTicketsService";


const TicketStatus: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const formSearch = location.state as FromSearchTicket;
  const ticketId = (location.state as { ticketId: string })?.ticketId;

  console.log(formSearch);

  // useEffect(() => {
  //   try {
  //     const data = await fetch(`https://api.example.com/ticket/${id}`);
  //   } catch (error) {

  //   }
  // }, [id]);

  const tickets = [
    {
      id: "12345",
      name: "John Doe",
      phone: "0123456789",
      Queue: "13",
      people: 2,
      note: "No special requests",
      time: "2023-10-01T12:00:00Z",
      queueDifference: 5,
      status: "confirmed",
    },
    {
      id: "12346",
      name: "Jane Smith",
      phone: "0987654321",
      Queue: "13",
      people: 3,
      note: "Near window",
      time: "2023-10-01T12:30:00Z",
      queueDifference: 2,
      status: "waiting",
    }
  ];



  const handleShowPopup = async (message: string, icon: SweetAlertIcon = "info") => {
    Swal.fire({
      title: "แจ้งเตือน",
      text: message,
      icon: icon,
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

        <div className="space-y-6">
          {tickets.map((ticket) => (
            <section
              key={ticket.id}
              className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              {/* Queue Number */}
              <div className="mb-6 sm:mb-8 rounded-lg bg-gray-100 text-center p-8">
                <div className="text-4xl font-extrabold tracking-widest text-gray-900">
                  #{ticket.Queue} {/* <-- แสดง Queue แทน ID */}
                </div>
                <div className="mt-2 text-sm text-gray-500">หมายเลขคิวของคุณ</div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="space-y-1">
                  <div className="text-gray-500">ชื่อ:</div>
                  <div className="font-medium">{ticket.name}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-500">จำนวน:</div>
                  <div className="font-medium">{ticket.people}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-500">จองเมื่อ:</div>
                  <div className="font-medium">{new Date(ticket.time).toLocaleTimeString()}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-500">โทรศัพท์:</div>
                  <div className="font-medium">{ticket.phone}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-500">จำนวนคิวที่รอ:</div>
                  <div className="font-medium">{ticket.queueDifference} คน</div>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-500">สถานะการจองคิว:</div>
                  <div className="font-medium">{ticket.status} </div>
                </div>
              </div>

              {/* Confirm Button */}
              <div className="mt-6">
                <button
                  onClick={() => handleShowPopup(`คุณต้องการยกเลิกคิว ${ticket.Queue}?`, "warning")}
                  className="w-full rounded-md border border-gray-300 bg-white py-2.5 text-sm font-medium hover:bg-gray-50 active:bg-gray-100"
                >
                  ยกเลิกการจองคิว
                </button>
              </div>
            </section>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <BackButton className=""  >ย้อยกลับ</BackButton>
        </div>
      </div>
    </main>
  );
};

export default TicketStatus;
