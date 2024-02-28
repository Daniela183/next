import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Fundamentos de Next.js & React"/>
            <Cabecalho stitulo="Aprendendo Next com props" />
        </Layout>
    )
}