import Component2 from "./Component2"


function Component1(props) {
  return (
    <div style={{background:"red",padding:"20px"}}>
        <div>Component1 </div>
        <Component2 />
    </div>
  )
}

export default Component1