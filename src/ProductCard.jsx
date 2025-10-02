export default function ProductCard(props){
    return (
      <>
        <div className="card">
      <img src={props.image} className="card-img-top" alt={props.product}/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${props.price}</p>
        <a href ="#" className="btn btn-primary" onClick={()=>{
          props.onAddToCart();
        }}>Add To Cart</a>
      </div>
    </div>
    </>
    );
}
