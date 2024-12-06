import React from "react";
import servicesData from "./ServicesData";

const Services=()=>{
    // console.log(servicesData);
    
    // const [row1,row2,row3,row4]=servicesData
    // console.log(row1);
    // console.log(row2);
    


    
    return(
        <>
    
        <h3 className="text-light mt-5 mb-5">Our Advantages</h3>
        
<div className="container-fluid mb-5 ">
    <div className="row">
            
            {
                servicesData.map((ele)=>(
                    <div className="col-lg-3">
                    <div className="text-light d-flex">
                        <div className="text-danger  fs-3">{ele.icon}</div>
                        <div >

                        <div className="fw-bold ms-2">{ele.title}</div>
                        <div className="fw-light ms-5">{ele.info}</div>
                        <div className="mb-5"></div>
                        </div>
                        </div>
        </div>
                ))
            }
        {/* <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div> */}
    </div>
   
</div>
        </>
    )
}
export default Services