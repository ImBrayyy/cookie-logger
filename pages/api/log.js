export default function handler(req, res) {
  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // CORS preflight request — respond immediately
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    console.log('Logged data:', req.body);
    res.status(200).json({ message: 'Logged' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
