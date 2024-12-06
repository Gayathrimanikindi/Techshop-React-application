import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import img from './Images2/boat131-3.png'
import img1 from './Images2/sonyXb910n-1.png'
import img2 from './Images2/jbl660nc-1.png'
import './Swiper.css'
import { MdCurrencyRupee } from "react-icons/md";
const Slider=()=>{
    return(
        <>
       
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination,Autoplay]}
      autoplay={{delay:5000}}
      pagination={true}

    >
      
      <SwiperSlide>
      <div className="container">
        <div className="row text-light">
        <div className=" col col-lg-7 ">
          <div className="mt-5"></div>
          <div className="fw-light mt-5 ">JBL Live 660NC</div>
          <div className="fs-2 fw-bolder">Keep The Noise Out,</div>
          <div className="fs-2 fw-bolder">Or In. You Choose</div>
          <div className="d-flex gap-3 justify-content-center ">
          <div><MdCurrencyRupee /> <span className="fs-5">1,099</span> </div>
          <div><MdCurrencyRupee /> <span className="text-decoration-line-through text-secondary ">2,900 </span></div>
          </div>
          <button type="button" class="btn btn-danger ">Shop Now</button>
          </div>
          <div className="col-lg-5">
          <img src={img2} alt="image" className='boat' />
          </div>
          
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container">
        <div className="row text-light">
        <div className=" col col-lg-7 ">
          <div className="mt-5"></div>
          <div className="fw-light mt-5 ">BoAt Airdopes 131</div>
          <div className="fs-2 fw-bolder">Keep The Noise Out,</div>
          <div className="fs-2 fw-bolder">Or In. You Choose</div>
          <div className="d-flex gap-3 justify-content-center ">
          <div><MdCurrencyRupee /> <span className="fs-5">1,099</span> </div>
          <div><MdCurrencyRupee /> <span className="text-decoration-line-through text-secondary ">2,900 </span></div>
          </div>
          <button type="button" class="btn btn-danger ">Shop Now</button>
          </div>
          <div className="col-lg-5">
          <img src={img} alt="image" className='boat' />
          </div>
          
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
      <div className="container">
        <div className="row text-light">
        <div className=" col col-lg-7 ">
          <div className="mt-5"></div>
          <div className="fw-light mt-5 ">JBL Live 660NC</div>
          <div className="fs-2 fw-bolder">Keep The Noise Out,</div>
          <div className="fs-2 fw-bolder">Or In. You Choose</div>
          <div className="d-flex gap-3 justify-content-center ">
          <div><MdCurrencyRupee /> <span className="fs-5">1,099</span> </div>
          <div><MdCurrencyRupee /> <span className="text-decoration-line-through text-secondary ">2,900 </span></div>
          </div>
          <button type="button" class="btn btn-danger ">Shop Now</button>
          </div>
          <div className="col-lg-5">
          <img src={img1} alt="image" className='boat' />
          </div>
          
          </div>
        </div>
      </SwiperSlide>
      
    
    </Swiper>
    <div className="mb-5"></div>
</>
    )
    }

export default Slider