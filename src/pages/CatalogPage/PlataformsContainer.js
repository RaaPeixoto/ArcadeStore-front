import { useState } from "react";
import styled from "styled-components";
import { Pc, Playstation, Xbox } from "styled-icons/bootstrap"
import { Infinite} from "styled-icons/boxicons-regular"
import { COLORS } from "../../constants/layoutConstants"
export default function PlafatormsContainer({setPlataform,plataform}){
    
    return(
        <>
         <FilterTitle> Filtrar por Plataforma </FilterTitle>
    <div onClick={()=> setPlataform("")} ><AllIcon/> <Plataform plataform=" " selectedPlataform={plataform}>Todos</Plataform></div>
    <div onClick={()=> setPlataform("xbox")} ><XboxIcon/> <Plataform plataform="xbox" selectedPlataform={plataform}>Xbox</Plataform></div>
    <div onClick={()=> setPlataform("playstation")} ><PlayStationIcon/> <Plataform plataform="playstation" selectedPlataform={plataform}>Playstation</Plataform></div>
    <div onClick={()=> setPlataform("PC")} ><PCIcon/> <Plataform plataform="PC" selectedPlataform={plataform}>PC</Plataform></div>
        </>
    )
}

const XboxIcon = styled (Xbox)`
width: 30px;
color: ${COLORS.plataformIcon};
`
const PlayStationIcon = styled (Playstation)`
width: 30px;
color: ${COLORS.plataformIcon};
`
const PCIcon = styled (Pc)`
width: 30px;
color: ${COLORS.plataformIcon};
`
const AllIcon = styled (Infinite)`
width: 30px;
color: ${COLORS.plataformIcon};
`

const FilterTitle = styled.p `
   width:100%;
background: rgba(140, 113, 53, 0.27);
height: 37px;
font-weight: 700;
line-height: 18px;
text-align:center;
color:${COLORS.text};
padding-top:6px;
margin-top: 30px;
`
const Plataform= styled.p`
        color:${props=> props.selectedPlataform.includes(props.plataform)? COLORS.plataformIcon:COLORS.text};
        margin-left:15px;
    
`