import Carousel from "./Carousel";
import Signin from './Signin'

const Home = () => {
    return (
        <div className="container w-50 mt-5">
            <h3 className="text-center text-white p-3">Welcome to the baloon decoration world!</h3>
            <Signin />
            <Carousel />
        </div>
    )
}

export default Home;