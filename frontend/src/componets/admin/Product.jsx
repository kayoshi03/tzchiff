const Product = ({product}) => {
    return (
        <>
            <p>{product.id}</p>
            <h1>{product.title}</h1>
        </>
    )
}

export default Product