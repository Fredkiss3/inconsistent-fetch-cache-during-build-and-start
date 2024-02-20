import { cache } from "react";

export const fetchTime = cache(async function fetchTime() {
    const date = new Date().getTime();
    console.time(`[${date}] FETCH ["DATE_API_RESULT"]`);
    const dateApiResult = await fetch(
        "http://worldtimeapi.org/api/timezone/Europe/Paris",
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
        unixtime: dateApiResult.unixtime,
        utc_datetime: dateApiResult.utc_datetime,
    };
});
