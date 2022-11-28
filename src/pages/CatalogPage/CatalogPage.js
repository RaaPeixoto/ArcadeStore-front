import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { COLORS, FONTS } from "../../constants/layoutConstants"
import { BASE_URL } from "../../constants/url"
import GameItem from "./GameItem"
import NavBar from "./NavBar/NavBar"
import SearchBar from "./SearchBar"


export default function CatalogPage() {
    let navigate=useNavigate();
    const [gamesCatalog, setGamesCatalog] = useState(null) // se for fazer loading colocar null e depois fazer terninario
    const [filterGames,setFilterGames]=useState("")
    const [plataform,setPlataform]=useState("");
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then((res) => {
                setGamesCatalog(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [openDeleteModal])
  
    
    return (
        <PageContainer>
            {gamesCatalog? 
            <>
            <FeaturedGameTitle > Jogo em Destaque: {gamesCatalog[gamesCatalog.length-1].title}</FeaturedGameTitle>
            <FeaturedGame src={gamesCatalog[gamesCatalog.length-1].banner} onClick={()=>navigate(`/game/${gamesCatalog[gamesCatalog.length-1]._id}`)}/>
            <SearchBar filterGames={filterGames} setFilterGames={setFilterGames}/>
            <GamesContainer>
                {gamesCatalog.map((game) =>
                game.title.toLowerCase().includes(filterGames.toLowerCase())&& (game.plataforms.includes(plataform)||plataform ==="" )?
                <GameItem key={game._id} game={game} openDeleteModal = {openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
                :
                ""
                )
                

            }
            </GamesContainer>
            <NavBar setPlataform={setPlataform} plataform={plataform}/>
            </>
            :
            <>loading</>}
            
        </PageContainer>
    )
}

const PageContainer = styled.div`
display:flex;
flex-direction:column;
background-color: ${COLORS.background};
width: 100%;
min-height:100vh;
padding:77px 88px 30px 388px ;
align-items:center;
font-family :${ FONTS.text};

`
const GamesContainer = styled.div `
width: 60vw;
    display :flex;
    flex-wrap:wrap;
    justify-content:center;
`

const FeaturedGame = styled.img `
width: 60vw;
border-radius: 22px;
height:25vh;
object-fit: cover;
cursor:pointer;
`
const FeaturedGameTitle = styled.h1`
color:${COLORS.text};
width:60vw;
margin-bottom:10px;

`