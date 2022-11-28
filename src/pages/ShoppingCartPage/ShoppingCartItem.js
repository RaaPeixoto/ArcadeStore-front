import styled from "styled-components"
import { COLORS } from "../../constants/layoutConstants"
import { Delete } from "styled-icons/fluentui-system-filled";

export default function ShoppingCartItem({game,confirmDelete}){
   
    return(
        <GameContainer>
            <DeleteIcon  onClick = {()=>confirmDelete(game)}/>
            <img src={game.product.image} alt="imagem do jogo"/>
            <p>{game.product.title}</p>
            <GamePrice>Valor: R$ {parseFloat(game.product.price).toFixed(2).replace(".", ",")}</GamePrice>

            
        </GameContainer>
    )
}

const GameContainer = styled.div `
min-width: 196px;
background-color:${COLORS.catalogbox};
border-radius:8px;
margin:14px 16px 0 0;
padding:11px 8px 8px 8px;
display:flex;
align-items:flex-start;
position:relative;
 img {
    width: 70px;
height: 91px;
object-fit: cover;
border-radius: 7px;
margin-right:15px;
 }

 p{
    color:${COLORS.text};
    font-weight: 500;
font-size: 20px;

text-align:center;
 }


`

const GamePrice= styled.div`
position:absolute;
bottom:5px;
right:5px;
color:${COLORS.text};
    font-weight: 400;
font-size: 16px;
`

const DeleteIcon = styled(Delete)`
position:absolute;
top:5px;
right:5px;
color:${COLORS.text};
width:20px;
position:absolute;
right:5px;
cursor: pointer;
`