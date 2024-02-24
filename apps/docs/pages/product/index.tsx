import ProductList from "../../components/ProductList"

// posts will be populated at build time by getStaticProps()
export default function Blog({ posts}:any) {
    return (
   <ProductList products={posts}/>
    )

}
   
 
export async function getStaticProps() {
   
    const res = await fetch('https://fakestoreapi.com/products')
    const posts = await res.json()
   
    
    return {
      props: {
        posts,
      },
    }
}