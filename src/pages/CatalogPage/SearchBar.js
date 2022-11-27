import styled from "styled-components"
import { COLORS } from "../../constants/layoutConstants"
import { Search } from "styled-icons/material-outlined"
export default function SearchBar({ filterGames, setFilterGames }) {
    return (
        <SearchBarContainer>
            <div>
                <input
                    value={filterGames}
                    onChange={(e) => setFilterGames(e.target.value)}
                    type="text"
                    placeholder="Pesquisar"
                />  <SearchIcon />  </div>

        </SearchBarContainer>
    )
}

const SearchBarContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content:center;
margin: 22px 0 0 0;

div{
    background-color :${COLORS.searchBar};
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width: 305px;
    height: 24px;
    border-radius: 5px;
    position:relative;
}
input{
    margin-left:4px;
    margin-right:8px;
    border:none;
    width:240px;
    height:24px;
    background-color :${COLORS.searchBar};
    color: ${COLORS.text};
    font-weight: 400;
font-size: 15px;
line-height: 18px;
  &:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  &::placeholder{
    color: ${COLORS.text};
    font-weight: 400;
font-size: 15px;
line-height: 18px;
  }
}

`

const SearchIcon = styled(Search)`
color: ${COLORS.text};

top:3px;
right:3px;
width:20px;
position:absolute;
`