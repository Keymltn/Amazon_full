import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { MdArrowBackIos } from 'react-icons/md'
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
      <div className={c.products__main__text__content}>
        <p className={c.text__content__title}>Climate Pledge Friendly</p>
        <div className={c.checkbox__group}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Climate Pledge Friendly</p>
        </div>
        <p className={c.text__content__title}>Department</p>
        <div className={c.arrow__text}>
          <MdArrowBackIos />
          <p className={c.checkbox__text}> Any Department</p>
        </div>
        <p className={c.checkbox__text}>PlayStation 5</p>
        <p className={c.checkbox__text}>PlayStation 4</p>
        <p className={c.checkbox__text}>Xbox Series X & S</p>
        <p className={c.checkbox__text}>Xbox One</p>
        <p className={c.checkbox__text}>Nintendo Switch</p>
        <p className={c.checkbox__text}>PC</p>
        <p className={c.checkbox__text}>Mac</p>
        <p className={c.checkbox__text}>Legacy Systems</p>
        <p className={c.checkbox__text}>Microconsoles</p>
        <p className={c.checkbox__text}>Virtual Reality</p>
        <p className={c.text__content__title1}>Avg. Customer Review</p>
        <div className={c.star__content}>
          <div className={c.stars}>
            <AiFillStar className={c.star__icons} />
            <AiFillStar className={c.star__icons} />
            <AiFillStar className={c.star__icons} />
            <AiFillStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
          </div>
          <p className={c.star__text}>& Up</p>
        </div>
        <div className={c.star__content}>
          <div className={c.stars}>
            <AiFillStar className={c.star__icons} />
            <AiFillStar className={c.star__icons} />
            <AiFillStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
          </div>
          <p className={c.star__text}>& Up</p>
        </div>
        <div className={c.star__content}>
          <div className={c.stars}>
            <AiFillStar className={c.star__icons} />
            <AiFillStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
          </div>
          <p className={c.star__text}>& Up</p>
        </div>
        <div className={c.star__content}>
          <div className={c.stars}>
            <AiFillStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
            <AiOutlineStar className={c.star__icons} />
          </div>
          <p className={c.star__text}>& Up</p>
        </div>
        <p className={c.text__content__title1}>Featured Brands</p>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Hyperkin</p>
        </div>
        <div className={c.checkbox__group1}><input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>PowerA</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Maximum Games</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>PDP</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>HORI</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Merge Games</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Turtle Beach</p>
        </div>
        <p className={c.text__content__title1}>Price</p>
        <p className={c.checkbox__text}>Under $10</p>
        <p className={c.checkbox__text}>$10 to $15</p>
        <p className={c.checkbox__text}>$15 to $25</p>
        <p className={c.checkbox__text}>$25 to $35</p>
        <p className={c.checkbox__text}>$35 & Above</p>
        <div className={c.text__btn__group}>
          <button className={c.text__btn__group__btn}>$ Min</button>
          <button className={c.text__btn__group__btn}>$ Max</button>
          <button className={c.text__btn__group__btn2}>Go</button>
        </div>
        <p className={c.text__content__title1}>Release Date</p>
        <p className={c.checkbox__text}>Last 30 days</p>
        <p className={c.checkbox__text}>Last 90 days</p>
        <p className={c.checkbox__text}> Coming Soon</p>
        <p className={c.text__content__title1}>Packaging Option</p>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Frustration-Free Packaging</p>
        </div>
        <p className={c.text__content__title1}>Amazon Global Store</p>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Amazon Global Store</p>
        </div>
        <p className={c.text__content__title1}>Condition</p>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>New</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Used</p>
        </div><p className={c.text__content__title1}>Seller</p>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Amazon.com</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>888Lots</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>SF Planet</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Key Savings</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Cloud_Squall78</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Retailseeker</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>UGREEN GROUP LIMITED</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Focus Camera LLC</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>Adorama</p>
        </div>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} type={"checkbox"} />
          <p className={c.checkbox__text}>KFE Trading</p>
        </div>
        <p className={c.text__content__title1}>Availability</p>
        <div className={c.checkbox__group1}>
          <input className={c.checkbox} checked="checked" type={"checkbox"} />
          <p className={c.checkbox__text}>Include Out of Stock</p>
        </div>
      </div>
      <div className={c.product_left}>
        <h2>Results:</h2>
        {
          allProductsData.map(product =>
            <Link className={c.to_side_infos} to={`/seemore/products/${product._id}`} key={product._id}>
              <div className={c.right_infos}>
                <img className={c.img_ofApleePH} src={product?.image[0]?.url} alt="" />
              </div>
              <div className={c.left_infos}>
                <h1 className={c.title_1}>{product.name}</h1>
                <br />
                <p className={c.description_1}>{product.description}</p>
                <br />
                <div className="rates">
                  {
                    product.ratings % 1 === 0 ?
                      new Array(product.ratings).fill("#").map(() =>
                        <BsStarFill style={{ color: 'orange' }} key={uuidv4()} />
                      ) :
                      <>
                        {
                          new Array(Math.floor(product.ratings)).fill("#").map(() =>
                            <BsStarFill style={{ color: 'orange' }} key={uuidv4()} />
                          )
                        }
                        <BsStarHalf style={{ color: 'orange' }} />
                      </>
                  }
                </div>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Products