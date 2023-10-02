import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirCategorias, setExibirCategorias] = useState(false);
    const [categorias, setCategorias] = useState([]); 


    const adicionarCategorias = (novaCategoria) => {
        setCategorias([...categorias, novaCategoria]);
    };

    return (
        <Container>
            <Pagina>
                {
                    exibirCategorias ? (<FormCadCategoria exibirCategorias={setExibirCategorias} adicionarCategorias={adicionarCategorias}/>) : (<TabelaCategorias exibirCategorias={setExibirCategorias} categorias={categorias}/>)
                }
            </Pagina>
        </Container>
    );
}
