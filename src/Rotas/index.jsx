import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lista } from "../Paginas/Lista";
import { Cadastro } from "../Paginas/Cadastro";
import { Editar } from "../Paginas/Editar";
import { Deletar } from "../Paginas/Deletar";
import { Login } from "../Paginas/Login";
import { PrivateRoute } from "./privateRoute";


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/Lista" element={<PrivateRoute />} >
                    <Route path="/Lista" element={<Lista />} />
                </Route>

                <Route path="/Cadastro" element={<PrivateRoute />} >
                    <Route path="/Cadastro" element={<Cadastro />} />
                </Route>

                <Route path="/Editar/:id" element={<PrivateRoute />} >
                    <Route path="/Editar/:id" element={<Editar />} />
                </Route>

                <Route path="/Deletar/:id/:titulo" element={<PrivateRoute />} >
                    <Route path="/Deletar/:id/:titulo" element={<Deletar />} />
                </Route>

            </Routes>
        </Router>
    );
}