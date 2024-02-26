import ProductList from "../../components/ProductList"

// posts will be populated at build time by getStaticProps()
export default function Blog({ products}:any) {
    return (
   <ProductList products={products}/>
    )

}
   
 
export async function getStaticProps() {
  let products = []
  try{
    const res = await fetch('http://fakestoreapi.com/products/')
    products = await res.json()
  }
  catch(error){
    console.log("Data fetching faild")
  }
   
    
    return {
      props: {
        products,
      },
    }
}