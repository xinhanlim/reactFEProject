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

### 1. Understanding `.map` 
<details><summary>Expand</summary>

- .map() always returns a new array (same length as original) but it `DON'T CHANGE` the original array.
```js
// setProducts(response.data) => update the state => React Re-render
useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/api/products");
        setProducts(response.data);
      }
      fetchProducts();
    } catch (e) {
      console.log("error", e);
    }
  }, []);

//On that re-render, JSX runs again and .map() is executed during render to produce the list of <ProductCard /> elements.
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

</details>

### 2. Using `Props` with ProductCard

<details><summary>Expand</summary>

- Props let a parent component pass data and callbacks down to a child component. 
- Below is a simple ProductCard that receives image, name, price, and an onAddToCart handler via props.

```bash
## Child Component: `ProductCard`
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
- 
```bash
## Parent Component: `ProductPage`
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
</details>

### 3.Condition Rendering for `Navbar`
<details><summary>Expand</summary>

- Conditional rendering lets you show/hide UI based on state or props.
- Taking for this case, `Login` shown in navbar when user has not login
- When user Login Successful, `Login` will be changed to `Logout` 

```js
// Get the jwt token using our helpers from useJwt()
  const { getJwt, clearJwt } = useJwt();
  const jwt = getJwt();
// if jwt is present/true render the first `(...)` if not render the next `(...)`
{jwt ? (  
        <>
        <li className="nav-item">
            <Link href="/profile" className={`nav-link ${location === '/Profile' ? 'active' : ''}`}>Profile</Link>
            </li>
            <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-link nav-link">Logout</button>
            </li>
         </>
        ) : (
        <>
            <li className="nav-item">
            <Link href="/RegisterPage" className={`nav-link ${location === '/RegisterPage' ? 'active' : ''}`}>Register</Link>
            </li>
            <li className="nav-item">
            <Link href="/login" className={`nav-link ${location === '/login' ? 'active' : ''}`}>Login</Link>
            </li>
        </>
        )
}
```
</details>

### 4. Using of State Management: `ProductPage` 
<details><summary>Expand</summary>

- State Management helps to change the variable and re-render it.
  
```js
// calling useState from 'react'
// having 2 variables, `products` being the initial state where the `setProduct` is the state that been changed 
 const [products, setProducts] = useState([]);

// Using useEffect because axios and data fetching is out of react control, can be called as side-effect
// When the request resolves, setProducts(...) updates state,
// and React re-renders with the new products.
 useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/api/products");
        setProducts(response.data);
      }
      fetchProducts();
    } catch (e) {
      console.log("error", e);
    }
  }, []);
```
</details>

