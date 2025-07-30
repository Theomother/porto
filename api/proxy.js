export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyN8WTC_QUNARNLC5SR5M80fmTI5yscFIa3vFDIn90tWxgS2haPmaiTzQ7CUZQV8nsw/exec";

      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.text();

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.toString() });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
