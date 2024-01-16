import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Body() {

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

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrevClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 0 ? 7 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 7 ? 0 : prevIndex + 1));
  };
  
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.min.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PTlBx6/Olq6qDpKVfFH1eGgLE5Bd4RsiabXExmPU5iU2nN" crossOrigin="anonymous" />
      <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>


      <header className="text-white shadow-lg"
        style={{ background: "linear-gradient(270deg, rgb(33, 164, 181) 0%, rgb(16, 187, 147) 0%, rgb(69, 203, 230) 100%)", height: "90px" }}>
        <div className="container mx-auto px-4 flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-extrabold items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" width="80" height="40">
              <circle cx="40" cy="25" r="25" fill="purple" />

              {/* <!-- Petals --> */}
              <circle cx="68" cy="30" r="10" fill="black" />
              <circle cx="12" cy="30" r="10" fill="black" />




              {/* <!-- Flower center --> */}
              <circle cx="40" cy="25" r="5" fill="black" />
            </svg>

            <span style={{ fontSize: "34px", color: "rgb(255, 255, 255)", verticalAlign: " baseline" }} className="ml-3 mt-2 text-2x1">A&M </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
            style={{ color: "rgb(255, 255, 255)" }}>
            <a href="/" className="mr-10 hover:text-yellow-200">HOME</a>
            <a href="#sales" className="mr-10 hover:text-yellow-200">SALES</a>
            <div className="dropdown">
              <a href="#SHOES" className="mr-10 hover:text-yellow-200" style={{ "display": "flex", "flexDirection": "row" }}>CATEGORY</a>
              <div className="dropdown-content"
                style={{ marginTop: " 5px", background: "linear-gradient(270deg, rgb(33, 164, 181) 0%, rgb(16, 187, 147) 0%, rgb(69, 203, 230) 100%)", borderRadius: " 8px", padding: "20%" }}>
                {/* <!-- Dropdown items --> */}
                <div className="dropdownn" style={{ color: "white" }}>
                  <a href="/#SHOES" className="dropdown-link" style={{ marginBottom: "10%" }}>SHOES</a>
                  <a href="/#JACKETS" className="dropdown-link" style={{ marginBottom: "10%" }}>JACKETS</a>
                  <a href="/#WRIST WATCH" className="dropdown-link">WATCHES</a>
                </div>
              </div>
            </div>
            <a href="#about us" className="mr-10 hover:text-yellow-200">ABOUT US</a>
          </nav>
          <a href="/feedback">
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

      <img className="ima" src="" id="image" style={{ height: "600px", width: "100%" }} />



      {/* <!-- <div id="lottie-container" style="width: 100%; height: 300px;">
       <image id="lalala" src="sale.png">
        </div> --> */}

      <div className="centered-div" style={{ borderRadius: "8px" }}>
        <p className="ad"> Explore our last chance selection! <br />
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

      {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script> */}

      <section id="SHOES" className="text-gray-600 body-font">
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>SHOES</h2>
        <Carousel id="shoeCarousel" className="carousel slide" data-bs-ride="carousel"  interval={null} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

          <Carousel.Item>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4" >

                {/* <!-- Shoe Item 1 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: " 0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a href="airmax.html" className="block relative h-48 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.88e052c0ffea9dea0c1195b9270e1568?rik=F72hkHASg7jVCg&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 2 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-48 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=2cAi1QHrzWsBpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png--1200.png&ehk=LDK2zKZ4gGD3lYE7ncWJOb8tGdJLrU046BiOz1wqbAQ%3d&risl=&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                    <p className="mt-1">Rs 1200</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 3 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-48 rounded ">
                    <img src="https://www.pngarts.com/files/2/Shoes-PNG-Transparent-Image.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                    <p className="mt-1">Rs 2000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 4 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: " 0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-48 rounded ">
                    <img src="https://www.downloadclipart.net/large/shoe-transparent-png.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                    <p className="mt-1">Rs 8000</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>


          {/* <!-- Add your next set of 4 items here --> */}
          <Carousel.Item>
            {/* <!-- Add your next set of 4 items here --> */}
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* <!-- Shoe Item 5 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a href="airmax.html" className="block relative h-48 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.d04fbe38798ebd08ef8af9c86f5980e2?rik=VziXCGJbOTykZQ&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>
                {/* <!-- Shoe Item 6 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-48 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.5e337f2c421b8d2f2be68cd7ea3a4b3b?rik=xjsKSN59xqPm5w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fSneakers-PNG-Image.png&ehk=rBxc%2fcN4cW8haPMXw17gwd1g8zz18Xu5GHvxJdHSBbg%3d&risl=&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                    <p className="mt-1">Rs 1200</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 7 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-48 rounded ">
                    <img src="https://www.pngarts.com/files/4/Sneaker-PNG-Picture.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                    <p className="mt-1">Rs 2000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 8 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-48 rounded ">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Sylish-Men-Shoes-PNG.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                    <p className="mt-1">Rs 8000</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <>
          <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#shoeCarousel"
        data-bs-slide="prev"
        onClick={handlePrevClick}
      >
        <span
          style={{ backgroundColor: 'rgb(3, 3, 3)', borderRadius: '50%' }}
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#shoeCarousel"
        data-bs-slide="next"
        onClick={handleNextClick}
      >
        <span
          style={{ backgroundColor: 'rgb(3, 3, 3)', borderRadius: '50%' }}
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
      </>
        </Carousel>
      </section>


      <section id="JACKETS" className="text-gray-600 body-font">
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>JACKETS</h2>
        <Carousel id="shoeCarousel" className="carousel slide" data-bs-ride="carousel" interval={null} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

          <Carousel.Item>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4" >

                {/* <!-- Shoe Item 1 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: " 0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a href="airmax.html" className="block relative h-54 rounded ">
                    <img
                      src="https://coolvibe.in/wp-content/uploads/2019/10/Brown-Hoodie-1024x1024.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 2 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.7577a32cfb3d8c700186584a519eeb99?rik=2IPuo7WYRMCzHQ&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                    <p className="mt-1">Rs 1200</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 3 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.bc75b7ac1a6032c81fb69a88bc3b6754?rik=MUVKGixidKaSBQ&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                    <p className="mt-1">Rs 2000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 4 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: " 0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.1635c2d1cd4bcc9ec6c424ee802ec7ff?rik=s2Hm0kCadic%2bag&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                    <p className="mt-1">Rs 8000</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>


          {/* <!-- Add your next set of 4 items here --> */}
          <Carousel.Item>
            {/* <!-- Add your next set of 4 items here --> */}
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* <!-- Shoe Item 5 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a href="airmax.html" className="block relative h-54 rounded ">
                    <img
                      src="https://www.pngarts.com/files/4/Nylon-Jacket-PNG-Pic.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>
                {/* <!-- Shoe Item 6 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.501ea26b541056cd13d469c0c09c970d?rik=zCQOhOSKTo0E1g&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                    <p className="mt-1">Rs 1200</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 7 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.031121d0b713528c66f43806af9ea4b7?rik=qZwDjk%2fNZOlFvg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fJacket-PNG.png&ehk=HFpWLFenRhSyLJGAklD4Q8oQ%2bzGjzNGRS9ya5u1%2biCM%3d&risl=&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                    <p className="mt-1">Rs 2000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 8 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.f9419300f054b219f67614a712f103df?rik=yXrgw4vLWSDcew&riu=http%3a%2f%2fpngimg.com%2fuploads%2fjacket%2fjacket_PNG8047.png&ehk=XjE18Ss2C%2fsgiYZfRCqWtCGUThkjgmh7EQzwUXJMLh0%3d&risl=1&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                    <p className="mt-1">Rs 8000</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>


          <button className="carousel-control-prev" type="button" data-bs-target="#shoeCarousel" data-bs-slide="prev">
      <span style={{ backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#shoeCarousel" data-bs-slide="next">
      <span style={{ backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%" }} className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
        </Carousel>
      </section>


      <section id="WRIST WATCH" className="text-gray-600 body-font">
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>WRIST WATCH</h2>
        <Carousel id="shoeCarousel" className="carousel slide" data-bs-ride="carousel" interval={null} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Carousel.Item>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4" >

                {/* <!-- Shoe Item 1 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: " 0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a href="airmax.html" className="block relative h-54 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.8cd1f1f973c81eaf0161d004dcf8c2d0?rik=M%2fyNvUN9m3Yd7Q&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 2 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.a6b440138babf79e52b35f320388df6b?rik=JKMkSmRlHWxYog&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                    <p className="mt-1">Rs 1200</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 3 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="wrist.png"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                    <p className="mt-1">Rs 2000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 4 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: " 0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.0ac54ac6fc75d3fcf954421852162fcf?rik=zI2hjoFp9ihYSw&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                    <p className="mt-1">Rs 8000</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>


          {/* <!-- Add your next set of 4 items here --> */}
          <Carousel.Item>
            {/* <!-- Add your next set of 4 items here --> */}
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* <!-- Shoe Item 5 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a href="airmax.html" className="block relative h-54 rounded ">
                    <img
                      src="https://th.bing.com/th/id/OIP.UF8lPW4tKe41VB6nz5pDywHaHa?rs=1&pid=ImgDetMain"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">AIR MAX</h2>
                    <p className="mt-1">Rs 15000</p>
                  </div>
                </div>
                {/* <!-- Shoe Item 6 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img
                      src="https://th.bing.com/th/id/R.7ef018294cc24ebb60e9ca2302733974?rik=3%2blr5kt0giIzOA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fLadies-Watch-Transparent-PNG.png&ehk=sEaZbnpGwXpf7z0XpqOwVGySdC%2bijxq26haJlQx%2fK5M%3d&risl=&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">RUNNER</h2>
                    <p className="mt-1">Rs 1200</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 7 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.9a24bced61d389621e560bdf760163ed?rik=7igntDF8cOx7GA&pid=ImgRaw&r=0&sres=1&sresct=1"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">NEPTUNE</h2>
                    <p className="mt-1">Rs 2000</p>
                  </div>
                </div>

                {/* <!-- Shoe Item 8 --> */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" style={{ boxShadow: "0 0 3px rgba(145, 143, 143, 0.5)" }}>
                  <a className="block relative h-54 rounded ">
                    <img src="https://th.bing.com/th/id/R.dedcc375c09b726082ae751c82c5b408?rik=uWZKRbq7leFdjg&pid=ImgRaw&r=0"
                      className="object-cover object-center w-full h-full block zoom-on-hover" alt="..." />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOE</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">CONVERSE 2</h2>
                    <p className="mt-1">Rs 8000</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>


          <button className="carousel-control-prev " type="button" data-bs-target="#shoeCarousel" data-bs-slide="prev">
            <span style={{ backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#shoeCarousel" data-bs-slide="next">
            <span style={{ backgroundColor: "rgb(3, 3, 3)", borderRadius: "50%" }} className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </Carousel>
      </section>

      <section id="sales">
        <div className="flex-container">
          <div className="image-container" style={{ marginLeft: "300px" }}>
            <img src="sale.png" alt="Your Image Alt Text" />
          </div>

          <div className="lottie-container" id="lottie-container"></div>

          <div className="image-container" style={{ marginRight: "300px" }}>
            <img
              src="https://th.bing.com/th/id/R.be8d66c325d56032a45624d8c9d3e9d6?rik=ruXHw309P97Eqw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSurprise-Girl%2fsurprise-png-girl_pngimagesfree.com.png&ehk=xvaMlzCiYDygaZHCjLSpctoal%2fIidPzj4MT2I3ws6jM%3d&risl=&pid=ImgRaw&r=0"
              alt="Your Image Alt Text" />
          </div>
        </div>
      </section>

      <section className="app section bd-container">
        <div className="app__container bd-grid">
          <div className="app__data">
            <span className="section-subtitle app__initial" style={{ color: "green", fontWeight: "bold" }}>App</span>
            <h2 className="section-title app__initial" style={{ fontSize: "30px", fontWeight: "bold" }}>App is available</h2>
            <p className="app__description">Find our application and download it, you can make orders, track orders, see your deliveries on the way and much more. </p>
            <div className="app__stores">
              <a href="#"><img src="app1.png" alt="" className="app__store" /></a>
              <a href="#"><img src="app2.png" alt="" className="app__store" /></a>
            </div>
          </div>

          <img src="movil-app1.png" alt="" className="app__img" />
        </div>
      </section>


      <section id="about us">
        <div className="footer">
          {/* <!-- <img  src="https://img.freepik.com/premium-vector/business-brochure-presentation-template-purple-wave-modern-style_573652-2201.jpg?w=740" id="ww" style={{"width:100%"}}> --> */}

          <footer style={{ fontFamily: "Helvetica", lineHeight: "35px" }} className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                <a className="flex title-font font-extrabold items-center text-white mb-4 md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" width="80" height="40">
                    <circle cx="40" cy="25" r="25" fill="violet" />

                    {/* <!-- Petals --> */}
                    <circle cx="68" cy="30" r="10" fill="black" />
                    <circle cx="12" cy="30" r="10" fill="black" />
                    {/* 
                <!-- Flower center --> */}
                    <circle cx="40" cy="25" r="5" fill="black" />
                  </svg>

                  <span style={{ fontSize: "34px", color: " #FFFFFF" }} className="ml-3 text-2x1">A&M </span>
                </a>
                <p style={{ fontSize: " medium", color: "#FFFFFF" }} className="mt-2 text-sm text-black">Why shop anywhere else when
                  we've got your
                  style in the bag?</p>
              </div>
              <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 style={{ fontWeight: "bold", fontSize: "23px", color: "#5a0606" }}
                    className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-left">SHOP</h2>
                  <nav className="list-none mb-10 text-left">
                    <li>
                      <a className="text-white hover:text-blue-800">Shoes</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Jackets</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Wrist Watch</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Pants</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Sale</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">A&M Home</a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 style={{ fontWeight: " bold", fontSize: "23px", color: "#460505" }}
                    className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-left">SUPPORT</h2>
                  <nav className="list-none mb-10 text-left">
                    <li>
                      <a className="text-white hover:text-blue-800">Contact Us</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Report a scam</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">My A&M</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Legal and Privacy</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Cookie Settings</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Customer Service</a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 style={{ fontWeight: "bold", fontSize: "23px", color: "#420808" }}
                    className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-left">COMPANY INFO</h2>
                  <nav className="list-none mb-10 text-left">
                    <li>
                      <a className="text-white hover:text-blue-800">About A&M Group</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Corporate Governance</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Career At A&M</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Investor Relation</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Press</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blue-800">Affiliates</a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div
              style={{ background: "rgb(0, 39, 39)" }}
              className="bg-purple-100">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-black text-sm text-center sm:text-left" style={{ color: "#FFFFFF" }}>© 2023 A&M
                  <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-black ml-1" target="_blank"
                    style={{ color: "#FFFFFF" }}>@mehan</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-white">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-blue-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                      </path>
                    </svg>
                  </a>
                  <a className="ml-3 text-red-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-blue-500">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>

            </div>

          </footer>
        </div>
      </section>


    </div>



  )
}
export default Body;
