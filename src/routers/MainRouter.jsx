import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components"
import { Home, ProductView, Basket,SignIn, SignUp, Search } from "../pages"

const MainRouter = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product-view/:id" element={<ProductView />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/search" element={<Search/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRouter