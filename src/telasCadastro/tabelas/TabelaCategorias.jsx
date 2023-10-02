import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';


export default function TabelaCategorias(props) {
  const { categorias } = props;

  const renderCategorias = () =>{
        if(categorias.lenght === 0){
            return(
                <tr>
                    <td colSpan="10">Não há nenhuma categoria cadastrada</td>
                </tr>
            );
        }
        const rows = [];

        for (let i = 0; i < categorias.length; i++) {
            const categoria = categorias[i];
            rows.push(
                <tr key={i}>
                    <td>{categoria.codigoCategoria}</td>
                    <td>{categoria.nomeCategoria}</td>
                    <td>{categoria.descricao}</td>
                </tr>
            );
        }
        return rows;
  };

  return (
    <Container>
      <Button
                type="button"
                onClick={() => {
                    props.exibirCategorias(true);
                }}
            >
                Nova Categoria
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCategorias()}
                </tbody>
            </Table>
    </Container>
  );
}
