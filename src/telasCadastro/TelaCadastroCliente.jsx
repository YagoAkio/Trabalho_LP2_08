import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [clientes, setClientes] = useState([]); 


    const adicionarCliente = (novoCliente) => {
        setClientes([...clientes, novoCliente]);
    };
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? (<FormCadCliente exibirFormulario={setExibirFormulario} adicionarCliente={adicionarCliente} />) : (<TabelaClientes exibirFormulario={setExibirFormulario} clientes={clientes} />)
                }
            </Pagina>
        </Container>
    )
}