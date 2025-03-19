import '../../App.jsx';
import '../../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../../services/api.ts';




export const Lista = () => {
    const [mensagens, setMensagem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.post('List');
                setMensagem(data);
            } catch (error) {
                console.error("Erro na API:", error);
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            <div className='navbar'>
                <Link className='btn-criar' to="/cadastro">Criar Mensagem</Link>
            </div>

            <div className='container'>
                {mensagens.map(item => (
                    <div className='container-mensagem'>
                        <div className='seta-mensagem'/>
                        <div className='base-mensagem' key={item.id}> 
                            {item.id} - {item.titulo}
                        </div>
                        <Link className='btn-editar'to={{pathname:"Editar/" + item.id}}>Editar</Link>
                        <Link className='btn-excluir' to={`/Deletar/${item.id}/${encodeURIComponent(item.titulo)}`}>Excluir</Link>
                    </div>
                ))}
            </div>
        </div>

    );
}