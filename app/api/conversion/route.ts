import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export async function POST(req: NextRequest) {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
        return NextResponse.json(
            { error: "Missing Facebook Configuration" },
            { status: 500 }
        );
    }

    const { event_name, event_source_url, user_data, custom_data } = await req.json();

    const current_timestamp = Math.floor(new Date().getTime() / 1000);

    const payload = {
        data: [
            {
                event_name: event_name,
                event_time: current_timestamp,
                action_source: "website",
                event_source_url: event_source_url,
                user_data: {
                    client_ip_address: req.headers.get("x-forwarded-for") || null,
                    client_user_agent: req.headers.get("user-agent"),
                    ...user_data,
                },
                custom_data: custom_data,
            },
        ],
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Facebook API Error:", data);
            return NextResponse.json(data, { status: response.status });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("ServerError:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
