export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Logged data:", req.body);
    res.status(200).json({ message: "Logged" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
