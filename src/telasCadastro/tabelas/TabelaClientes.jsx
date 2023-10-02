import React from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
    const { clientes } = props;

    const renderClientes = () => {
        if (clientes.length === 0) {
            return (
                <tr>
                    <td colSpan="5">Nenhum cliente cadastrado</td>
                </tr>
            );
        }

        const rows = [];

        for (let i = 0; i < clientes.length; i++) {
            const cliente = clientes[i];
            rows.push(
                <tr key={i}>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.endereco}</td>
                    <td>{cliente.cidadeUf}</td>
                    <td>{cliente.cep}</td>
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
                    props.exibirFormulario(true);
                }}
            >
                Novo Cliente
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {renderClientes()}
                </tbody>
            </Table>
        </Container>
    );
}
