// import React,{useState} from "react";
// import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
// import { FaRegUser, FaSearch } from "react-icons/fa";
// import { HiShoppingCart } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import './Searcj.css'
// const Header=()=>{
//   const [isSearchVisible, setSearchVisible] = useState(false);
//   const[user,setuser]=useState(false)

//   const toggleSearch=()=>{
//     setSearchVisible(!isSearchVisible);
//   }
//   const handleuser=()=>{

//   }

//     return(
//         <>
        
//         {isSearchVisible && (
//         <div className="search-popup">
//           <input type="text" placeholder="Type to search..." className="search-bar " />
//             </div>
//         )}
        
//        <nav className="navbar navbar-expand-lg bg-black App">
//   <div className="container-fluid">
//     <a className="navbar-brand text-light fw-bold" href="#">Tech-Shop</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     </div>
      
//         <div>
//       <Link className="text-light d-flex me-4 fs-5 search-button" onClick={toggleSearch}><FaSearch /></Link>
//     </div>
//       <div>
//         <Link  className="text-light d-flex me-4 fs-5"><HiShoppingCart /></Link>
//       </div>
//       <div>
//         <Link  className="text-light d-flex me-2 fs-5" onClick={handleuser}><FaRegUser /></Link>
//       </div>
    
    
// </nav>
//         </>
//     )
// }

// export default Header


import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='bg-transparent'>
        <nav className="navbar navbar-expand-lg bg-body-subtle">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand"><h3 className='text-light'>Tech-Shop</h3></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
            <div>
              <CiSearch className='text-light mx-4 fs-3' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" title='Search' />
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body bg-transparent">
                      <form className='bg-transparent'>
                        <input type="text" className='form-control bg-transparent' placeholder='Search for products...' />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div>
            <Link to='/cart'> 
              <AiOutlineShoppingCart className='text-light mx-4 fs-3' title='Cart' /> 
            </Link>
          </div>
          <div>
            <Link> 
              <CiUser className='text-light mx-4 fs-3' /> 
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar