import {AiFillStar} from "react-icons/ai"
import { Link } from "react-router-dom"
import {ACTIONS} from "../store/reducer"
import { useProvider } from "../store/Provider"
const BasketCard = ({img="", title="", price="", rating=5, id })=>{
    const [{}, dispatch] = useProvider()
    const deleteItem = () =>{
        dispatch({
            type: ACTIONS.DELETE_FROM_BASKET,
            item:{
                id: id
            }
        })
    }
    return (
        <div className="bg-[#ffff] rounded-xl gap-8 items-center justify-between flex p-4 sm:px-8">
            <div className="w-1/3 max-w-[200px] aspect-square object-contain">
                <img src={img} alt={title} className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-5 items-center">
                <span className="sub-title ">{title}</span>
                <span className="flex">{Array(rating).fill("").map((e, idx)=><AiFillStar key={idx} />)}</span>
                <div>
                    <button onClick={deleteItem}>Remove from basket</button>
                    <Link to={`/product-view/${id}`} className="ml-8">View product</Link>
                </div>
            </div>
            <span className="text-xl font-semibold">${price}</span>
        </div>
    )

}

export default BasketCard