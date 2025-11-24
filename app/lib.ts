import { cache } from "react";

export const fetchTime = cache(async function fetchTime() {
    const date = new Date().getTime();
    console.time(`[${date}] FETCH ["DATE_API_RESULT"]`);
    const dateApiResult = await fetch(
        "https://timeapi.fredkiss3.workers.dev/?timezone=Europe/Paris",
        {
            cache: "force-cache",
            next: {
                tags: ["DATE_API_RESULT"],
            },
        }
    ).then(
        (r) =>
            r.json() as Promise<{
                unixtime: number;
                utc_datetime: string;
            }>
    );
    console.timeEnd(`[${date}] FETCH ["DATE_API_RESULT"]`);
    return {
        time: dateApiResult.time,
        timestamp: dateApiResult.timestamp,
    };
});
