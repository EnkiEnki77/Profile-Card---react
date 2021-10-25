import React from 'react'
import '../main.css'

function Main() {
    return (
        <div className='main'>
            
            {/* <div className='photo-section'>
                <div className='profile-photo'>
                </div>
            </div>
            <div className = 'stats-section'></div> */}

            
<div class="container">
  <div class="grid-7 element-animation">
    <div class="card color-card">
      <ul>
        <li><i class="fas fa-arrow-left i-l w"></i></li>
        <li><i class="fas fa-ellipsis-v i-r w"></i></li>
        <li><i class="far fa-heart i-r w"></i></li>
        </ul>
         <img src= 'https://images.unsplash.com/photo-1633223883256-8ad8ce89fdbc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="profile-pic" class="profile"></img>
      <h1 class="title">Austin Layman</h1>
      <p class="job-title"> Aspiring web developer</p>
      <div class="desc top">
        <p>Currently learning React.js</p>
      </div>
    <a href = 'https://www.linkedin.com/feed/' target = '_blank' >  <button cursor ='pointer' class=" hov btn color-a top"> Hire me</button></a>

      <hr></hr>
      <div class="container-2">
        <div class="content">
          <div class="grid-2">
            <button class="color-b circule"> <i class="fab fa-dribbble fa-2x"></i></button>
            <h2 class="title">12.3k</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-c circule"><i class="fab fa-behance fa-2x"></i></button>
            <h2 class="title">16k</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-d circule"><i class="fab fa-github-alt fa-2x"></i></button>
            <h2 class="title">17.8k</h2>
            <p class="followers">Followers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

  
    )
}

export default Main


