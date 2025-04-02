import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> { 
    try {
        const { password } = await request.json(); // Get password from the request body

        // Checking if the password matches the environment variable
        if (password === process.env.LOGIN_PASSWORD) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }
    } catch (_error) { // Using `_error` to prevent ESLint warning
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}git
