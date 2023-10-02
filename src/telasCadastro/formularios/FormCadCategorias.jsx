import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadCategoria(props) {
    const estadoInicialCategoria = {
        codigoCategoria: "",
        nomeCategoria: "",
        descricao: "",
    }

    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setCategoria({...categoria,[componente.name]:componente.value});
    }

    function manipularSubmissao(e) {
            const form = e.currentTarget;
            if (form.checkValidity()) {
                const novaCategoria = {
                    codigoCategoria: `${categoria.codigoCategoria}` ,
                    nomeCategoria: categoria.nomeCategoria,
                    descricao: categoria.descricao ,
                };
                props.adicionarCategorias(novaCategoria);
                setCategoria(estadoInicialCategoria);
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
                label="Código da Categoria:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Código da categoria"
                  id="codigoCategoria"
                  name="codigoCategoria"
                  value={categoria.codigoCategoria}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o código da categoria!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Nome da Categoria:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Nome da categoria"
                  id="nomeCategoria"
                  name="nomeCategoria"
                  value={categoria.nomeCategoria}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome da categoria!
              </Form.Control.Feedback>
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
                  placeholder="Descrição da categoria"
                  id="descricao"
                  name="descricao"
                  value={categoria.descricao}
                  onChange={manipularMudancas}
                  required 
                />
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
                                props.exibirCategorias(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
      </Form>
    </Container>
  );
}
