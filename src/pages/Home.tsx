import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../assets/button";
// import Reserve from "./Reserve";

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <img src="pg" alt="Petr Sevcovic" className="w-full h-full object-cover" />
            <h1 className="full text-red-950">สถานะคิวปัจจุบัน</h1>
            <div>
                <div className="border grid grid-cols-3 gap-4">
                    <div className="border border-gray-300 rounded flex flex-col items-center justify-center p-4">
                        <img src="" alt="pepol" />
                        <h1>12</h1>
                        <h1>คิวที่รอ</h1>
                    </div>
                    <div className="border border-gray-300 rounded">
                        <h1>B</h1>
                    </div>
                    <div className="border border-gray-300 rounded p-4 flex flex-col gap-2">
                        <h1>จองคิวล่วงหน้า</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <h1>คิวถัดไป</h1>
                            <h1 className="text-right">13</h1>
                            <h1>เวลาประมาณ</h1>
                            <h1 className="text-right"> 45 นาที</h1>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            กดฉัน
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            กดฉัน
                        </button>
                        <Button
                            onClick={() => navigate('/Reserve')}
                            className="text-center bg-red-500"
                        >
                            กดฉัน
                        </Button>

                    </div>
                    <div className="border border-gray-300 rounded">

                        <h1>D</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;