import { useProvider } from "../store/Provider"
import { productsData } from "../data/products"
import { BasketCard } from "../components"

const Basket = () => {
    const [{basket}, dispatch] = useProvider()

    return (
        <section className="flex gap-8 flex-col p-4 ">
            <h1 className="title">Shopping Cart</h1>
            <div className="flex flex-col gap-4">
                {basket.map(id => {
                    let product = productsData.find(e => e.id === parseInt(id))
                    if(product){
                        let {title, image, price, rating,id} = product
                        return(
                            <BasketCard key={title} title={title} img={image} price={price} rating={rating} id={id}/>
                        )
                    }
                })}
            </div>
        </section>
    )
}
export default Basket