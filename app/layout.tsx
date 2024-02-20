import { cache } from "react";
import { fetchTime } from "./lib";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const data = await fetchTime();

    console.log({
        "LAYOUT FETCH": data,
    });

    return (
        <html lang="en">
            <head />
            <body>
                <section>{children}</section>
                <section>
                    <h2>LAYOUT FETCH :</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </section>
            </body>
        </html>
    );
}
