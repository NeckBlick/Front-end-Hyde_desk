import { BrowserRouter, Route, Routes} from "react-router-dom";


import Home from './pages/home'
import Login from './pages/Login'
import CadastroTec from './pages/CadastroTecnico'

const Rotas = () => {
    return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro-tecnico" element={<CadastroTec/>}/>
    </Routes>
    </BrowserRouter>
    );
};

export default Rotas;