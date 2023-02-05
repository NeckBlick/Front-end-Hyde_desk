import api from "../../api"
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function CadTec () {
    const [erro, setErro] = useState('');
    const imgRef = useRef();
    const [imagem, setImagem] = useState(null)
    const [user,setUser] = useState({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
        especialidade: "",
        senha: "",
        confirmsenha: "",
        anexo: imagem,
    })

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const formData = new FormData()
    formData.append("imagem", imagem)

    console.log(formData)

    const handleImagem = (e) => {
        setImagem(e.target.files[0])
    }

    console.log(user)
    
    const handleCad = async() => {
        if (!user) {
            setErro("Preencha todos os campos");
            return;
        }
        try {
            const {data} = await api.post('/tecnicos/cadastro', user)
            console.log(data)
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <div className="bg-white px-10 py-10 rounded">
            <h1 className="font-bold">Cadastro para técnicos</h1>
            <div>
                    <div className="mt-8">
                        <input
                            className="border-2 w-full rounded p-2"
                            placeholder= "Nome completo"
                            name="nome"
                            onChange={handleUser}
                            />
                    </div>
                    <div className="mt-2">
                        <input
                            className="border-2 w-full rounded p-2"
                            placeholder= "CPF"
                            name="cpf"
                            onChange={handleUser}
                            />
                    </div>
                    <div className="mt-2">
                        <input
                            className="border-2 w-full rounded p-2"
                            placeholder= "Email"
                            name="email"
                            onChange={handleUser}
                            />
                    </div>
                    <div className="mt-2">
                        <input
                            className="border-2 w-full rounded p-2"
                            placeholder= "Telefone"
                            name="telefone"
                            onChange={handleUser}
                            />
                    </div>
                    <div className="mt-2">
                        <input
                            className="border-2 w-full rounded p-2"
                            placeholder= "Especialidade"
                            name="especialidade"
                            onChange={handleUser}
                            />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="border-2 w-full rounded p-2 mt-2"
                            placeholder="Senha"
                            name="senha"
                            onChange={handleUser}
                            />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="border-2 w-full rounded p-2 mt-2"
                            placeholder="Confirme sua senha"
                            name="confirmsenha"
                            onChange={handleUser}
                            />
                    </div>
                    <div>
                        <input
                            type="file"
                            className="border-2 w-full rounded p-2 mt-2"
                            placeholder="Selecione uma foto"
                            name="anexo"
                            onChange={handleImagem}
                            />
                    </div>
                <div className="mt-8 flex flex-col">
                    <button className="hover:bg-cyan-600 mb-6 bg-cyan-500 p-2 rounded-3xl text-white font-bold text-lg"
                    onClick={handleCad}
                    >Cadastre-se</button>
                    <p>{erro}</p>
                </div>
                <div>
                    <Link className="no-underline flex items-center " to='/'>
                        <p className="text-black font-medium mb-1">Já possui uma conta?</p>
                        <p className="ml-2 text-cyan-500 font-medium mb-1">Login</p>
                    </Link>                  
                </div>
            </div>
        </div>
    );
}

export default CadTec