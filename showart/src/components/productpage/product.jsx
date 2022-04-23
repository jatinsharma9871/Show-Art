import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setproduct] = useState([]);
  const [apparelData, setapparelData] = useState([]);
  let storeCart=JSON.parse(localStorage.getItem("store_cart"))||[];
  // console.log(storeCart)
  useEffect(() => {
    axios.get(`https://show-art.herokuapp.com/${id}`)
      .then((res) => {
        setproduct(res.data);
       
      });
    axios
    .get("https://show-art.herokuapp.com")
    .then((res) => {
      setapparelData(res.data.gear);
    });
  }, []);

  const navigate = useNavigate();

//   const buyNow = () => {
//     const { nickName, profileImage } =
//       JSON.parse(localStorage.getItem("userData")) ||
//       localStorage.setItem(
//         "userData",
//         JSON.stringify({
//           profileImage: "https://a.rsg.sc/n/shreyas1000",
//           nickName: "none",
// console.log()
//         })
//       );

//     if (nickName == "none") {
//       navigate("/signin");
//     } else {
//       let disc = "payment for" + " " + product.name;
//       let amount = product.price;
//       amount = amount.toFixed(2);
//     //   doPayment(amount, disc);
//     }
//   };

  return (
    <>

          <div id="product-part">
            <div id="product-left-part">
              <div id="main-img-part">
                <img src={product.art_img} alt="" />
              </div>
              <div id="other-img-part">
                {/* {product.allimages.map((el) => (
                  <img src={el} alt="images" />
                ))} */}
              </div>
            </div>
            <div id="product-right-part">
              <div id="prod-head">
                <p>{product.art_name}</p>
              </div>
              <div id="prod-desc">
                <p>{product.art_desc}</p>
              </div>
              <div id="prod-price">
                <p>₹{product.price}</p>
              </div>
              <br/>  <hr></hr>  <br/><br/>
              <div id="user-gender">
                <h2 className="fkyou">Seller's Details :-</h2>
              </div>
              <br/> <br/>
          <div className="jatinbhai">
               <div id="user-gender-btn">
                <div id="mens-btn">Seller's Name</div>
                <div id="womens-btn">{product.artist_name}</div>
              </div>
              <br/>
              <div id="user-gender-btn">
                <div id="mens-btn">City:</div>
                <div id="womens-btn" className="city-upper-name">{product.city}</div>
              </div>
              </div>

              <br/>
              <div id="user-gender-btn">
              <div id="mens-btn">Contacts:</div>
                <div id="womens-btn">{`${product.phone}`}</div>
              </div>
              <br/>
              <div id="user-gender-btn">
                <div id="mens-btn">Email:</div>
                <div id="womens-btn">
                  {product.email}</div>
              </div>
              <br/>
              <div id="user-gender-btn">
                <div id="mens-btn">Category:</div>
                <div id="womens-btn">{`Indo ${product.category}`}</div>
              </div>
            
            
              {/* <div id="buy-add-btn">
                <div id="buy-btn" onClick={()=>{buyNow()}}>Buy Now</div>
                <div id="add-btn"><button onClick={() => {
                  let status = false;
                  storeCart.map((el)=>{
                    if(el._id==product._id){
                      status = true
                    }
                  })
                  if(status){
                    alert("Product is Already in cart")
                    return;
                  }else{
                    product.qty = 1;
                    storeCart.push(product);
                    localStorage.setItem("store_cart",JSON.stringify(storeCart));
                    alert("Product is Added in cart successfully")
                  }                  
                }} >Add to cart</button></div>
              </div> */}
            </div>
          </div>
       
   

            {/* Related Products */}
            {/* <div id="apparel-items-part">
            <div id="apparel-heading-part">
              <p class="apparel-heading-rohit">Realted Products</p>
            </div>
            <div id="all-card-container">
              {apparelData.map((curElem) => {
                return (
                 <Link to={`/gear/${curElem._id}`}>
                    <div key={curElem._id}>
                  <div id="apparel-items-content">
                    <div id="apparel-item-card">
                      <div id="apparel-item-img-part">
                        <img src={curElem.image} alt="" />
                      </div>
                      <div id="name-price-part">
                        <div id="apparel-item-title-part">
                          <p>{curElem.name}</p>
                        </div>
                        <div id="apparel-item-price-part">
                          <p>€{curElem.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 </Link>

                );
              })}
            </div>
          </div> */}
        </>
  );
};

export default ProductDetails;
