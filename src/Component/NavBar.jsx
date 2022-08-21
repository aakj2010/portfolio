import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            {/* <div class="avatar">
                <!-- Avatar image -->
                <img class="avatar__image" src="akj3.png" />
            </div> */}
            <a class="navbar-brand" href="#">  AK Jailani</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#skill">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#project">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar