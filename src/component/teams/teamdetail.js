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
                {/* <h5 class="card-title">Director Finance</h5> */}
                <p class="card-text text-center">Director Finance</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInRight teamcard">
              <img class="card-img-top" src="/img/Female.png" alt="Card image cap" />
              <div class="card-body">
                {/* <h5 class="card-title">Director Marketing</h5> */}
                <p class="card-text text-center">Director Marketing</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInLeft teamcard">
              <img class="card-img-top" src="/img/female5.png" alt="Card image cap" />
              <div class="card-body">
                {/* <h5 class="card-title">Director Technology</h5> */}
                <p class="card-text text-center">Director Technology</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInRight teamcard">
              <img class="" src="/img/femalenew.png" alt="Card image cap" width={197}/>
              <div class="card-body">
                {/* <h5 class="card-title">Director Administration</h5> */}
                <p class="card-text text-center">Director Administration</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className='col'>
            <div class=" fadeInRight teamcard">
              <img class="card-img-top" src="/img/female4.png" alt="Card image cap" />
              <div class="card-body">
                {/* <h5 class="card-title">Director Operation</h5> */}
                <p class="card-text text-center">Director Operation</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamdetail
