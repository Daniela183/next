import Link from "next/link"; 
import Layout from "../components/Layout";
export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{"Legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo JSX">
        <div>
           {titulo}
           {subtitulo()}
        </div>
        </Layout>
    )
}