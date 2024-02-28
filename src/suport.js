import Layout from "../components/Layout"

export const getStaticProps = async () => {
    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()

    return {
        revalidate: 10,
        props: {
            valor: dados.valor
        }
    }
}

const Estatico = props => {

   // const [valor, setValor] = useState(0)
//
   // async function obterValor() {
   //     const resp = await fetch('/api/random')
   //     const dados = await resp.json()
   //     setValor(dados.valor)
   // }
//
   // useEffect(() => {
   //     obterValor();
   // }, [])


    return (
        <Layout titulo='Por que usar o NextJs na aplicação de forma estatica'>
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor = {props.valor}</h2>
        </div>
        </Layout>
    )
}

export default Estatico