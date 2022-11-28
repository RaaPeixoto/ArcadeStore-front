import styled from "styled-components"
import NavBar from "../../components/NavBar/NavBar"
import { COLORS, FONTS } from "../../constants/layoutConstants"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import ShoppingCartItem from "./ShoppingCartItem";
import { Cart4 } from "styled-icons/bootstrap";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
export default function ShoppingCartPage() {
    let navigate = useNavigate();
    const [shoppingCart,setShoppingCart] = useState([]);
    const { config } = useContext(AuthContext);
     const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [gameToDelete,setGametoDelete]=useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
   
    useEffect(() => {
        axios.get(`${BASE_URL}/shopKart`,{
            headers: { Authorization: `Bearer ${config}` },
          } )
            .then((res) => {
                setShoppingCart(res.data);
                calculateTotalPrice(res.data);
               
            })
            .catch((err) => console.log(err.response.data))
    }, [openDeleteModal])

    function deleteProduct(id) {
        axios.delete(`${BASE_URL}/shopKart/${id}`, {
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

      function calculateTotalPrice(games) {
      
        let totalbalance = 0;
        games.map((g) =>
             totalbalance += parseFloat(g.product.price)
            
        );
        setTotalPrice(totalbalance);
      }

      function postCheckOut(){
        let checkOutObj=[]
        shoppingCart.map((game)=>checkOutObj=[...checkOutObj,{image:game.product.image,title:game.product.title}])
        axios.post(`${BASE_URL}/checkOut/`,{games:checkOutObj} ,{
            headers: { Authorization: `Bearer ${config}` },
        })
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err)

            })
      }
   
  
    return(
        <PageContainer>
            <NavBar/>
            <h1><CartIcon/>Carrinho de compras</h1>
            {shoppingCart.map((game)=> <ShoppingCartItem key= {game._id} game={game} confirmDelete={confirmDelete}/>)}
            <TotalPrice>Total: R$ {totalPrice.toFixed(2).replace(".", ",")}</TotalPrice>
            <ConfirmCheckout onClick={postCheckOut}><button>Confirmar Compra</button></ConfirmCheckout>
            {openDeleteModal ? (
                <Modal>
                    <p> Você deseja deletar: {gameToDelete.product.title} do seu carrinho ?</p>
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

font-family :${ FONTS.text};
h1{
    color:${COLORS.text};
    font-weight: 800;
font-size: 26px;
}
`

const CartIcon = styled(Cart4)`
width: 35px;
color: ${COLORS.text};
margin-right:6px;
`
const TotalPrice = styled.div`
min-width: 196px;
display:flex;
justify-content:flex-end;
padding:11px 8px 8px 8px;
margin:14px 16px 0 0;
color:${COLORS.text};
    font-weight: 600;
font-size: 20px;
`

const ConfirmCheckout = styled.div`
min-width: 196px;
display:flex;
justify-content:flex-end;
padding:11px 8px 8px 8px;
margin:14px 16px 0 0;

 button{
    font-family: ${FONTS.text};
    font-weight: 700;
    width: 200px;
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
   
 }
`