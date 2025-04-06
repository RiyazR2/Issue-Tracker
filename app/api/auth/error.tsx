// pages/api/auth/error.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function error(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(500)
    .json({ error: "Authentication Error", message: req.query.error });
}
