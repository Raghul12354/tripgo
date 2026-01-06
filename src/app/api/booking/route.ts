import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const result = await await sql`SELECT * FROM users`
        const data = result.rows;
        // console.log(data);
        return NextResponse.json({ message: "vercel pg data is fetched", data }, { status: 200 });
    } catch (error) {
        console.error('Error fetching vercel pg data:', error);
        return NextResponse.json({ message: "GET method Error in PostgreSQL", error }, { status: 500 });
    }
}

export const POST = async (req: Request) => {
    try {
        const { Name, Email, PhoneNumber, TourName, Transport, Adults, Children, StartDate, EndDate, SplMessage } = await req.json();
        const response = await sql`INSERT INTO users (Name, Email, PhoneNumber, TourName, Transport, Adults, Children, StartDate, EndDate, SplMessage)
        VALUES (${Name}, ${Email}, ${PhoneNumber}, ${TourName}, ${Transport}, ${Adults}, ${Children}, ${StartDate}, ${EndDate}, ${SplMessage})
        `
        return NextResponse.json({ message: "Success in inserting data in PostgreSQL" }, { status: 200 });
    } catch (error) {
        console.log(error, "error in vercel post req");
        return NextResponse.json({ message: "Post Req error in PostgreSQL", error }, { status: 500 });
    }
}

export const DELETE = async (request: Request) => {
    try {
        const { id } = await request.json();
        const res = await sql`DELETE FROM Users WHERE Id = ${id}`
        return NextResponse.json({ message: "Deleted the user details" }, { status: 200 })
    } catch (error) {
        console.log(error, "error deleting the user details");
        return NextResponse.json({ message: "error in delete the user details" }, { status: 500 })
    }
}