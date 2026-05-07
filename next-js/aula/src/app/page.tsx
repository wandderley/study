import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - Aula Next Js do Zero!",
    description: "Aprendendo Next Js do zero como Sujeito Programador!",
    openGraph: {
        title: "Aprendendo Next Js com Sujeoto no Youtube",
        description: "Aprendendo Next Js do zero como Sujeito Programador!",
        // images: ['url here']
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export const revalidate = 60;

export default function Home() {
    const randomNumber = Math.random() * 10;

    return (
        <div>
            <h1>Página Home</h1>
            <h2>Numero gerado: {randomNumber}</h2>
        </div>
    );
}
