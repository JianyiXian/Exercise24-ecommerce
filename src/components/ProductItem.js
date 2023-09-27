const ProductItem = (props) => {
    return (
        <div>
            <img className="img-thumbnail" src={props.src} alt="" />
            <div className="p-2">
                <h5>{props.title}</h5>
                <p className="fw-bold fs-5">{props.price}</p>
                <div className="text-center">
                    <button type="button" className="btn text-white ml-3" style={{ backgroundColor: '#fec5bb' }}>Add To
                        Cart</button>
                </div>

            </div>


        </div>
    )
}

export default ProductItem;
