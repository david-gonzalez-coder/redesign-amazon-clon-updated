import { ProductCard, Slider } from "../components"
import { productsData } from "../data/products"
const heroImagesData = [
    'https://geekzilla.tech/home/wp-content/uploads/2021/08/amazonmexico-1280x720-1.jpg',
    'https://www.muycanal.com/wp-content/uploads/2018/03/Amazon_HarrisPoll.jpg',
    'https://estaticos-cdn.elperiodico.com/clip/14d0c97e-951a-4300-8e65-6ff1ace518a9_alta-libre-aspect-ratio_default_0.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg',
    'https://m.media-amazon.com/images/I/41p8FiLGtrL._AC_UL320_.jpg',
  ]
const Home = () => {
    return (
        <section className="w-full sm:w-[85%] m-auto flex flex-col gap-8">
            <Slider images={heroImagesData}/>
            <div className="grid-150 grid-200">
                {productsData.map(({title, price, image,id}, idx) => <ProductCard to={`product-view/${id}`} key={idx} title={title} price={price} img={image}/>)}
            </div>
        </section>
    )
}
export default Home