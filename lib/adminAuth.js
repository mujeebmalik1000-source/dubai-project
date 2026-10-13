
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyAdminRequest() {
  try {
    if (!process.env.JWT_SECRET) {
      return null;
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("adminToken")?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.adminId) {
      return null;
    }

    return decoded;
  } catch (error) {
    return null;
  }
}
