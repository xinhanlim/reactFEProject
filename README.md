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

- How to use Props 
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

