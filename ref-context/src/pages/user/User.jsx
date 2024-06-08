import { useState } from 'react'
import styles from './User.module.css'
import { useRef } from 'react'
function User() {

    let [name,setName]=useState("Amit")
    let [age,setAge] = useState(23)

    let college = useRef("ITM")

    let para = useRef()

    

   


    function changeName()
    {
        
        college.current = "Letsupgrade"
        console.log(college)
        setName("Garvit")
    }

    function changeAge()
    {
        console.log(college)
        setAge(67)
    }

    function changeSize()
    {
        para.current.style.fontSize="50px"
    }



    function displayName(name)
    {
        if(name.length>3 && name.length<5)
        {
            return (
                <h1>{name}</h1>
            )
        }
        else if(name.length<=3)
        {
            return (
                <h1>Name is short</h1>
            )
        }
        else 
        {
            return (
                <h1>Name is long</h1>
            )
        }
    }


  return (
    <div className={styles.userBox}>

        
        {displayName(name)}
    
        
        <h1>Ref : {college.current}</h1>
       
        <button onClick={changeName} >Change Name</button>
        <button onClick={changeAge}>Change Age</button>

        <p ref={para}>Hello</p>

        <button onClick={changeSize}>Change Size</button>


    </div>
  )
}

export default User