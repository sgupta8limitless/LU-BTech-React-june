import { useContext } from "react"
import { DataContext } from "../App"

function Component2(props) {

 let data  = useContext(DataContext)


  return (
    <div style={{background:"blue"}}>
      Component2 {data.name}

      <button onClick={()=>{
        data.f("Garvit")
      }}>Click</button>
    </div>
  )
}

export default Component2