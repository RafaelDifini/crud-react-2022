import '../../App.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api.ts';

export const Deletar = () => {
    let navigate = useNavigate();

    const { id , titulo} = useParams();
    const decodedTitulo = decodeURIComponent(titulo);
    console.log("ID recebido:", id, "TÍTULO recebido:", titulo);
    
    const handleSubmit = async (arg) => {
        arg.preventDefault();

        await api.post(`/Delete?id=${id}`);
        alert("Mensagem excluida com sucesso");
        navigate('/Lista');
    };

    return (
        <div className='container'>
            <h1 className='titulo'>Excluir mensagem</h1>

            <form onSubmit={handleSubmit}>
                <input className='input-text' type='text' value={decodedTitulo} readOnly/>
                <button className='btn-deletar' type='submit'>Excluir mensagem</button>

                <Link className='btn-voltar' to='/Lista'>Voltar</Link>
            </form>

        </div>
    );
}