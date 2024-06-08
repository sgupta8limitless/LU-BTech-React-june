import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../../components/navigation/Navigation'
import styles from './Home.module.css'
import { changeName } from '../../slices/userSlice'
import { addProduct } from '../../slices/productSlice'

function Home() {

    let username = useSelector((state)=>state.user.value)

    let products = useSelector((state)=>state.product.value)

    let dispatch = useDispatch()


  return (
    <>
        <Navigation/>
        <div className={styles.container}>
            Home {username}
            <button onClick={()=>{
                dispatch(changeName("Manmeet"))
            }}>Change Redux Name</button>

            <button onClick={()=>{
                dispatch(addProduct({name:"Glass",price:2000}))
            }}>Add Element</button>


            {
                products.map((prod)=>{
                    return (
                        <h1>{prod.name} {prod.price}</h1>
                    )
                })
            }

        </div>
    </>
  )
}

export default Home