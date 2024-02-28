import Link from "next/link";
import Navegador from "../components/Navegador";
export default function Inicio() {
    return (
        <div style={{display: 'flex', 
             justifyContent: 'center', 
             alignItems: 'center',
             flexWrap:'wrap',
             height:'100vh'}}>

            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="App" destino="/app" />
            <Navegador texto="Jsx" destino="/jsx"/>
            <Navegador texto="Navegação #01" destino="/navegacao"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123"/>
            <Navegador texto="Componente com Estado" destino="/estado"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1"/>
            <Navegador texto="Contéudo Estático" destino="/estatico"/>
            <Navegador texto="Contéudo Estático Complementar" destino="/estaticoComplemento"/>
         </div>
    )
}
//
