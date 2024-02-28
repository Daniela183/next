import Layout from "../components/Layout"

export function getStaticProps ()  {
    return {
        revalidate: 10,
        props: {
            number: Math.random()
        }
    }
}
export default function Estatico(props) {
    return (
        <Layout titulo='Conteúdo estático na aplicação'>
        <div>{props.number}</div>
        </Layout>
    )
}

