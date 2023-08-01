import "./App.css";
import ProductListing from "./pages/ProductListing";
import { useGetAllProductsQuery } from "./redux/features/product/productApi";

function App() {
  const { data: productList, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  // console.log(productList);
  return (
    <>
      <ProductListing />
    </>
  );
}

export default App;
