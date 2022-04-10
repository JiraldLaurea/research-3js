import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen h-full">
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex h-full">
                <Navbar />
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div className="">
                        <p>Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
