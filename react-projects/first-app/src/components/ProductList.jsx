import './ProductList.css'
import Product from './Product'
import { useState } from 'react'
import { useEffect } from 'react'

function ProductList() {

    let [products,setProducts] = useState([])

    useEffect(()=>{

        fetch("https://fakestoreapi.com/products",{
            method:"GET"
        })
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data)
            setProducts(data)
        })
        .catch((err)=>{console.log(err)})


    },[])


  return (

    <section className="product_list">

       {

           products.map((prod)=>{
                return (
                    <Product
                    name={prod.title}
                    imageUrl={prod.image}
                    price={prod.price}
                    />
                )
            })


       }
        


    </section>

  )
}

export default ProductList