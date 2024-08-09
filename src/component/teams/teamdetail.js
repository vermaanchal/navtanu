import React from 'react'

const Teamdetail = () => {
  return (
    <div className='container my-4'>
      <div>
        <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">Our Team</h1>
      </div>
      <div className='d-flex '>
        <div className='row'>
          <div className='col'>
            <div class=" fadeInLeft teamcard">
              <img class="card-img-top" src="/img/male.png" alt="Card image cap" />
              <div class="card-body">
                <p class="card-text text-center">Director Finance</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInRight teamcard">
              <img class="card-img-top" src="/img/Female.png" alt="Card image cap" />
              <div class="card-body">
                <p class="card-text text-center">Director Marketing</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInLeft teamcard">
              <img class="card-img-top third" src="/img/female5.png" alt="Card image cap" />
              <div class="card-body">
                <p class="card-text text-center">Director Technology</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInRight teamcard">
              <img class="fifth" src="/img/femalenew.png" alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Director Administration</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInRight teamcard teamcard6">
              <img class="card-img-top sixth " src="/img/female4.png" alt="Card image cap" />
              <div class="card-body">
                <p class="card-text" style={{marginLeft:"29px"}}>Director Operation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamdetail
