// pages/api/submitForm.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Send request to Google Apps Script
    const googleResponse = await fetch("https://script.google.com/macros/s/AKfycbwmsvWpqNP5DnQ2k5D-vHrHnsR14zLL40DG2vap4roLjT_hDnN4_TuaeveWRlbLOvfpPQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await googleResponse.text(); // or .json() if your script returns JSON

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error("Error forwarding to Google Script:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
