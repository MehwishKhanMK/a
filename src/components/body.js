import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import 'bootstrap/dist/css/bootstrap.min.css';

function Body(){

    useEffect(() => {
        let image = document.getElementById('image');
        let images = ['image19.jpg', 'pic (1).jpg', 'image14.jpg', 'image24.jpg', 'image23.jpg', 'image11.webp'];
    
        const intervalId = setInterval(() => {
          let random = Math.floor(Math.random() * 6);
          image.src = images[random];
        }, 1200);
    
        const animationOptions = {
          container: document.getElementById('lottie-container'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'Shoe sale.json', // Replace with your animation file path
        };
    
        // Load the animation
        const anim = lottie.loadAnimation(animationOptions);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); 
    return(
        <div>
       
  <header className="text-white shadow-lg"
  style={{background: "linear-gradient(270deg, rgb(33, 164, 181) 0%, rgb(16, 187, 147) 0%, rgb(69, 203, 230) 100%)", height: "90px"}}>
  <div className="container mx-auto px-4 flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a href="index.html" className="flex title-font font-extrabold items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" width="80" height="40">
          <circle cx="40" cy="25" r="25" fill="violet" />

          {/* <!-- Petals --> */}
          <circle cx="68" cy="30" r="10" fill="black" />
          <circle cx="12" cy="30" r="10" fill="black" />




          {/* <!-- Flower center --> */}
          <circle cx="40" cy="25" r="5" fill="black" />
        </svg>

        <span style={{fontSize: "34px",color: "rgb(255, 255, 255)", verticalAlign:" baseline"}} className="ml-3 mt-2 text-2x1">A&M </span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        style={{color: "rgb(255, 255, 255)"}}>
        <a href="index.html" className="mr-10 hover:text-yellow-200">HOME</a>
        <a href="#sales" className="mr-10 hover:text-yellow-200">SALES</a>
        <div className="dropdown">
          <a href="#SHOES" className="mr-10 hover:text-yellow-200" style={{"display": "flex", "flexDirection": "row"}}>CATEGORY</a>
          <div  className="dropdown-content"
            style={{ marginTop:" 5px",background: "linear-gradient(270deg, rgb(33, 164, 181) 0%, rgb(16, 187, 147) 0%, rgb(69, 203, 230) 100%)", borderRadius:" 8px",padding: "20%"}}>
            {/* <!-- Dropdown items --> */}
            <div className="dropdownn" style={{color: "white"}}>
              <a href="index.html#SHOES" className="dropdown-link" style={{marginBottom: "10%"}}>SHOES</a>
              <a href="index.html#JACKETS" className="dropdown-link" style={{marginBottom: "10%"}}>JACKETS</a>
              <a href="index.html#WRIST WATCH" className="dropdown-link">WATCHES</a>
            </div>
          </div>
        </div>
        <a href="#about us" className="mr-10 hover:text-yellow-200">ABOUT US</a>
      </nav>
      <a href="feedback.html">
        <button
          className="inline-flex items-center bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-full text-lg font-medium ">
          Feedback
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </a>
    </div>
  </header>

  <img className="ima" src="" id="image" style={{height: "600px", width: "100%"}}/>



  {/* <!-- <div id="lottie-container" style="width: 100%; height: 300px;">
  <image id="lalala" src="sale.png">
  </div> --> */}

  <div className="centered-div" style={{borderRadius: "8px"}}>
    <p className="ad"> Explore our last chance selection! <br/>
      Don't miss out on the top trends. Sizes running out soon.</p>

    <div className="button-container">
      <a href="#JACKETS">
        <button className="button object-cover object-center block zoom-on-hover">Jackets</button>
      </a>
      <a href="#WRIST WATCH">
        <button className="button object-cover object-center block zoom-on-hover">Watches</button>
      </a>
      <a href="#SHOES">
        <button className="button object-center block zoom-on-hover">Shoes</button>
      </a>
      <a href="#PANTS">
        <button className="button object-cover object-center block zoom-on-hover">Pants</button>
      </a>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

  <section id="SHOES" className="text-gray-600 body-font">
    <h2 style={{textAlign: "center", fontSize: "40px"}}>SHOES</h2>
    <div id="shoeCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
          
            {/* <!-- Shoe Item 1 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow:" 0 0 3px rgba(145, 143, 143, 0.5)"}}>
                  <a href="airmax.html" className="block relative h-48 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.88e052c0ffea9dea0c1195b9270e1568?rik=F72hkHASg7jVCg&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>
  
            {/* <!-- Shoe Item 2 --> */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a className="block relative h-48 rounded ">
                <img
                  src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
                  className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                <p className="mt-1">Rs 1200</p>
              </div>
            </div>
  
            {/* <!-- Shoe Item 3 --> */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a className="block relative h-48 rounded ">
                <img src="https://www.pngarts.com/files/2/Shoes-PNG-Transparent-Image.png"
                  className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                <p className="mt-1">Rs 2000</p>
              </div>
            </div>
  
            {/* <!-- Shoe Item 4 --> */}
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full" style={{boxShadow:" 0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a className="block relative h-48 rounded ">
                <img src="https://www.downloadclipart.net/large/shoe-transparent-png.png"
                  className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                <p className="mt-1">Rs 8000</p>
              </div>
            </div>
            </div>
          </div>
        </div>
  
        {/* <!-- Add your next set of 4 items here --> */}
        <div className="carousel-item">
          {/* <!-- Add your next set of 4 items here --> */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            {/* <!-- Shoe Item 5 --> */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a href="airmax.html" className="block relative h-48 rounded ">
                <img
                  src="https://th.bing.com/th/id/R.d04fbe38798ebd08ef8af9c86f5980e2?rik=VziXCGJbOTykZQ&pid=ImgRaw&r=0"
                  className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                <p className="mt-1">Rs 15000</p>
              </div>
            </div>
{/* 
        <!-- Shoe Item 6 --> */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
          <a className="block relative h-48 rounded ">
            <img
              src="https://th.bing.com/th/id/R.5e337f2c421b8d2f2be68cd7ea3a4b3b?rik=xjsKSN59xqPm5w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fSneakers-PNG-Image.png&ehk=rBxc%2fcN4cW8haPMXw17gwd1g8zz18Xu5GHvxJdHSBbg%3d&risl=&pid=ImgRaw&r=0"
              className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
            <p className="mt-1">Rs 1200</p>
          </div>
        </div>

        {/* <!-- Shoe Item 7 --> */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
          <a className="block relative h-48 rounded ">
            <img src="https://www.pngarts.com/files/4/Sneaker-PNG-Picture.png"
              className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
            <p className="mt-1">Rs 2000</p>
          </div>
        </div>

        {/* <!-- Shoe Item 8 --> */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
          <a className="block relative h-48 rounded ">
            <img src="https://www.pngall.com/wp-content/uploads/5/Sylish-Men-Shoes-PNG.png"
              className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
            <p className="mt-1">Rs 8000</p>
          </div>
        </div>
          </div>
        </div>
  
        
      </div>
      <button  className="carousel-control-prev " type="button" data-bs-target="#shoeCarousel" data-bs-slide="prev">
        <span style={{backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%"}}  className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#shoeCarousel" data-bs-slide="next">
        <span  style={{backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%"}} className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  </section>

  
  <section id="JACKETS" className="text-gray-600 body-font">
    <h2 style={{textAlign: "center", fontSize: "40px"}}>JACKETS</h2>
    <div id="jacketCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
          
            {/* <!-- Shoe Item 1 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
          <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://coolvibe.in/wp-content/uploads/2019/10/Brown-Hoodie-1024x1024.png"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">JACKET</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">HOODIE</h2>
            <p className="mt-1">Rs 2500</p>
          </div>
        </div>
  {/* <!-- Shoe Item 2 --> */}
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
    <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://th.bing.com/th/id/R.7577a32cfb3d8c700186584a519eeb99?rik=2IPuo7WYRMCzHQ&pid=ImgRaw&r=0"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">JACKET</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">WINTER</h2>
            <p className="mt-1">Rs 10000</p>
          </div>
        </div>
 {/* <!-- Shoe Item 3 --> */}
 <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
  <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://th.bing.com/th/id/R.bc75b7ac1a6032c81fb69a88bc3b6754?rik=MUVKGixidKaSBQ&pid=ImgRaw&r=0"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">JACKET</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">LEATHER</h2>
            <p className="mt-1">Rs 1500</p>
          </div>
        </div>
             {/* <!-- Shoe Item 4 --> */}
             <div className="lg:w-1/5 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://th.bing.com/th/id/R.1635c2d1cd4bcc9ec6c424ee802ec7ff?rik=s2Hm0kCadic%2bag&pid=ImgRaw&r=0"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">JACKET</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">CASUAL</h2>
            <p className="mt-1">Rs 1000</p>
          </div>
        </div>

      </div>
    </div>
    </div>

           {/* <!-- Add your next set of 4 items here --> */}
           <div className="carousel-item">
            {/* <!-- Add your next set of 4 items here --> */}
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
              {/* <!-- Shoe Item 5 --> */}
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow:" 0 0 3px rgba(145, 143, 143, 0.5)"}}>
                <a href="airmax.html" className="block relative h-54 rounded ">
                  <img
                    src="https://th.bing.com/th/id/R.d04fbe38798ebd08ef8af9c86f5980e2?rik=VziXCGJbOTykZQ&pid=ImgRaw&r=0"
                    className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                  <p className="mt-1">Rs 15000</p>
                </div>
              </div>
  
          {/* <!-- Shoe Item 6 --> */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
              <img
                src="https://th.bing.com/th/id/R.5e337f2c421b8d2f2be68cd7ea3a4b3b?rik=xjsKSN59xqPm5w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fSneakers-PNG-Image.png&ehk=rBxc%2fcN4cW8haPMXw17gwd1g8zz18Xu5GHvxJdHSBbg%3d&risl=&pid=ImgRaw&r=0"
                className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
              <p className="mt-1">Rs 1200</p>
            </div>
          </div>
  
          {/* <!-- Shoe Item 7 --> */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
              <img src="https://www.pngarts.com/files/4/Sneaker-PNG-Picture.png"
                className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
              <p className="mt-1">Rs 2000</p>
            </div>
          </div>
  
          {/* <!-- Shoe Item 8 --> */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
              <img src="https://www.pngall.com/wp-content/uploads/5/Sylish-Men-Shoes-PNG.png"
                className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
              <p className="mt-1">Rs 8000</p>
            </div>
          </div>
            </div>
          </div>
    
          
        </div>
        <button  className="carousel-control-prev " type="button" data-bs-target="#jacketCarousel" data-bs-slide="prev">
          <span style={{backgroundColor: "rgb(3, 3, 3)", borderRadius: "50% "}} className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#jacketCarousel" data-bs-slide="next">
          <span  style={{backgroundColor: "rgb(3, 3, 3)", borderRadius: "50% "}} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </section>
 

  <section id="WRIST WATCH" className="text-gray-600 body-font">
    <h2 style={{textAlign: "center", fontSize: "40px"}}>WRIST WATCH</h2>
    <div id="wristCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
          
            {/* <!-- Shoe Item 1 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
          <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://th.bing.com/th/id/R.8cd1f1f973c81eaf0161d004dcf8c2d0?rik=M%2fyNvUN9m3Yd7Q&pid=ImgRaw&r=0"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">WATCH</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">ROLEX</h2>
            <p className="mt-1">Rs 50000</p>
          </div>
        </div>
            {/* <!-- Shoe Item 2 --> */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://th.bing.com/th/id/R.a6b440138babf79e52b35f320388df6b?rik=JKMkSmRlHWxYog&pid=ImgRaw&r=0"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">WATCH</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">CASIO</h2>
            <p className="mt-1">Rs 70000</p>
          </div>
        </div>
            {/* <!-- Shoe Item 3 --> */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
              <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover" src="wrist.png"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">WATCH</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">APPLE WATCH 6</h2>
            <p className="mt-1">Rs 80000</p>
          </div>
        </div>
           {/* <!-- Shoe Item 4 --> */}
           <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom-on-hover"
              src="https://th.bing.com/th/id/R.0ac54ac6fc75d3fcf954421852162fcf?rik=zI2hjoFp9ihYSw&pid=ImgRaw&r=0"/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">WATCH</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">HUAWEI WATCH 5</h2>
            <p className="mt-1">Rs 50000</p>
          </div>
        </div>
</div>
      </div>
    </div>
    </div>

           {/* <!-- Add your next set of 4 items here --> */}
           <div className="carousel-item">
            {/* <!-- Add your next set of 4 items here --> */}
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
              {/* <!-- Shoe Item 5 --> */}
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
                <a href="airmax.html" className="block relative h-48 rounded ">
                  <img
                    src="https://th.bing.com/th/id/R.d04fbe38798ebd08ef8af9c86f5980e2?rik=VziXCGJbOTykZQ&pid=ImgRaw&r=0"
                    className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                  <p className="mt-1">Rs 15000</p>
                </div>
              </div>
{/*   
          <!-- Shoe Item 6 --> */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
              <img
                src="https://th.bing.com/th/id/R.5e337f2c421b8d2f2be68cd7ea3a4b3b?rik=xjsKSN59xqPm5w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fSneakers-PNG-Image.png&ehk=rBxc%2fcN4cW8haPMXw17gwd1g8zz18Xu5GHvxJdHSBbg%3d&risl=&pid=ImgRaw&r=0"
                className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
              <p className="mt-1">Rs 1200</p>
            </div>
          </div>
  
          {/* <!-- Shoe Item 7 --> */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
              <img src="https://www.pngarts.com/files/4/Sneaker-PNG-Picture.png"
                className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
              <p className="mt-1">Rs 2000</p>
            </div>
          </div>
  
          {/* <!-- Shoe Item 8 --> */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)"}}>
            <a className="block relative h-54 rounded ">
              <img src="https://www.pngall.com/wp-content/uploads/5/Sylish-Men-Shoes-PNG.png"
                className="object-cover object-center w-full h-full block zoom-on-hover" alt="..."/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
              <p className="mt-1">Rs 8000</p>
            </div>
          </div>
            </div>
          </div>
    
          
        </div>
        <button  className="carousel-control-prev " type="button" data-bs-target="#wristCarousel" data-bs-slide="prev">
          <span style={{backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%"}} className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#wristCarousel" data-bs-slide="next">
          <span  style={{backgroundColor: "rgb(3, 3, 3)",borderRadius: "50% "}} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
 
  
  <section id="sales">
    <div className="flex-container">
      <div className="image-container" style={{marginLeft: "300px"}}>
        <img src="sale.png" alt="Your Image Alt Text"/>
      </div>

      <div className="lottie-container" id="lottie-container"></div>

      <div className="image-container" style={{marginRight: "300px"}}>
        <img
          src="https://th.bing.com/th/id/R.be8d66c325d56032a45624d8c9d3e9d6?rik=ruXHw309P97Eqw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSurprise-Girl%2fsurprise-png-girl_pngimagesfree.com.png&ehk=xvaMlzCiYDygaZHCjLSpctoal%2fIidPzj4MT2I3ws6jM%3d&risl=&pid=ImgRaw&r=0"
          alt="Your Image Alt Text"/>
      </div>
    </div>
  </section>
  
  <section className="app section bd-container">
    <div className="app__container bd-grid">
        <div className="app__data">
            <span className="section-subtitle app__initial" style={{color:"green" , fontWeight: "bold"}}>App</span>
            <h2 className="section-title app__initial" style={{fontSize: "30px", fontWeight: "bold"}}>App is available</h2>
            <p className="app__description">Find our application and download it, you can make orders, track orders, see your deliveries on the way and much more. </p>
            <div className="app__stores">
                <a href="#"><img src="app1.png" alt="" className="app__store"/></a>
                <a href="#"><img src="app2.png" alt="" className="app__store"/></a>
            </div>
        </div>

        <img src="movil-app1.png" alt="" className="app__img"/>
    </div>
</section>

 

  
 </div> 

    
    
    )
}
export default Body;
