import { useContext } from "react";
import {AddShoppingCart} from "styled-icons/material-outlined"
import GameContainer from "../../components/GameContainer";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import { COLORS } from "../../constants/layoutConstants";
import { Delete } from "styled-icons/fluentui-system-filled";
import { PencilFill } from "styled-icons/bootstrap";
export default function GameItem({game}){
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <GameContainer >
           {user.type === "adm"? 
          
            
            <>
            <DeleteIcon/>
            <img src = {game.image} alt={game.title}/>
            <button><EditIcon/> R${parseFloat(game.price).toFixed(2).replace(".", ",")}</button>
           
            </> 
            :
            <> 
            
            <GameImage >
                <img src = {game.image} alt={game.title}/> 
                <Details> {game.title} <p> Mais informaçoes</p> </Details>
                </GameImage>
           
            <button><CartIcon/>R${parseFloat(game.price).toFixed(2).replace(".", ",")}</button>
            {user.type === null?<p>*É preciso estar logado para adicionar ao carrinho.</p>:<></>}
            
            </>
        
        }
            
        </GameContainer>
    )
}



const CartIcon = styled(AddShoppingCart)`
color:white;
width:20px;
margin-right:3px;
`

export const Details = styled.div`
flex-direction:column;
 opacity: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
align-items:center;
  top: 0;
  left: 0;

  background-image: linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .55) 90%);
  padding: 20px 10px;
  color: ${COLORS.text};
font-weight: 800;
font-size: 20px;
width:100%;
height:100%;
 p{

 
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;

  border:none;
  border-radius:10px;
  height:30px;
    width: 100px;
    font-weight: 600;
    color: #FFFFFF;
font-size: 15px;

cursor: pointer;
&:hover{
    transform: scale(1.2);
    color:${COLORS.button};
}
  }

`;


const GameImage = styled.div`
position:relative;
img{
    width: 180px;
height: 234px;
object-fit: cover;
border-radius: 7px;
}
&:hover{
    ${Details}{
        opacity:1;
    margin-bottom: -10px;
    text-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 1);}
    }

`
const DeleteIcon = styled(Delete)`
color:${COLORS.text};
width:40px;
position:absolute;
right:5px;
`

const EditIcon = styled(PencilFill)`
color:${COLORS.text};
width:20px;
margin-right:7px;
`