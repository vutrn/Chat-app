import jwt from "jsonwebtoken";
const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // Prevents client JS from reading the cookie
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "production",
  });

  console.log("Generated JWT:", token);

  return token;
};

export { generateToken };
