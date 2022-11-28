import styled from "styled-components"
import { COLORS } from "../../constants/layoutConstants"
import logo from "../../assets/images/logo.png"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react"
import { Login } from "styled-icons/material-outlined"
import { useNavigate } from "react-router-dom"
import AdmIcons from "./AdmIcons"
import PlataformsContainer from "../../pages/CatalogPage/PlataformsContainer"
import { UserIcons } from "./UserIcons";
export default function NavBar({ setPlataform, plataform }) {
    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    return (
        <NavBarContainer>
           <LogoContainer onClick={()=>navigate("/")}> <Logo src={logo} /></LogoContainer>
            {user.type !== null ?
                user.type === "adm" ?
                    <AdmIcons user={user}/>
                    :
                   <UserIcons/>
                :
                <div onClick={()=>navigate("/login")}> <LoginIcon /> <p>Entre ou Cadastre-se</p></div>
            }
            {plataform !== undefined? <PlataformsContainer setPlataform={setPlataform} plataform={plataform} /> :<></>}
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
position:fixed;
top:0;
left:0;
background-color:${COLORS.navbar};
width:300px;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
div{
    width:100%;
    display:flex;
    font-size: 15px;
    font-weight:500;
    color:${COLORS.text};
    padding:23px;
    align-items:center;
    cursor:pointer;
    margin:0 !important;
    padding:12px 15px;
    p{
       
        margin-left:15px;
    }
}
`

const Logo = styled.img`
width:220px;
margin-top:20px;
`



const LoginIcon = styled(Login)`
width: 30px;
color: ${COLORS.text};

`
const LogoContainer = styled.div`
width:300px;
margin:0 !important;
display:flex;
padding:0  !important;
`