import React from "react";
import '../../components/Cards/style.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './style.css';


export default function Register() {
    return (
        <div className="container-login">
            <Header />
            <h3 className="text-best">Cadastro</h3>

            <div className="content-form-register">
                <form className="form-register">
                    <div className="div-form-register">*Nome</div>
                    <input type="text" className="input-form-register" />
                    <div className="div-form-register">*Sobrenome</div>
                    <input type="text" className="input-form-register" />
                    <div className="checkbox-form-register">
                        <input type="checkbox" />
                        <div>Incluir dados de pessoa jurídica</div>
                    </div>
                    <div className="div-form-register">*Data de Nascimento</div>
                    <input type="date" className="input-form-register" />
                    <label className="div-form-register">*Gênero</label>
                    <select name="gender" id="gender" className="select-form-register">
                        <option label=""></option>
                        <option value="1" id="male">Masculino</option>
                        <option value="2" id="female">Feminino</option>
                    </select>
                    <div className="div-form-register">*CPF</div>
                    <input type="number" placeholder="___.___.___-__" required
                        className="input-form-register" />
                    <div className="div-form-register">*Telefone</div>
                    <input type="number" placeholder="( 00 ) 0000-0000" className="input-form-register" />
                    <div className="div-form-register">*Email</div>
                    <input type="email" className="input-form-register" />
                    <div className="div-form-register">*Confirmar E-mail</div>
                    <input type="email" className="input-form-register" />
                    <div className="div-form-register">*Senha</div>
                    <input type="password" className="input-form-register" />
                    <span className="span-form-register">(Deve conter no mínimo 8 caracteres, sendo: letras maiúsculas e minúsculas, números e caractere especial)</span>
                    <div className="div-form-register">*Confirmar Senha</div>
                    <input type="password" className="input-form-register" />

                    <div className="checkbox-form-condition">
                        <input type="checkbox" />
                        <label>Li e aceito os <a href="http://">Termos e Condições
                        </a> , as <a href="http://">Políticas de Privacidade</a>  e o <a href="http://">Regulamento do Programa de Fidelidade Trufina Chocolates</a> .</label>
                    </div>


                    <button className="button-form-register">Criar conta</button>


                </form>
            </div>

            <Footer />
        </div>
    )
}   