import React from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
    const { produtos } = props;

    const renderProdutos = () => {
        if (produtos.length === 0) {
            return (
                <tr>
                    <td colSpan="10">Nenhum Produto cadastrado</td>
                </tr>
            );
        }

        const rows = [];

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];
            rows.push(
                <tr key={i}>
                    <td>{produto.codigoProduto}</td>
                    <td>{produto.nomeProduto}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.categoria}</td>
                    <td>{produto.descricao}</td>
                    
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
                    props.exibirProdutos(true);
                }}
            >
                Novo Produto
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProdutos()}
                </tbody>
            </Table>
        </Container>
    );
}
