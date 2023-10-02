import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadProdutos from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { useState } from "react";

export default function TelaCadastroProdutos(props) {
    const [exibirProdutos, setExibirProdutos] = useState(false);
    const [produtos, setProduto] = useState([]); 


    const adicionarProduto = (novoProduto) => {
        setProduto([...produtos, novoProduto]);
    };

    return (
        <Container>
            <Pagina>
                {
                    exibirProdutos ? (
                        <FormCadProdutos
                            exibirProdutos={setExibirProdutos}
                            adicionarProduto={adicionarProduto}
                        />
                    ) : (
                        <TabelaProdutos
                            exibirProdutos={setExibirProdutos}
                            produtos={produtos}
                        />
                    )
                }
            </Pagina>
        </Container>
    );
} 