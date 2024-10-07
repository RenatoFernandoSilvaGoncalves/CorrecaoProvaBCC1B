import { Button, Container, Table } from "react-bootstrap";
import { useState } from "react";

export default function DetalhesCandidato(props) {
    const [questao, setQuestao] = useState("");
    const [questionamentos, setQuestionamentos] = useState(props.candidatoSelecionado.questionamentos)

    function inserirDuvida(){
        setQuestionamentos([...questionamentos, questao]);
        props.candidatoSelecionado.questionamentos=questionamentos;
    }
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <img src={props.candidatoSelecionado.avatar} />
            <p>Eu sou: {props.candidatoSelecionado.nome}</p>
            <p>"email": {props.candidatoSelecionado.email}</p>
            <p>Essas são minhas propostas</p>
            <ul>
                {props.candidatoSelecionado.propostas.map((proposta) => {
                    return <li>{proposta}</li>
                })}
            </ul>
            <br />
            <h2>Dúvidas?</h2>
            <label for="duvida">Insira sua dúvida aqui: </label>
            <input type="text" id="duvida" value={questao} onChange={(evento)=>{
                setQuestao(evento.currentTarget.value);
            }}></input>
            <Button onClick={()=>{
                inserirDuvida();
            }}>perguntar</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Dúvidas dos eleitores</th>
                    </tr>
                </thead>
                <tbody>
                    {questionamentos.map((questao) => {
                        return <tr><td>{questao}</td></tr>
                    })}
                </tbody>
            </Table>
            <Button onClick={
                ()=>{
                    props.setDetalharCandidato(false);
                }
            }>Voltar</Button>
        </Container>
    );
}