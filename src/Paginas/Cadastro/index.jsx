import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../../services/api.ts';

export const Cadastro = () => {
    let navigate = useNavigate();
    const [titulo, setTitulo] = useState("");

    const handleSubmit = async (arg) => {
        arg.preventDefault();

        const data = {
            "titulo": titulo,
            "ativo": true,
            "dataCadastro": "2025-03-18T19:37:50.121Z",
            "dataAlteracao": "2025-03-18T19:37:50.121Z",
            "userId": "f9303fde-edac-4fd3-848a-5232e0b55aa4"
        };

        await api.post("/Add", data);
        alert("Mensagem criada com sucesso");
        setTitulo("");
        navigate('/Lista');
    };

    return (
        <div className='container'>
            <h1 className='titulo'>Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <input className='input-text' type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <button className='btn-criar' type='submit'>Enviar mensagem</button>

                <Link className='btn-voltar' to='/Lista'>Voltar</Link>
            </form>

        </div>
    );
}