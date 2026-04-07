import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import './Product.css'; // Don't forget to create this CSS file
import { ContextData } from '../ContextAPI/Context';
import { useSelector } from 'react-redux';

function Product() {
    // const {products} = useContext(ContextData)
    const {products} = useSelector(state => state.data)
    
    const { productId } = useParams();
    const [product, setProduct] = useState(null); // Initialize with null for proper loading state
    const [similarProducts, setSimilarProducts] = useState([]);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [mainImage, setMainImage] = useState(''); // State to manage the main displayed image

    const fetchProductById = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            setProduct(response.data);
            setMainImage(response.data.thumbnail); // Set initial main image
        } catch (error) {
            console.error("Error fetching product:", error);
            setProduct(null); // Handle error state
        }
    };

    const fetchSimilarProducts = () => {
        console.log(product)
        const filteredProducts = products.filter(p => p.category == product.category && p.id !== product.id);
        setSimilarProducts(filteredProducts);
    }

    useEffect(() => {
        fetchProductById();
    }, [productId]); // Add productId to dependency array to re-fetch if ID changes

    useEffect(() => {
        if (product && product.price && product.discountPercentage) {
            const price = Number(product.price);
            const discount = Number(product.discountPercentage) / 100;
            setDiscountedPrice(Math.round(price - (price * discount)));
        }

        console.log(product)
        if(product){
            fetchSimilarProducts()
        }
    }, [product]);

    // useEffect(() => {
    //     fetchProductById();
    // }, [])

    if (!product) {
        return (
            <div className="loading-container">
                <p>Loading product details...</p>
            </div>
        );
    }

    return (
        <div className="product-page-container">
            <div className="product-detail-card">
                <div className="product-images-section">
                    <img src={mainImage} alt={product.title} className="main-product-image" />
                    <div className="thumbnail-gallery">
                        {product.images && product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`thumbnail-image ${image === mainImage ? 'active' : ''}`}
                                onClick={() => setMainImage(image)}
                                onMouseOver={() => setMainImage(image)}
                                onMouseLeave={() => setMainImage(product.thumbnail)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-info-section">
                    <h1 className="product-title">{product.title}</h1>

                    <p className="product-brand">Brand: {product.brand}</p>
                    <p className="product-sku">SKU: {product.sku}</p>

                    <div className="price-and-rating">
                        <div className="price-display">
                            {product.discountPercentage > 0 ? (
                                <>
                                    <span className="actual-price-strikeout">${product.price.toFixed(2)}</span>
                                    <span className="current-price-text">${discountedPrice.toFixed(2)}</span>
                                    <span className="discount-tag">{product.discountPercentage}% OFF</span>
                                </>
                            ) : (
                                <span className="current-price-text">${product.price.toFixed(2)}</span>
                            )}
                        </div>
                        <div className="rating-display">
                            Rating: {product.rating.toFixed(1)}/5
                        </div>
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="stock-info">
                        {product.stock > 0 ? (
                            <>
                                <span className={product.stock < 10 ? 'low-stock' : 'in-stock'}>
                                    {product.stock} in stock
                                </span>
                                {product.stock < 10 && <span className='few-items-message'>Few items left! Hurry up!</span>}
                            </>
                        ) : (
                            <span className='out-of-stock'>Out of Stock</span>
                        )}
                    </div>

                    <div className="product-actions">
                        <button className="add-to-cart-button" disabled={product.stock === 0}>
                            {product.stock > 0 ? 'Add to Cart' : 'Notify Me When In Stock'}
                        </button>
                    </div>

                    <div className="additional-info-details">
                        <p><strong>Category:</strong> {product.category}</p>
                        {product.tags && product.tags.length > 0 && (
                            <p>
                                <strong>Tags:</strong>
                                {product.tags.map((tag, index) => (
                                    <span key={index} className='product-tag'>{tag}</span>
                                ))}
                            </p>
                        )}
                        <p><strong>Shipping:</strong> {product.shippingInformation || 'N/A'}</p>
                        <p><strong>Return Policy:</strong> {product.returnPolicy || 'N/A'}</p>
                        <p><strong>Warranty:</strong> {product.warrantyInformation || 'No warranty information'}</p>
                    </div>
                </div>
            </div>

            {product.reviews && product.reviews.length > 0 && (
                <div className="product-reviews-section">
                    <h2 className="section-title">Customer Reviews ({product.reviews.length})</h2>
                    <div className="reviews-grid">
                        {product.reviews.map((review, index) => (
                            <div key={index} className='review-item-card'>
                                <div className="reviewer-header">
                                    <div className="reviewer-avatar">{review.reviewerName.charAt(0)}</div>
                                    <div className="reviewer-details">
                                        <div className="reviewer-name">{review.reviewerName}</div>
                                        <div className="review-rating">{review.rating} / 5 stars</div>
                                    </div>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                                <p className="review-date">Reviewed on {new Date(review.date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="similar-products-container">
                <div className="title">Similar Products</div>
                <div className="similar-products">
                    {similarProducts.length > 0 ? similarProducts.map(similar => (
                        <NavLink to={`/product/${similar.id}`} key={similar.id} className="similar-product-card">
                            <img src={similar.thumbnail} alt={similar.title} />
                            <h3>{similar.title}</h3>
                            <p className="price">${similar.price.toFixed(2)}</p>
                            <NavLink 
                            to={`/product/${similar.id}`}
                            className="add-to-cart-button" disabled={product.stock === 0}>
                            {product.stock > 0 ? 'Shop Now' : 'Notify Me When In Stock'}
                        </NavLink>
                        </NavLink>
                    )) : <p>No similar products found.</p>}
                </div>
            </div>
        </div>
    );
}

export default Product;
