import { useState } from 'react'
import './CreateProduct.css'

function CreateProduct() {

    let [product,setProduct] = useState({})


    function handleInput()
    {
        setProduct({...product,[event.target.name]:event.target.value})
    }

    function handleSubmit()
    {
        event.preventDefault()
        
        fetch("http://localhost:3000/products",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }


  return (

    <section className='container'>

        <h1 className='container_title'>Add Product</h1>

        <form className='form' onSubmit={handleSubmit}>

            <input className='inp' type="text" required placeholder='Enter Name' name='name'
            onChange={handleInput} 
            />
            <input className='inp' type="text" required placeholder='Enter Price' name='price' 
            onChange={handleInput}
            />
            <input className='inp' type="text" required placeholder='Enter Quantity' name='quantity' 
            onChange={handleInput}
            />
            <input className='inp' type="text" required placeholder='Enter Image URL' name='imageURL' 
            onChange={handleInput}
            />
            <input className='inp' type="text" required placeholder='Enter Category' name='category' 
            onChange={handleInput}
            />

            <button className='btn' type='submit'>Add Product</button>

          



        </form>


    </section>


  )
}

export default CreateProduct