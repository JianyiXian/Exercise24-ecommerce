import data from './data.json'
import ProductItem from "./ProductItem";
import Signin from "./Signin";

const ProductList = () => {
    return (
        <div className="productContainer pt-5">
            <Signin />
            {data.map(product => (<ProductItem key={product._id} src={product.picture} title={product.title} price={product.price} />)
            )}
        </div >
    )
}

export default ProductList;