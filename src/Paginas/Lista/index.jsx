import '../../App.jsx';
import '../../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api.ts';
import { AuthContext } from '../../Auth/authContext.jsx';




export const Lista = () => {
    const [mensagens, setMensagem] = useState([]);
    const {signOut} = useContext(AuthContext);

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
                <Link className='btn-sair' onClick={signOut}>Sair</Link>
            </div>

            <div className='container'>
                {mensagens.map(item => (
                    <div className='container-mensagem'>
                        <div className='seta-mensagem' />
                        <div className='base-mensagem' key={item.id}>
                            {item.id} - {item.titulo}
                        </div>
                        <Link className='btn-editar' to={`/Editar/${item.id}`}>Editar</Link>
                        <Link className='btn-excluir' to={`/Deletar/${item.id}/${encodeURIComponent(item.titulo)}`}>Excluir</Link>
                    </div>
                ))}
            </div>
        </div>

    );
}