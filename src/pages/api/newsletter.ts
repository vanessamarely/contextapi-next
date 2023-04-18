// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //condition to check if the request is a POST request
  if (req.method === "POST") {
    //extracting the email from the request body
    const userEmail = req.body.email;
    //checking if the email is valid
    if (!userEmail || !userEmail.includes("@")) {
      //response error to the client
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    //response to the client
    res.status(201).json({ message: "Signed up!" });
  }
}
