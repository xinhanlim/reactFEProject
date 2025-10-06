# Ecommerce — Front-End Assignment
- Ecommerce - React application 
- Back-End: https://github.com/xinhanlim/reactBEProject

## Features:
- Full `CRUD` functionality for `shopping cart` & `users`
- `Automated calculation` of `currency` when items quantity changes in cart
- Responsive UI for mobile web view
- User authentication with JWT-based login 

## Tech Stack:
- Frontend: React, Wouter, Jotai, Axios, Formik, Yup, Boostrap

- Backend: Node.js, Express, `Mysql2/Promise` , JWT, bcrypt, CORS, Stripe

- Dev & Build: Vite, Nodemon


## Getting Started:
1) Clone & install
```bash
git clone https://github.com/xinhanlim/reactFEProject.git
cd reactFEProject
```
2) Environment variables
```bash
VITE_API_URL=<your_backend_codespace_url>.app.github.dev
```

3) Run Commands:
```bash
npm run dev
```


## Lesson Learned:

### Using `Props` with ProductCard
- Props let a parent component pass data and callbacks down to a child component. 
- Below is a simple ProductCard that receives image, name, price, and an onAddToCart handler via props.

- Child Component: `ProductCard`
```bash
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
```
- having `ProductCard()` with `(props)` as a variable to be passed on to the parents.
- so that can use in the parent component
```bash
 {
          products.map(p => (
            <div key={p.id} className="col-md-4 mb-4">
              <ProductCard
                image={p.image}
                name={p.name}
                price={p.price.toFixed(2)}
                onAddToCart={() => {
                  handleAddToCart(p)
                }}
              />
            </div>
          )
          )
        }
```
- Map through the product list and render one ProductCard per item.
- The parent passes props down to the child (image, name, price, onAddToCart).
- Each list item gets a stable key={p.id} to help React track elements.
