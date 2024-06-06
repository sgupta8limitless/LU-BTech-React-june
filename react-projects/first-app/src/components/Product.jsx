import './Product.css'

function Product(props){
    return (
        <div className="product">
            <div className='pro-img'>
                <img className='image' src={props.imageUrl}/>
            </div>
            <div className='details'>
                <p>{props.name}</p>
                <p>&#8377; {props.price}</p>
            </div>
        </div>      
    )
}

export default Product

