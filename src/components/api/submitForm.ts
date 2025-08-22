// pages/api/submitForm.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwmsvWpqNP5DnQ2k5D-vHrHnsR14zLL40DG2vap4roLjT_hDnN4_TuaeveWRlbLOvfpPQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
