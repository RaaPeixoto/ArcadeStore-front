import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import NavBar from "../../components/NavBar/NavBar";
import { COLORS, FONTS } from "../../constants/layoutConstants";
import { AuthContext } from "../../contexts/AuthContext";
import { Grid } from "styled-icons/bootstrap";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import GameContainer from "../../components/GameContainer";
export default function UserGamesPage() {
    const { config } = useContext(AuthContext);
    const [userGames, setuserGames] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/checkOut/`, {
            headers: { Authorization: `Bearer ${config}` },
        })
            .then(res => {
                let games = []
                res.data.map((item) => item.games.map((g) => games = [...games, g]))
                setuserGames(games)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    return (
        <PageContainer>
            <h1><GridIcon />Meus Jogos</h1>
            <div><GamesContainer>
                {userGames.map((g) =>
                    <GameContainer><section>
                        <img src={g.image} alt="imagem do jogo" /> 
                        <h2>{g.title}</h2>
                        </section>
                    </GameContainer>
                )}
            </GamesContainer></div>
            <NavBar />
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

font-family :${FONTS.text};
h1{
    color:${COLORS.text};
    font-weight: 800;
font-size: 26px;
}
div{
    display:flex;
    }
`
const GridIcon = styled(Grid)`
width: 35px;
color: ${COLORS.text};
margin-right:6px;
`
const GamesContainer = styled.div`
width: 60vw;
    display :flex;
    flex-wrap:wrap;
    justify-content:center;
`