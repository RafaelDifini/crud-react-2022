import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api.ts';
import { AuthContext } from '../../Auth/authContext.jsx';

export const Login = () => {
    let navigate = useNavigate();

    const {signIn,signed}= useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (arg) => {
        arg.preventDefault();

        if (!email || !senha) {
            alert('Digite email e senha');
            return;
        }
        const data = {
            "email": email,
            "senha": senha
        };

        await signIn(data);

        alert("Usuario logado com sucesso");
        navigate('/Lista');
    };

    if(!signed){
        return (
            <div className='container'>
    
                <form onSubmit={handleSubmit}>
                    <div className='container-login'>
                        <h1 className='titulo'>Login</h1>
    
                        <input className='input-text' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className='input-text' type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />
    
                        <button className='btn-criar' type='submit'>Acessar</button>
                    </div>
    
                </form>
    
            </div>
        );
    }
    else{
        return navigate('/Lista');
    }
   
}