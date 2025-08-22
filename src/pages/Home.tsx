import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../assets/Button";
import { searchTickets, } from "../service/SearchTicketsService";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [queue, setQueue] = useState(Number) 

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await searchTickets({all: true});
        if (data.status === "Success") {
          setQueue(data.ticket.lenght);
        } else {
          console.error("Error fetching tickets:", data.message);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* ===== Hero (รูป) ===== */}
      <div className="w-full">
        <div className="max-w-9/10 mx-auto h-72 overflow-hidden rounded-lg">
          <img
            src="/image/yummy-258853_1280.jpg"   // อยู่ใน public/image/
            alt="ร้านอาหาร"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ===== Content (ข้อมูล) ===== */}
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* กล่องคิวที่รอ */}
          <div className="rounded-xl border border-gray-300 bg-white shadow-sm p-6 text-center flex flex-col justify-center">
            <div className="text-4xl mb-2">👥</div>
            <h1 className="text-3xl font-bold">12</h1>
            <p className="text-gray-500">คิวที่รอ</p>
          </div>

          {/* กล่องข้อมูลร้าน */}
          <div className="rounded-xl border border-gray-300 bg-white shadow-sm p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">ข้อมูลร้าน</h2>
            <div className="space-y-3 text-sm">
              <p>📍 123 ถนนสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110</p>
              <p>📞 02-123-4567</p>
              <p>⭐ 4.8 / 5.0</p>
              <p>🍴 อาหารไทยแท้</p>
              <p className="text-gray-500">
                ร้านอาหารไทยดั้งเดิม ใช้วัตถุดิบคุณภาพและประสบการณ์กว่า 20 ปี
              </p>
            </div>
          </div>

          {/* กล่องจองคิวล่วงหน้า */}
          <div className="rounded-xl border border-gray-300 bg-white shadow-sm p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold">จองคิวล่วงหน้า</h2>

            <div className="grid grid-cols-2 gap-2 text-sm bg-gray-50 border rounded p-3">
              <span>คิวถัดไป</span>
              <span className="text-right font-semibold">#{queue + 1}</span>
            </div>

            <Button onClick={() => navigate("/Reserve")}>จองคิวล่วงหน้า</Button>

            <button
              onClick={() => navigate("/SearchTickets")}
              className="border border-gray-300 rounded py-2 hover:bg-gray-100"
            >
              ดูสถานะการจอง
            </button>
          </div>
        </div>

        {/* spacing ด้านล่าง */}
        <div className="h-10" />
      </div>
    </div>
  );
};

export default Home;
