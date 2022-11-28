import styled from "styled-components"
import { COLORS } from "../constants/layoutConstants"
import { FONTS } from "../constants/layoutConstants"

export default function Modal (props) {
  
    return (
        <PageContainer>
            <ModalContainer>
        {props.children}
        </ModalContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
top:0;
right:0;
position:fixed;
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;
background-color: rgba(40, 47, 54, 0.4);
z-index:2;
`

const ModalContainer= styled.div`
    width:300px;
    min-height:250px;
    background-color:${COLORS.searchBar};
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;    
    padding:15px;
    z-index:2;
    p{
        margin-top:50px;
        width:300px;
        text-align:center;
        font-family: ${FONTS.text};
        font-weight: 700;
        font-size: 20px;
        color:${COLORS.text}
    }
    div{
        
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:${COLORS.input};
        width:110px;
        height:46px;
        border-radius: 5px;
        color: ${COLORS.text};
        font-family: ${FONTS.text};
        font-weight: 700;
        font-size: 18px;
        cursor:pointer;
        }
    div:nth-child(3){
            background-color:${COLORS.button}!important;
        }
   

`