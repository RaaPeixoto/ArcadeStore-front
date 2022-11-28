import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";
import { COLORS } from "../../constants/layoutConstants";
import { BASE_URL } from "../../constants/url";
import { Gamepad } from "styled-icons/material";
import logo from "../../assets/images/logo.png";
import { ArrowIosBackOutline } from "styled-icons/evaicons-outline";
import {AddShoppingCart} from "styled-icons/material-outlined"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
export default function GameDetailPage(){
    const { user } = useContext(UserContext);
    const{id}=useParams();
    const[game,setGame]=useState({plataforms:[]})
    let navigate = useNavigate();
    useEffect(()=>
    {
        axios.get(`${BASE_URL}/products/${id}`)
            .then((res) => {
                setGame(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    },[])
    return(
        <PageContainer game={game}>
            <Logo src={logo} />
            <GameDetails>
            <article>
            <h1>{game.title}</h1>
            <hr/>
            <p> Lançamento: {game.releaseDate}</p>
            <p> {game.description}</p>
            <p> <PlataformsIcon/> {game.plataforms.map((p)=> `${p[0].toUpperCase() + p.substring(1)} - `)}</p>
            {user.type === null?<span>*É preciso estar logado para adicionar ao carrinho.</span>:<></>}
            </article>
            <div><button><CartIcon/>R$ {parseFloat(game.price).toFixed(2).replace(".", ",")}</button> <section onClick={()=> navigate(-1)}><BackIcon/>Voltar</section> </div>
            </GameDetails>
        </PageContainer>
    )
}

const PageContainer = styled.div`
display:flex;
flex-direction:column;

width:100vw;
height:100vh;
background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${props => props.game.banner});
background-repeat:no-repeat;
background-size:cover;
color:${COLORS.text};
`

const GameDetails = styled.div`
padding:25px 44px;
margin-top:80px;
margin-left:100px;
display:flex;
flex-direction:column;
justify-content:space-between;
width: 609px;
height: 415px;
background: rgba(40, 47, 54, 0.93);
border-radius: 22px 20px 16px 17px;
h1{

font-weight: 700;
font-size: 50px;

}
hr{
    width:464px;
    margin:6px 0;
   
}
p{
    line-height: 20px;
    margin-bottom:18px;
    width:464px;
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
cursor:pointer;

 }
 div{
    display:flex;
    align-items:center;
    width:464px;
    justify-content:space-between;
 }
 section{
    cursor:pointer;
 }
 span{
    font-size: 12px;
 }
`
const Logo = styled.img`
width:150px;
margin:20px 0 0 49px;;
`
const PlataformsIcon = styled(Gamepad)`
color:${COLORS.text};
width:30px;
`
const BackIcon = styled(ArrowIosBackOutline )`
color:${COLORS.text};
width:30px;

`
const CartIcon = styled(AddShoppingCart)`
color:white;
width:20px;
margin-right:3px;
`