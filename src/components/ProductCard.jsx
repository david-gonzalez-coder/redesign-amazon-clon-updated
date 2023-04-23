import { Link } from "react-router-dom"

const ProductCard = ({to="", img="", title, price}) => {
    return (
        <Link to={to} className="inline-block bg-white p-4 rounded-lg transition-all hover:-translate-y-2 hover:-translate-x-1 hover:shadow-lg duration-200 gap-4">
            <div style={{aspectRatio: "9/11"}} className="w-full">
                <img src={img} alt={title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <span>{title}</span>
                <span>{price}</span>
            </div>
            
        </Link>
    )
}
export default ProductCard