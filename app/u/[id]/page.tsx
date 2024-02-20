import { fetchTime } from "../../layout";

/** Add your relevant code here for the issue to reproduce */
export default async function Home({ params }: { params: { id: string } }) {
    const data = await fetchTime();

    return (
        <>
            <h2>PAGE /u/{params.id} FETCH :</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export async function generateStaticParams() {
    return [1, 2, 3].map((n) => ({ id: n.toString() }));
}

export const revalidate = 10;
