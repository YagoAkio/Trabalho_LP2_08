import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadFornecedor(props) {
    
    const estadoInicialFornecedor= {
        nome:'',
        cnpj:'',
        contato:'',
        email:'',
        telefone:'',
        endereco:''
    }
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setFornecedor({...fornecedor,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()) {
            const novoFornencedor = {
                nome: fornecedor.nomeFornecedor,
                cnpj: fornecedor.cnpj,
                contato: fornecedor.contato,
                email: fornecedor.email,
                telefone: fornecedor.telefone,
                endereco: fornecedor.endereco,
            };
            props.adicionarFornecedor(novoFornencedor);
            
            setFornecedor(estadoInicialFornecedor);
            setFormValidado(false);
        }
        else{
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
                                label="Nome do Fornecedor:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nome do fornecedor" onChange={manipularMudancas} value={fornecedor.nomeFornecedor} id="nomeFornecedor" name="nomeFornecedor" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome do fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="cnpj:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="cnpj" onChange={manipularMudancas} value={fornecedor.cnpj} id="cnpj" name="cnpj" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contato:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nome do contato" onChange={manipularMudancas} value={fornecedor.contato} id="contato" name="contato" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="E-mail:"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="E-mail do fornecedor" onChange={manipularMudancas} value={fornecedor.email} id="email" name="email" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe um e-mail válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control type="tel" placeholder="Telefone do fornecedor" onChange={manipularMudancas} value={fornecedor.telefone} id="telefone" name="telefone" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Endereço do fornecedor" onChange={manipularMudancas} value={fornecedor.endereco} id="endereco" name="endereco" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFornecedor(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
