import React, { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadProduto(props) {
    const estadoInicialProduto = {
        codigoProduto: "",
        nomeProduto: "",
        preco: "",
        quantidade: "",
        categoria: "",
        descricao: "",
    };

    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        console.log(componente.value)
        setProduto({ ...produto, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            const novoProduto = {
                codigoProduto: `${produto.codigoProduto} `,
                nomeProduto: produto.nomeProduto ,
                preco: produto.preco ,
                quantidade: produto.quantidade ,
                categoria: produto.categoria ,
                descricao: produto.descricao,
            };
            props.adicionarProduto(novoProduto);

            setProduto(estadoInicialProduto);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row>
            <Col>
                <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Código de Produto:"
                    className="mb-3"
                >
                    <Form.Control
                    type="text"
                    placeholder="Código do produto"
                    id="codigoProduto"
                    name="codigoProduto"
                    value={produto.codigoProduto}
                    onChange={manipularMudancas}
                    required
                    />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                    Informe o código do produto!
                </Form.Control.Feedback>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Nome do Produto:"
                    className="mb-3"
                >
                    <Form.Control
                    type="text"
                    placeholder="Nome do produto"
                    id="nomeProduto"
                    name="nomeProduto"
                    value={produto.nomeProduto}
                    onChange={manipularMudancas}
                    required
                    />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                    Informe o nome do produto!
                </Form.Control.Feedback>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
                <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Preço:"
                    className="mb-3"
                >
                    <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Preço do produto"
                    id="preco"
                    name="preco"
                    value={produto.preco}
                    onChange={manipularMudancas}
                    required
                    />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                    Informe o preço do produto!
                </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Quantidade:"
                    className="mb-3"
                >
                    <Form.Control
                    type="number"
                    placeholder="Quantidade do produto"
                    id="quantidade"
                    name="quantidade"
                    value={produto.quantidade}
                    onChange={manipularMudancas}
                    required
                    />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                    Informe a quantidade do produto!
                </Form.Control.Feedback>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Categoria:"
                    className="mb-3"
                >
                    <Form.Control
                    type="text"
                    placeholder="Categoria do produto"
                    id="categoria"
                    name="categoria"
                    value={produto.categoria}
                    onChange={manipularMudancas}
                    />
                </FloatingLabel>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Descrição:"
                    className="mb-3"
                >
                    <Form.Control
                    as="textarea"
                    placeholder="Descrição do produto"
                    id="descricao"
                    name="descricao"
                    value={produto.descricao}
                    onChange={manipularMudancas}
                    />
                </FloatingLabel>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6} offset={5} className="d-flex justify-content-end">
                <Button type="submit" variant={"primary"}>
                Cadastrar
                </Button>
            </Col>
            <Col md={6} offset={5}>
                <Button
                type="button"
                variant={"secondary"}
                onClick={() => {
                    props.exibirProdutos(false);
                }}
                >
                Voltar
                </Button>
            </Col>
            </Row>
        </Form>
        </Container>
    );
}
