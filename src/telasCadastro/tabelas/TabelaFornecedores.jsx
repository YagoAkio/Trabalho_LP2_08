import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
    const { fornecedores } = props;

    const renderFornecedor = () => {
        if (fornecedores.length === 0) {
            return (
                <tr>
                    <td colSpan="10">Nenhum Fornecedor cadastrado</td>
                </tr>
            );
        }

        const rows = [];

        for (let i = 0; i < fornecedores.length; i++) {
            const fornecedor = fornecedores[i];
            rows.push(
                <tr key={i}>
                    <td>{fornecedor.nome}</td>
                    <td>{fornecedor.cnpj}</td>
                    <td>{fornecedor.contato}</td>
                    <td>{fornecedor.email}</td>
                    <td>{fornecedor.telefone}</td>
                    <td>{fornecedor.endereco}</td>
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
                    props.exibirFornecedor(true);
                }}
            >
                Novo Fornecedor
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome do Fornecedor</th>
                        <th>CNPJ</th>
                        <th>Contato</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderFornecedor()}
                </tbody>
            </Table>
        </Container>
    );
}
