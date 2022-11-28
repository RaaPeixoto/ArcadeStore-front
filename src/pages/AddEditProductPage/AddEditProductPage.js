import FormItem from "../../components/Form";
import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loadingGif from "../../assets/images/loadingGif.gif";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { COLORS } from "../../constants/layoutConstants";
import swal from 'sweetalert';
export default function AddEditProductPage() {
    const { action,id } = useParams();
    let navigate = useNavigate();
    const { config } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        title:"",
        description:"",
        banner:"",
        image:"",
        releaseDate:"",
        price:"",
        plataforms:[]
    });
useEffect(() =>{ 
    if (id){
        axios.get(`${BASE_URL}/products/${id}`, )
        .then(res => {
           setForm({
        title:res.data.title,
        description:res.data.description,
        banner:res.data.banner,
        image:res.data.image,
        releaseDate:res.data.releaseDate,
        price:res.data.price,
        plataforms:[]
           })
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
 }}

,[])
    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    function handlePlataforms(e) {
        const { name, value } = e.target;

        if(form.plataforms.includes(value)){
           
            const filterPlataform = form.plataforms.filter((p)=> p !== value)
           
            setForm({ ...form, [name]: filterPlataform});
            return;
        }
        setForm({ ...form, [name]: [...form.plataforms,value ]});
    }
    function addEditProduct(e) {
        e.preventDefault();
        if (action==="add"){
            axios.post(`${BASE_URL}/product`, form, {
                headers: { Authorization: `Bearer ${config}` },
              })
            .then(res => {
                swal("Sucesso!", "Jogo cadastrado com sucesso!", "success");
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
        setLoading(true)
        return;
        }
        axios.put(`${BASE_URL}/product/${id}`, form,{
            headers: { Authorization: `Bearer ${config}` },
          })
        .then(res => {
            swal("Sucesso!", "Jogo atualizado com sucesso!", "success");
            navigate("/")
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    setLoading(true)
   
        
    }
    return (
        <PageContainer>
             <Logo src={logo} />
            <FormItem >
                <form onSubmit={addEditProduct}>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleForm}
                        placeholder="Titulo"
                        required
                        disabled={loading}
                    />
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleForm}
                        placeholder="Descrição"
                        required
                        disabled={loading}
                    />
                    <input
                        type="url"
                        name="banner"
                        value={form.banner}
                        onChange={handleForm}
                        placeholder="URL do banner"
                        required
                        disabled={loading}
                    />
                    <input
                        type="url"
                        name="image"
                        value={form.image}
                        onChange={handleForm}
                        placeholder="URL da capa"
                        required
                        disabled={loading}
                    />
                    <input
                        type="text"
                        name="releaseDate"
                        value={form.releaseDate}
                        onChange={handleForm}
                        placeholder="Data de lançamento"
                        required
                        disabled={loading}
                    />
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleForm}
                        placeholder="Preço"
                        required
                        disabled={loading}
                    />
                    <PlataformContainer>
                        Plataforms
                        <div>
                            <Checkbox type="checkbox" onChange={handlePlataforms} name="plataforms" value="xbox"/>Xbox
                            <Checkbox type="checkbox" onChange={handlePlataforms} name="plataforms" value="PC"/>PC
                            <Checkbox type="checkbox" onChange={handlePlataforms} name="plataforms" value="playstation"/>Playstation
                        </div>
                    </PlataformContainer>


                    <div>
                        {action === "add"?
                        <button type="submit" disabled={loading}> {loading ? <img src={loadingGif} alt="icone carregando" /> : "Adicionar"}</button>
                        :
                        <button type="submit" disabled={loading}> {loading ? <img src={loadingGif} alt="icone carregando" /> : "Editar"}</button>
                    }
                        
                        <button disabled={loading} type="button" onClick={() => navigate(-1)}> Cancelar</button>
                    </div>
                </form>
            </FormItem>
        </PageContainer>
    )
}

const PageContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:${COLORS.background};
min-height:100vh;
`

const PlataformContainer = styled.div `
display:flex;
flex-direction:column;
color:${COLORS.text};
margin-top:8px;
div{
display:flex;
align-items:center;
}
`

const Checkbox = styled.input `
width:20px !important;
margin:0 !important;

`

const Logo = styled.img`
width:400px;
margin:30px 0 ;
margin-right:50px;
`