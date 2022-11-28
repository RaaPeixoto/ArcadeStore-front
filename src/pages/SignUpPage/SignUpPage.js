import FormItem from "../../components/Form";
import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/images/loadingGif.gif";
import { BASE_URL } from "../../constants/url";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { COLORS } from "../../constants/layoutConstants";
import swal from 'sweetalert';

export default function SignUpPage() {
    let navigate = useNavigate();
   
      
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
        name:"",
      email: "",
      password: "",
      passwordConfirm:""
    });
  
    function handleForm(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
   function signUp(e) {
      e.preventDefault();
      axios.post(`${BASE_URL}/signup`,form)
      .then(res=>{
        swal("Sucesso!", "Usuário cadastrado com sucesso!", "success");
           navigate("/login") 
  
      })
      .catch(err => {
          console.log(err)
          swal("Erro!", (err.response.data));
          
          setLoading(false)
      })
     setLoading(true)
    }
    return (
        <PageContainer>
            <Logo src={logo} />
            <FormItem > 
                <form onSubmit={signUp}>
                <input 
            type = "text"
             name ="name" 
             value ={form.name}
             onChange={handleForm}
             placeholder="Nome"
             required
             disabled = {loading}
            />
                <input 
            type = "email"
             name ="email" 
             value ={form.email}
             onChange={handleForm}
             placeholder="E-mail"
             required
             disabled = {loading}
            />
            <input 
            name ="password"
            value ={form.password}
            onChange={handleForm}
            type="password"
            required
            placeholder="Senha"
            disabled = {loading}
            />
            <input 
            name ="passwordConfirm"
            value ={form.passwordConfirm}
            onChange={handleForm}
            type="password"
            required
            placeholder="Confirme sua senha"
            disabled = {loading}
            />
                   <div> 
                    <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Cadastrar"}</button> 
                    <button disabled = {loading}  type="button"  onClick={()=>navigate(-1)}> Cancelar</button>
                    </div>
                </form>
            </FormItem>
            <StyledLink to ="/login">Já é cadastrado? Entre! </StyledLink> 
        </PageContainer>

    )
}

const PageContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:${COLORS.background};
height:100vh;
`
const Logo = styled.img`
width:618px;
margin:50px 0 ;
`
const StyledLink = styled(Link)`
margin-top:36px;
    text-decoration: underline;
  color:${COLORS.text};
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: underline;
    }
`;