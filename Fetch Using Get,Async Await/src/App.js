
import './App.css';
import {useEffect, useState} from "react"

function App() {

  let [products,setProducts] = useState([]);

  useEffect(()=>{
    getProductsFromServer();
  },[]);

  let getProductsFromServer = async ()=>{
    let reqOptions = {
      method:"GET"
    };

   let JSONData = await fetch("https://fakestoreapi.com/products",reqOptions);
   let JSOData = await JSONData.json();

   setProducts(JSOData);

   console.log(JSOData);

  };

  return (
    <div className="App">
      <button onClick={()=>{
      
      getProductsFromServer();
      
      }}>
        Get Products
        </button>
     <div className='productsContainer'>
     
     {products.map((ele,i)=>{
        return(
        <div key={i} className='productDiv'>
          
          <img className="productPic" 
          alt={ele.title}
          src={ele.image}
          title={ele.description}
          ></img>
          <p>
          {ele.id}.{ele.title}
          </p>
          <p>$.{ele.price}</p> 
      </div>
     );
})}
     </div>
   </div>
  );
}

export default App;
