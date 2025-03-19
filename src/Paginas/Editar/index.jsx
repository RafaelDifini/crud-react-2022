import '../../App.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../../services/api.ts';

export const Editar = () => {
    let navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [mensagem, setMensagem] = useState("");
    const { id } = useParams();

    useEffect(() => {

        const param = {
            "id" : id,
            "titulo": titulo,
            "ativo": true,
            "dataCadastro": "2025-03-18T19:37:50.121Z",
            "dataAlteracao": "2025-03-18T19:37:50.121Z",
            "userId": "f9303fde-edac-4fd3-848a-5232e0b55aa4"
        };

        api.post("/GetEntityById", param).then(({ data }) => {
            setMensagem(data);
            setTitulo(data.titulo);
        })
    }, [id])

    const handleSubmit = async (arg) => {
        arg.preventDefault();

        const data = {
            "id": mensagem.id,
            "titulo": titulo,
            "ativo": mensagem.ativo,
            "dataCadastro": mensagem.dataCadastro,
            "dataAlteracao": mensagem.dataAlteracao,
            "userId": mensagem.userId
        };

        await api.post("/Update", data);
        alert("Mensagem alterada com sucesso");
        setTitulo("");
        navigate('/Lista');
    };

    return (
        <div className='container'>
            <h1 className='titulo'>Editar</h1>

            <form onSubmit={handleSubmit}>
                <input className='input-text' type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <button className='btn-criar' type='submit'>Salvar mensagem</button>

                <Link className='btn-voltar' to='/Lista'>Voltar</Link>
            </form>

        </div>
    );
}