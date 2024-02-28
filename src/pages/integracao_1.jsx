import { useState } from 'react'
import Layout from '../components/Layout'
export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }

    //function obterCliente() {
        //fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //    .then(resp => resp.json())
        //    .then(dados => setCliente(dados))
    //}

    return (
        <Layout titulo="Integração com API back/front-end">
            <div>
                <input type='number' value={codigo}
                onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul style={{listStyle: 'none'}}> 
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.name}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )

}
