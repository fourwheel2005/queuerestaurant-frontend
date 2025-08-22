import { Router, Request, Response, NextFunction } from "express";

const router = Router();


const tickets = [
  {
    id: "12345",
    name: "John Doe",
    phone: "0123456789",
    queue: "13",
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
    queue: "14",
    people: 3,
    note: "Near window",
    time: "2023-10-01T12:30:00Z",
    queueDifference: 2,
    status: "pending",
  },
  {
    id: "20251001130000",
    name: "Bob Lee",
    phone: "0998887777",
    queue: 15,
    people: 1,
    note: "",
    time: "2023-10-01T13:00:00Z",
    queueDifference: 0,
    status: "cancelled",
  },
];


// POST /api/CreateATicket
router.post("/CreateATicket", (req: Request, res: Response, next: NextFunction) => {
  const { name, phone, people, note } = req.body;

  console.log("/CreateATicket", req.body);
  if (!name || !phone) {
    return res.status(400).json({ status: "fail", message: "ข้อมูลไม่ครบ" });
  }
  res.json({
    status: "Success",
    ticket: {
      id: "12345"
    },
  });
});

router.post("/SearchTickets", (req: Request, res: Response, next: NextFunction) => {
  const { id, phone, date } = req.body;
  console.log("/SearchTickets", req.body)
  res.json({
    status: "Success",
    ticket: tickets
  })
});


router.post("/ConfirmAttendance", (req: Request, res: Response, next: NextFunction) => {
  const { id, confirmAttendance } = req.body;

  console.log("/ConfirmAttendance", req.body);

  res.json({
    status: "Success",
  })

})
export default router;
