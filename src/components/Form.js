import styled from "styled-components";
import { COLORS,FONTS} from "../constants/layoutConstants";

export default function FormItem(props) {
  return (
  <FormContainer>{props.children}</FormContainer>
  )
}

const FormContainer = styled.div`
div{
        display:flex;
        width: 336px;
        justify-content:space-between;
    }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    font-family: ${FONTS.text};
    padding-left: 15px;
    margin-bottom: 5px;
    width: 336px;
    height: 49px;
    background:${COLORS.input};
    border-radius: 5px;
    box-shadow: none;
    border: none;
    font-weight: 400;
    font-size: 20px;
    color: ${COLORS.text};
    &::placeholder {
      font-family: ${FONTS.text};
      font-size: 19.976px;
      line-height: 25px;
      color: #EDEDED;
    }
    &:disabled {
      background: #f2f2f2;
    }
    &:focus{
    box-shadow: 0 0 0 0;
    outline: 0;

  }
  }
 
  button {
    font-family: ${FONTS.text};
    font-weight: 700;
    width: 150px;
    height: 37px;
    background: ${COLORS.button};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: ${COLORS.text};
    box-shadow: none;
    border: none;
    margin-top:30px;
    &:last-child{
        background-color:${COLORS.input};
      }
    &:disabled {
   
      background: #eadaf2;
      opacity: 0.7;
      
    }
    img{
        width:100px;
    }
    
  }
`