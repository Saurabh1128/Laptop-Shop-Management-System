import React from 'react'

function Navbar() {
  return (
   <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Alpha Computers </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Details</a>
            </li>
                <form class=" d-flex justify-content-end ">
                <input class=" d-flex justify-content-end form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success " type="submit">Search</button>
                </form>
            </ul>











            </div>
      </div>
    </nav>
   </div>
  )
}

export default Navbar
