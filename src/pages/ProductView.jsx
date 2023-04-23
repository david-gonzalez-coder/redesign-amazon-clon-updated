import { Slider } from "../components"
import { productsData } from "../data/products"
import { useParams, redirect, useNavigate } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import { useProvider } from "../store/Provider";
import {ACTIONS} from "../store/reducer"
import { useState } from "react";
const ProductView = () => {
    const [added, setAdded] = useState(false)
    const navigate = useNavigate()
    let {id} = useParams()
    let {images, title, price, rating} = productsData.find(product => product.id === parseInt(id))
    const [{}, dispatch] = useProvider()

    const addProduct = () => {
        if(!added){
            dispatch({
                type: ACTIONS.ADD_TO_BASKET,
                item: {
                    id: id
                }
            })
            setAdded(true)
        }else{
            navigate("/basket")
        }
        
    }
    return (
        <section className="p-4 pb-0 gap-4 w-full sm:w-[85%] m-auto flex flex-col">
            <div className=" ">
                <Slider images={images}/>
            </div>
            <article className="flex justify-between flex-col gap-6 items-center w-full py-4 ">
                <h1 className="title">{title}</h1>
                <div className="flex justify-center gap-4 ">
                    <span className="font-semibold">${price}</span>
                    <div className="flex gap-2 items-center text-yellow-500">{Array(rating).fill("").map((e, idx)=><AiFillStar key={idx} />)}</div>
                    <span className="text-lime-600">Free shipping</span>
                </div>
            </article>
                <h2 className="sub-title">Description</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto nostrum culpa ipsam maiores, aperiam incidunt repudiandae fuga, laborum</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto nostrum culpa ipsam maiores, aperiam incidunt repudiandae fuga, laborum</p>
                <h2 className="sub-title">Product features:</h2>
                <ul className="my-list-style">
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing</li>
                    <li>elit.</li>
                    <li>ipsum,</li>
                    <li>ipsum, dolor sit amet</li>
                </ul>
                <h2 className="sub-title">Return and refunds</h2>
                <p>orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto</p>
                <p>orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iustoorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum saepe explicabo illum quia odio rem ex aliquam asperiores, iusto</p>
            <article>

            </article>
            
        
            <button onClick={addProduct} className="p-4 flex justify-center items-center sticky bottom-0 h-[8vh] bg-lime-700  rounded-t-xl text-white text-xl font-semibold">{!added ? "Add to cart" : "Product added - Go to basket"}</button>
            
        </section>
    )
}
export default ProductView