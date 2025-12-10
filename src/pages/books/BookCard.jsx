import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'
import './Book.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { motion } from 'framer-motion';


const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!book) return null; // safeguard

  return (
 
    <motion.div
  className="book-card"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
      <div className="book-card-content">
      
        <div className="book-image-wrapper">
          <Link to={`/books/${book?._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="book-image"
            />
          </Link>
        </div>

        <div className="book-info">
          <Link to={`/books/${book?._id}`} style={{ textDecoration: "none" }}>
            <h3 className="book-title">{book?.title}</h3>
          </Link>
          <p className="book-description">
            {book?.description?.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="book-price">
            ${book?.newPrice} <span className="old-price">$ {book?.oldPrice}</span>
          </p>
          <button onClick={() => handleAddToCart(book)} className="btn-primary">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    
    </motion.div>
  );
};

export default BookCard;
