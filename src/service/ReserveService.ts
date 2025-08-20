import { config } from "../config/config";
export interface FormTicket {
  name: string;
  phone: string;
  people: string;
  note: string;
}

// ฟังก์ชันเรียก API
export const createTicket = async (ticket: FormTicket) => {
  try {
    const response = await fetch(`${config.API_URL}/api/CreateATicket`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    });

    const data = await response.json();
    return data; // ส่งผลลัพธ์กลับไป
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw error; // ขว้าง error ให้ component handle
  }
};
