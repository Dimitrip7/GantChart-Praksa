import express, { Request, Response } from "express";
import prisma from "./prisma";
import cors from "cors"; // Import CORS

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Define a stricter request body interface
interface EventRequestBody {
  name: string;
  dateStart: string;
  dateEnd: string;
  status: string; // Add status as required
  partnerId: string;
}

// POST /events
app.post("/events", async (req: Request, res: Response) => {
  try {
    const { name, dateStart, dateEnd, status, partnerId } = req.body as EventRequestBody;

    // Validate required fields
    if (!name || !dateStart || !dateEnd || !status || !partnerId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create an event
    const event = await prisma.event.create({
      data: {
        name,
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        status, // Add status field
        partnerId,
      },
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /events
app.get("/events", async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: { Partner: true }, // Include the related Partner
    });
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Server Listener
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
