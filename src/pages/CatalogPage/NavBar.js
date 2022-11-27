import styled from "styled-components"
import { COLORS } from "../../constants/layoutConstants"
import logo from "../../assets/images/logo.png"
import {  LogOut } from "styled-icons/boxicons-regular"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react"
import {  Login } from "styled-icons/material-outlined"
import { Link } from "react-router-dom"
import AdmIcons from "./AdmIcons"
import PlataformsContainer from "./PlataformsContainer"
export default function NavBar({setPlataform,plataform}){
    
    const { user } = useContext(UserContext);
    
    return (
        <NavBarContainer>
    <Logo src={logo}/>
    {user.type!==null?
    user.type ==="adm" ?
    <AdmIcons/>
    :
    <>
    </>
    :
<StyledLink to = "/login"><div> <LoginIcon/> <p>Entre ou Cadastre-se</p></div></StyledLink>
}
   <PlataformsContainer setPlataform={setPlataform} plataform={plataform}/>
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
    color:${COLORS.text};
    padding:23px;
    align-items:center;
    cursor:pointer;
    p{
        margin-left:15px;
    }
}
`

const Logo = styled.img`
width:220px;
margin-top:20px;
`

const LogoutIcon = styled(LogOut)`
width: 30px;
color: ${COLORS.text};
`
const LoginIcon = styled (Login)`
width: 30px;
color: ${COLORS.text};

`


const StyledLink = styled(Link)`
    text-decoration: none;
margin-left: -70px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;