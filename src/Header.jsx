import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
       <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Tech-Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>

        <div>
      <Link className="text-light d-flex me-4"><FaSearch /></Link>
    </div>
      <div>
        <Link  className="text-light me-4"><HiShoppingCart /></Link>
      </div>
      <div>
        <Link  className="text-light me-2"><FaRegUser /></Link>
      </div>
    
    
</nav>
        </>
    )
}
export default Header