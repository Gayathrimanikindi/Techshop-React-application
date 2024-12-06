import React from "react";
import { footMenu } from "./FooterData";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import  './footer.css';

const Footer = () => {
    // console.log(footMenu);
    const [row1, row2, row3] = footMenu
    // console.log(row1);


    return (
        < >
            <div className="container-fluid mt-5">
                <div className="row text-light">
                    <div className="col-lg-3 text-start">

                        <h2>Tech-Shop</h2>
                        <div className="text-start">Subscribe to our Email alerts to receive early discount offers, and new products info</div>
                        <div className="col-auto  ">
                            
                            <input id="placeholder" className="bg-black form-control" type="email" placeholder="Enter Yoyr Email" />
                        </div>
                        <div className=" text-start">
                            <button type="button" className="btn btn-danger mt-2 ">Subscribe</button>

                        </div>
                    </div>

                    <div className="col-lg-3 text-light  " >
                        <div className="mb-2 fw-bold">{row1.title}</div>
                        {
                            row1.menu.map((item) => (
                                <div>

                                    <div className="mt-3 fw-light">{item.link}</div>

                                </div>

                            ))
                        }
                    </div>
                    <div className="col-lg-3">
                        <div className="mb-2 fw-bold">{row2.title}</div>
                        {
                            row2.menu.map((item) => (
                                <div>

                                    <div  className="mt-3 fw-light">{item.link}</div>

                                </div>

                            ))
                        }
                    </div>
                    <div className="col-lg-3">
                        <div className="mb-2 fw-bold">{row3.title}</div>
                        {
                            row3.menu.map((item) => (
                                <div>

                                    <div  className="mt-3 fw-light">{item.link}</div>

                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
            <hr className="text-light" />
            <div className="d-flex justify-content-lg-between">

                <div className="text-light">

                    <p>2024|All Rights Reserved.Built by|Gayathri Manikindi</p>
                </div>
                <div className="d-flex gap-5 ">
                    <div>
                        <Link className="text-light  text-end fs-5"><FaFacebookF /></Link>
                    </div>
                    <div>
                        <Link className="text-light  text-end fs-5 "><FaTwitter /> </Link>
                    </div>
                    <div>
                        <Link className="text-light  text-end fs-5"><FaInstagram /></Link>
                    </div>
                    <div>
                        <Link className="text-light  me-5 fs-5 "><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer