import styled from "styled-components"
import { COLORS } from "../constants/layoutConstants"

export default function GameContainer(props){
    return(
        <>
<GameBox >
    {props.children}
    
</GameBox>

</>

)
}

const GameBox = styled.div `
width: 196px;
min-height: 300px;
background-color:${COLORS.catalogbox};
border-radius:8px;
margin:14px 16px 0 0;
padding:11px 8px 8px 8px;
position:relative;
 img {
    width: 180px;
height: 234px;
object-fit: cover;
border-radius: 7px;

 }
 button {
display:flex;
align-items:center;
justify-content:center;
    margin-top: 7px;
    width: 180px;
height: 37px;
background-color:${COLORS.button};
border-radius: 50px;
color:${COLORS.text};
font-weight: 500;
font-size: 20px;
line-height: 24px;

 }
 p{
    color:${COLORS.text};
    font-weight: 400;
font-size: 12px;
margin-top:8px;
text-align:center;
 }

`

