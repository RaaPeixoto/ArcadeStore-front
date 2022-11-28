import FormItem from "../../components/Form";
import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext"
import { UserContext } from "../../contexts/UserContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/images/loadingGif.gif";
import { BASE_URL } from "../../constants/url";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { COLORS } from "../../constants/layoutConstants";
export default function LoginPage() {
    let navigate = useNavigate();
    const {setConfig} = useContext(AuthContext);
      const {setUser} = useContext(UserContext);
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    function handleForm(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
   function login(e) {
      e.preventDefault();
      axios.post(`${BASE_URL}/signin`,form)
      .then(res=>{
        setConfig (res.data.token)
        setUser(res.data) 
              localStorage.setItem("token",res.data.token)
              localStorage.setItem("userName",res.data.userName)
              localStorage.setItem("type",res.data.type)
           navigate("/") 
  
      })
      .catch(err => {
        console.log(err)
          alert(err.response.data)
          setLoading(false)
      })
     setLoading(true)
    }
    return (
        <PageContainer>
            <Logo src={logo} />
            <FormItem > 
                <form onSubmit={login}>
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
                   <div> 
                    <button type="submit" disabled = {loading}> {loading? <img src={loadingGif} alt ="icone carregando"/>:"Entrar"}</button> 
                    <button disabled = {loading} onClick={()=>navigate(-1)}> Cancelar</button>
                    </div>
                </form>
            </FormItem>
            <StyledLink to ="/signup">Primeira vez? Cadastre-se! </StyledLink> 
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