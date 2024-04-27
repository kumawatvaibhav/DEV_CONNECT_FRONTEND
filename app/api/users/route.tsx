import { getuser_data } from "@/lib/data";
import { NextResponse } from "next/server";


export const GET = async (req: Request, res: Response) => {
  try {
    const User_data = getuser_data();
    return NextResponse.json({ message: "OK" , User_data},{status : 200});
  } catch (err) {
    return NextResponse.json({message:"Error",err}.err , {
      status: 500,
    });
  }
};
