import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import { useState } from "react";

export default function TelaCadastroFornecedor(props) {
    const [exibirFornecedor, setExibirFornecedor] = useState(false);
    const [fornecedores, setFornecedores] = useState([]); 


    const adicionarFornecedor = (novoFornencedor) => {
        setFornecedores([...fornecedores, novoFornencedor]);
    };

    return (
        <Container>
            <Pagina>
                {
                    exibirFornecedor ? (<FormCadFornecedor  exibirFornecedor={setExibirFornecedor} adicionarFornecedor={adicionarFornecedor} />) : (<TabelaFornecedores exibirFornecedor={setExibirFornecedor} fornecedores={fornecedores}/>)
                }
            </Pagina>
        </Container>
    );
}