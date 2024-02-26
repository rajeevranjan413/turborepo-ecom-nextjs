import { link } from "fs"
import Link from "next/link"

export interface IProduct {
    id: string
    title: string
    price: number
    description: string
    category:string
    image: string
}



const Product = (props: any) => {
    return (

        <Link href={`/product/${props.product.id}`}>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={props.product.image} alt={props.product.title} className="w-full h-56 object-cover object-center" />
            <div className="px-6 py-4">
                <h2 className="text-gray-800 text-xl font-semibold mb-2">{props.product.title}</h2>
                <p className="text-gray-600 text-sm mb-2">${props.product.price}</p>
                <p className="text-gray-700 text-base">{props.product.description}</p>
            </div>
        </div>
        </Link>
    )
}

export default Product
