export default function ProductCard(props){
    return (
      <>
        <div className="card">
      <img src={props.image} className="card-img-top" alt={props.product}/>
      <div className="card-body">
        <h5 className="card-title">{props.product}</h5>
        <p className="card-text">${props.price}</p>
        <button className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
    </>
    );
}
