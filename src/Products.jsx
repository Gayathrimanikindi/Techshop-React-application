import React from "react";
import productsData from "./ProductsData";
import { MdCurrencyRupee, MdStarRate } from "react-icons/md";
// import { Images } from "./ProductsData";

const Products = () => {
    console.log(productsData);
//   const[user,setuser]=useState(false)

    const handleheadphones = () => {
        // setuser(user)
    }

    return (

        <>
        {/* {user && (
        <div className="">
          
            </div>
        )} */}
            {/* <h3 className=" mb-5 mt-5"></h3> */}

            <h3 className="text-light mb-5 mt-5">Top Products</h3>
            <h3 className=" mb-5 mt-5"></h3>


            <div className="d-flex  justify-content-center gap-5 mb-5">
                <button type="button" class="btn btn-outline-danger text-light ">All</button>
                <button type="button" class="btn btn-outline-danger text-light" onClick={handleheadphones}>HeadPhones</button>
                <button type="button" class="btn btn-outline-danger text-light">EarBuds</button>
                <button type="button" class="btn btn-outline-none text-light">EarPhones</button>
                <button type="button" className=" btn btn-danger  text-light">NeckBands</button>
            </div>
           
            <div className="container-fluid ">
                <div className="row">
                    {
                        productsData.map((ele) => (
                            <div className="col-lg-3 mb-5 ">
                                <div className="card bg-black text-light border-secondary">



                                    {/* <div className="card" width-18rem"> */}
                                    <img src={ele.images[0]} className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{ele.title}</h5>
                                        <p className="card-text mb-2 border-bottom">{ele.info}</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        <div d-flex >
                                            <div className="d-flex gap-3 justify-content-center  mb-3">
                                                <div><MdCurrencyRupee /> <span className="fs-5">{ele.finalPrice}</span> </div>
                                                <div><MdCurrencyRupee /> <span className="text-decoration-line-through text-secondary fs-6 ">{ele.originalPrice} </span></div>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger btn-lg">Add To Cart</button>
                                    </div>
                                </div>

                            </div>
                            // </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Products
// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import productsData from '../Data/ProductsData'
// import { TiTick } from 'react-icons/ti';
// import ProductsDetailsOverView from './ProductsDetailsOverView';
// import RelatedProducts from './RelatedProducts';
// import { add } from '../Redux/addCartReducer';
// import { useDispatch } from 'react-redux';

// const ProductsDetails = () => {
//     const {id} = useParams();
//     const details = productsData[id-1];
//     const {images,title,info,rateCount,finalPrice,originalPrice,category} = details;
//     const [displayImage, setDisplayImage] = useState(images[0]);
//     const dispatch = useDispatch();
//     // console.log(id);
//     // console.log(productsData);
//     // console.log(details);
//     // console.log(category);
//     let star ='';
//     const rating = () => {
//         for(let i=1; i<=rateCount; i++){
//             star += "⭐"
//         }
//         return star
//     }

//     let discountPrice = originalPrice - finalPrice;
    
//     // add to cart
//     const AddCart = (list) => {
//         dispatch(add(list));
//     }

//   return (
//     <>
//         <div className="container-fluid pt-5 mt-5">
//             <div className="row">
//                 <div className="col-lg-1">
//                     {
//                         images.map(image => (
//                             <img 
//                                 src = {image} 
//                                 style={{width:'150px', cursor:'pointer'}} 
//                                 className='border m-3 p-2' 
//                                 alt='image.id' 
//                                 key={image} 
//                                 onClick={() => setDisplayImage(image)}
//                             />
//                         ))
//                     }
//                 </div>
//                 <div className="col-lg-1"></div>
//                 <div className="col-lg-6">
//                     <img src={displayImage} style={{width:'700px'}} className='image-fluid' alt='' />
//                 </div>
//                 <div className="col-lg-3 text-start text-light">
//                     <h3 className='mt-4'>{title}</h3>
//                     <h6>{info}</h6>
//                     <p className='border-bottom pb-4'>{rating()}</p>
//                     <p className='fs-4 fw-bold mt-4'>Rs.{finalPrice} <strike className='fs-5 text-secondary'> Rs.{originalPrice}</strike></p>
//                     <div className="d-flex justify-content-between">
//                     <div className='text-success'>You Save: Rs. {discountPrice}</div>
//                         <button className='btn btn-success'><TiTick className='text-light' /> <span>In Stock</span></button>
//                     </div>
//                     <div className='text-secondary mt-2 border-bottom pb-4'>(Inclusive of all taxes)</div>
//                     <h5 className='mt-4'>Offers and Discounts</h5>
//                     <div className="d-flex mt-4 border-bottom pb-4">
//                         <button className="btn btn-outline-secondary me-2 text-start">No cost EMI on Credit card</button>
//                         <button className="btn btn-outline-secondary text-start">Pay Later and Avail Casback</button>
//                     </div>
//                     <button className='btn text-light mt-5 px-5' id='btn' onClick={() => {AddCart(details)}}>Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//         <ProductsDetailsOverView details={details} />
//         <RelatedProducts category={category} productsData={productsData} id={id} />
//     </>
//   )
// }

// export default ProductsDetails