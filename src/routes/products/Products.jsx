import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import c from './Products.module.css'

const Products = () => {
  
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/v2/allproducts")
      .then(response => setAllProductsData(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={c.asd}>
        <h2>Result</h2>
        {
          allProductsData.map(product =>
            <Link className={c.to_side_infos} to={`/seemore/products/${product._id}`} key={product._id}>
              <img className={c.img_ofApleePH} src={product?.image[0]?.url} alt="" />
              <div className={c.left_infos}>
                <h1>{product.name}</h1>
                <br />
                <p>{product.description}</p>
                <br />
                {
                  product.ratings % 1 === 0 ?
                    new Array(product.ratings).fill("#").map(() =>
                      <BsStarFill key={uuidv4()} />
                    ) :
                    <>
                      {
                        new Array(Math.floor(product.ratings)).fill("#").map(() =>
                          <BsStarFill key={uuidv4()} />
                        )
                      }
                      <BsStarHalf />
                    </>
                }
              </div>
            </Link>
          )
        }
    </div>
  )
}

export default Products