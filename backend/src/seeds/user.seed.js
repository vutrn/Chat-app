import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    fullname: "Emma Thompson",
    email: "emma.thompson@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    fullname: "Olivia Miller",
    email: "olivia.miller@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    fullname: "Sophia Davis",
    email: "sophia.davis@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    fullname: "Ava Wilson",
    email: "ava.wilson@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    fullname: "Isabella Brown",
    email: "isabella.brown@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fullname: "Mia Johnson",
    email: "mia.johnson@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    fullname: "Charlotte Williams",
    email: "charlotte.williams@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    fullname: "Amelia Garcia",
    email: "amelia.garcia@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    fullname: "James Anderson",
    email: "james.anderson@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    fullname: "William Clark",
    email: "william.clark@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    fullname: "Benjamin Taylor",
    email: "benjamin.taylor@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    fullname: "Lucas Moore",
    email: "lucas.moore@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    fullname: "Henry Jackson",
    email: "henry.jackson@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    fullname: "Alexander Martin",
    email: "alexander.martin@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    fullname: "Daniel Rodriguez",
    email: "daniel.rodriguez@example.com",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();