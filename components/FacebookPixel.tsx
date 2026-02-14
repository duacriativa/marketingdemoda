"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function FacebookPixel() {
    const [loaded, setLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (!loaded) return;
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init("2344835272651307"); // Dua ID
                ReactPixel.pageView();

                // Send to Conversion API
                fetch("/api/conversion", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        event_name: "PageView",
                        event_source_url: window.location.href,
                        user_data: {}, // Add user data if available (email, phone, etc.)
                    }),
                }).catch((err) => console.error("CAPI Error:", err));
            });
    }, [pathname, loaded]);

    return (
        <div>
            <Script
                id="fb-pixel"
                src="https://connect.facebook.net/en_US/fbevents.js"
                onLoad={() => setLoaded(true)}
                strategy="afterInteractive"
                data-pixel-id="2344835272651307"
            />
        </div>
    );
}
