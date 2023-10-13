import React from 'react'
import Nav from './Nav'
import "./teams.css"

const Teams = () => {
  return (
    <>
    <div class="container teams">
      <header>
        <h1>Our Team</h1>
        <div>
          <h2>WHO WE ARE</h2>
          <p>
          We are a network of diverse, driven, and innovative minds united by our passion for coding.
          </p>
        </div>
      </header>
      <section class="main">
        <div class="profile">
          <img src="../../src/assets/images/myteam/aryan.png" alt="" class="photo" />
          <p class="role">Coding Head</p>
          <p class="name">Aryan Patil</p>
        </div>
        <div class="profile">
        <img src="../../src/assets/images/myteam/pratham.png" alt="" class="photo" />
          <p class="role">President</p>
          <p class="name">Pratham Patil</p>
        </div>
        <div class="profile">
        <img src="../../src/assets/images/myteam/photo1.png" alt="" class="photo" />
          <p class="role">Vice President</p>
          <p class="name">Aman</p>
        </div>
        {/* <div class="profile">
        <img src="../../src/assets/images/myteam/bhag.jpg" alt="" class="photo" />
          <p class="role">Design Head</p>
          <p class="name">Bhagyashree Tekade</p>
        </div>
        <div class="profile">
        <img src="../../src/assets/images/myteam/photo1.png" alt="" class="photo" />
          <p class="role">Content Head</p>
          <p class="name">Shivani</p>
        </div> */}
        {/* <div class="profile">
          <img src="./assets/img/photo6.png" alt="" class="photo" />
          <p class="role">Developer</p>
          <p class="name">Stan John</p>
        </div> */}
      </section>
      <footer>
      </footer>
    </div>
    </>

  )
}
export default Teams