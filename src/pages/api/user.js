import { API_URL } from "@/lib/index";
import cookie from "cookie";

const user = async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    
    const apiRes = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'

      },
    });

    const user = await apiRes.json();

    console.log(user)

    if (apiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "User forbidden" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default user;
