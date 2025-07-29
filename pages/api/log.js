export default function handler(req, res) {
  // Allow CORS from any origin (adjust in prod)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // CORS preflight request
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    console.log("Logged data:", req.body);
    res.status(200).json({ message: "Logged" });
  } else {
    res.status(405).end();
  }
}
