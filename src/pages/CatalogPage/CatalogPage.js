import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { COLORS, FONTS } from "../../constants/layoutConstants"
import { BASE_URL } from "../../constants/url"
import GameItem from "./GameItem"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "./SearchBar"
import Modal from "../../components/Modal"
import { AuthContext } from "../../contexts/AuthContext";
import { TailSpin } from 'react-loader-spinner'
export default function CatalogPage() {
    
    let navigate=useNavigate();
    const { config } = useContext(AuthContext);
    const [gamesCatalog, setGamesCatalog] = useState(null) // se for fazer loading colocar null e depois fazer terninario
    const [filterGames,setFilterGames]=useState("")
    const [plataform,setPlataform]=useState("");
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [gameToDelete,setGametoDelete]=useState([0,1,2,3,4,5,6,7]);
    useEffect(() => {
        axios.get(`${BASE_URL}/products`)
            .then((res) => {
                setGamesCatalog(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [openDeleteModal])
  
    
    function deleteProduct(id) {
        axios.delete(`${BASE_URL}/product/${id}`, {
            headers: { Authorization: `Bearer ${config}` },
        })
            .then(res => {
                setOpenDeleteModal(false)
            })
            .catch(err => {
                console.log(err)

            })
    }

     function confirmDelete(game) { 

        setOpenDeleteModal(true);
        setGametoDelete(game);
      }
    return (
        <PageContainer>
             <NavBar setPlataform={setPlataform} plataform={plataform}/>
            {gamesCatalog? 
            <>
            <FeaturedGameTitle > Jogo em Destaque: {gamesCatalog[gamesCatalog.length-1].title}</FeaturedGameTitle>
            <FeaturedGame src={gamesCatalog[gamesCatalog.length-1].banner} onClick={()=>navigate(`/game/${gamesCatalog[gamesCatalog.length-1]._id}`)}/>
            <SearchBar filterGames={filterGames} setFilterGames={setFilterGames}/>
            <GamesContainer>
                {gamesCatalog.map((game) =>
                game.title.toLowerCase().includes(filterGames.toLowerCase())&& (game.plataforms.includes(plataform)||plataform ==="" )?
                <GameItem confirmDelete={confirmDelete}key={game._id} game={game} />
                :
                ""
                )
                

            }
            </GamesContainer>
           
            </>
            :
            <TailSpin
            height="90"
            width="90"
            color={COLORS.button}
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />}
             {openDeleteModal ? (
                <Modal>
                    <p> Você deseja deletar: {gameToDelete.title} permanentemente?</p>
                    <div onClick={() => { deleteProduct(gameToDelete._id) }}>Confirmar</div>
                    <div onClick={() => setOpenDeleteModal(false)}>Cancelar</div>
                </Modal>
            ) : (
                <></>
            )}
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
justify-content:center;
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