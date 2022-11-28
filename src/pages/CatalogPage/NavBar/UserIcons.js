import styled from "styled-components";
import { COLORS } from "../../../constants/layoutConstants";
import { LogOut } from "styled-icons/boxicons-regular";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CircleUser } from "styled-icons/fa-regular";
import { Cart4 } from "styled-icons/bootstrap";
import { Grid } from "styled-icons/bootstrap";
export function UserIcons(){
    const { user } = useContext(UserContext);
    function logOut() {
        localStorage.clear();
        window.location.reload(false);
      }
    return(
    
    <>
    <div><UserIcon/><p>{user.userName}</p></div>
    <div><CartIcon/><p>Carrinho de compras</p></div>
    <div><LibaryGamesIcon/><p>Meus Jogos</p></div>
    <div onClick={logOut}><LogoutIcon/><p>Sair</p></div>
    </>
    )
}


const UserIcon = styled(CircleUser)`
width: 30px;
color: ${COLORS.text};
`
const CartIcon = styled(Cart4)`
width: 30px;
color: ${COLORS.text};
`
const LibaryGamesIcon = styled(Grid)`
width: 30px;
color: ${COLORS.text};
`
const LogoutIcon = styled(LogOut)`
width: 30px;
color: ${COLORS.text};
`