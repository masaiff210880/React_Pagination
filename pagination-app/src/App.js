import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Redux/productReducer/action";
import Pagination from "./Components/Pagination";
function App() {
  const [page,setPage] = useState(1)
  const dispatch = useDispatch();
  const { product, isLoading, isError } = useSelector((store) => {
    return {
      product: store.reducer.product,
      isLoading: store.reducer.isLoading,
      isError: store.reducer.isError,
    };
  });
  // console.log(totalPage)
  useEffect(() => {
    dispatch(getProducts(page));
  }, [page]);
  const handlePrev=()=>{
    setPage(page-1)
  }
  const handleNext=()=>{
    setPage(page+1)
  }
  // console.log(page)
  // console.log(product.length);
  return (
    <div className="App">
      <h1>Products</h1>
      {isLoading? <h1>Loading...</h1>:isError?<h1>Wrong</h1>:
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}>
        {product &&
          product.map((item) => (
            <div
              key={item.id}
              style={{
                width: "250px",
                height: "400px",
                border: "1px solid gray",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                  padding: "10px",
                }}
              >
                <img
                  src={item.image_url}
                  alt=""
                  width={"100%"}
                  height={"200px"}
                />
              </div>
              <h4>Title : {item.title}</h4>
              <h4>Price : {item.price}</h4>
              <p>Brand : {item.brand}</p>
              <p>Category : {item.category}</p>
            </div>
          ))}
      </div>
      }
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <Pagination
          currentPage={page}
          total={product.length}
          onChange={(value)=>setPage(value)}
        />
      </div>
    </div>
  );
}

export default App;


