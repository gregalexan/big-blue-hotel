export default function handler(req, res) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.end();
  }
  