import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Pessoa from './Pessoa';


const Pessoas = () => {
    
    const [dados, setDado] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const request = await axios.get('https://randomuser.me/api/')
                const resultado = request.data
                setDado(resultado)
                console.log("resultado", resultado)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])
    
    return (
        <>
         {dados.map((dado)=>{
            return(
                <Pessoa name={dado.name.first} email={dado.email}/>
            )
         })}
        </>
    )
};

export default Pessoas;

//https://randomuser.me/api/   