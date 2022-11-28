import styled from "styled-components";
import { LogOut } from "styled-icons/boxicons-regular";
import { AdminPanelSettings} from "styled-icons/material-outlined";
import { AddSquare } from "styled-icons/fluentui-system-filled";
import { COLORS } from "../../constants/layoutConstants";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
export default function AdmIcons(/* {user} */){
    let navigate = useNavigate();
    const { user } = useContext(UserContext);
  console.log(user)
    function logOut() {
        localStorage.clear();
        window.location.reload(false);
        navigate("/")
      }

    return(
    <>
    <div><AdmIcon/><p>{user.userName}/administrador</p></div>
    <div onClick={()=>{navigate("/product/add")}}><AddIcon /><p>Adicionar produto</p></div>
    <div onClick={logOut}><LogoutIcon/><p>Sair</p></div>
    </>
    )
}
const AdmIcon = styled(AdminPanelSettings)`
width: 30px;
color: ${COLORS.text};
`
const AddIcon = styled(AddSquare)`
width: 30px;
color: ${COLORS.text};
`
const LogoutIcon = styled(LogOut)`
width: 30px;
color: ${COLORS.text};
`