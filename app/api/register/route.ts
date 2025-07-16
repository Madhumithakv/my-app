import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, gender, phone, email } = data;

  try {
    await pool.query(
      "INSERT INTO registrations (username, gender, phone, email) VALUES ($1, $2, $3, $4)",
      [username, gender, phone, email]
    );
    return NextResponse.json({ message: "Registered successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to register" }, { status: 500 });
  }
}
