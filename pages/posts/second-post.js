import Link from 'next/link';
import Head from 'next/head';

export default function SecondPost() {
    return (
        <>
            <Head>
                <title>Second Post</title>
            </Head>
            <h1>Second Post</h1>
            <h2>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}