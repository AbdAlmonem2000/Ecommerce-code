import axios from "axios";
import { createContext } from "react";



export let CartContext = createContext()




export default function CartContextProvider(props){


    let headers ={

        token:localStorage.getItem(`userToken`)

    }


    
    
    function addToCart(productId){
        
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` ,{
            
            productId
            
        },{
            headers
        })
        .then((respons)=> respons)
        .catch((error)=> error)
    }
    
    
    function getCart(){

        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{

        headers

        })
        .then((respons)=> respons)
        .catch((error)=> error)

    }



    function removeItem(productId){

        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{

            headers

        })
        .then((respons)=>respons)
        .catch((error)=> error)
    }


    function updateItem(productId , count){

        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId }`,{

            count:count

        },{

            headers

        })
        .then((respons)=>respons)
        .catch((error)=> error)
    }




    return <CartContext.Provider value={{addToCart ,getCart ,removeItem , updateItem}}>


            {props.children}

    </CartContext.Provider>


}