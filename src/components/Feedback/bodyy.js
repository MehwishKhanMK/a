import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bodyy.css'

const Bodyy = () => {


    useEffect(() => {
        const buttons = document.querySelectorAll('.lottiecontainer');

        const handleClick = (event) => {
            const buttonName = event.currentTarget.id; // Get the ID of the clicked button
            handleButtonClick(buttonName);
        };

        buttons.forEach((button) => {
            button.addEventListener('click', handleClick);
        });

        const cleanup = () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleClick);
            });
        };

        return cleanup;
    }, []);
    const [isFeedbackVisible, setFeedbackVisible] = useState(false);

    const loadLottieAnimation = (containerId, animationPath, options) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '';
            options.container = container;
            options.path = animationPath;
            lottie.loadAnimation(options);
        }
    };

    const switchPages = () => {
        setFeedbackVisible(true);
    };

    useEffect(() => {
        const buttons = document.querySelectorAll('.lottiecontainer');

        buttons.forEach((button) => {
            button.addEventListener('click', switchPages);
        });

        const cleanup = () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', switchPages);
            });
        };

        return cleanup;
    }, []);

    useEffect(() => {
        // Load the main Lottie animation
        const animationPath = 'heart.json';
        const animationOptions = {
            container: document.getElementById('lottie-animation-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animationPath,
        };

        // Destroy the main Lottie animation when not needed
        const mainLottieContainer = document.getElementById('lottie-animation-container');
        const mainLottie = lottie.loadAnimation(animationOptions);
        var anim = lottie.loadAnimation(animationOptions);

        // Show/hide main Lottie container based on isFeedbackVisible
        if (mainLottieContainer) {
            if (isFeedbackVisible) {
                mainLottie.destroy();
            } else {
                mainLottieContainer.style.display = 'block';
            }
        }

        // Load Lottie animations for other containers
        const sadAnimationPath = 'sad.json';
        const noneAnimationPath = 'zib.json';
        const happyAnimationPath = 'happy.json';
        const animationOptions2 = {
            renderer: 'svg',
            loop: true,
            autoplay: true,
        };

        loadLottieAnimation('sad-animation-container', sadAnimationPath, animationOptions2);
        loadLottieAnimation('none-animation-container', noneAnimationPath, animationOptions2);
        loadLottieAnimation('happy-animation-container', happyAnimationPath, animationOptions2);
    }, [isFeedbackVisible]);


    const [selectedOption, setSelectedOption] = useState('');
    const [response, setResponse] = useState('');

    const handleButtonClick = async (feedbackType) => {
        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedbackType }),
            });

            if (response.ok) {
                console.log('Feedback sent successfully');
                // Handle any additional actions on successful feedback submission
            } else {
                console.error('Error sending feedback');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (



        <div className="bodyss">
            <meta charSet="UTF-8" />
            <title>Feedback Form</title>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.min.js"></script> */}
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PTlBx6/Olq6qDpKVfFH1eGgLE5Bd4RsiabXExmPU5iU2nN" crossOrigin="anonymous" />

            <Navbar id="headers" bg="dark" variant="dark" className="text-white body-font  shadow-lg" style={{ height: '90px', background: 'linear-gradient(270deg, rgb(33, 164, 181) 0%, rgb(16, 187, 147) 0%, rgb(69, 203, 230) 100%)' }}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Navbar.Brand href="/" className="flex title-font font-extrabold items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" width="80" height="40">
                            <circle cx="40" cy="25" r="25" fill="purple" />

                            {/* <!-- Petals --> */}
                            <circle cx="68" cy="30" r="10" fill="black" />
                            <circle cx="12" cy="30" r="10" fill="black" />




                            {/* <!-- Flower center --> */}
                            <circle cx="40" cy="25" r="5" fill="black" />
                        </svg>
                        <span style={{ fontSize: '34px' }} className="ml-3 text-2x1">
                            A&M
                        </span>
                    </Navbar.Brand>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
                        style={{ color: "rgb(255, 255, 255)" }}>
                        <a href="/" className="mr-10 hover:text-yellow-200">HOME</a>
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
                        <a href="/feedback" className="mr-10 hover:text-yellow-200">BACK</a>
                    </nav>
                    <a href="/feedback">
                        <Button className="inline-flex items-center bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-full text-lg font-medium mt-4 md:mt-0">
                            Feedback
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Button>
                    </a>
                </div>
            </Navbar>

            <div>
                {!isFeedbackVisible && (
                    <>
                        <h1 style={{ marginTop: '4%', color: '#000000', fontSize: '31px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                            How satisfied are you with our<br /> customer support performance
                        </h1>
                        <div className="emojicontainer">

                            <div className="listcontainer">
                                <button onClick={() => handleButtonClick('BAD')} >
                                    <div id="sad-animation-container" className="lottiecontainer" style={{ height: '150px', width: '150px', margin: 'auto' }}></div>
                                    <p style={{ color: '#0d0d0d', fontWeight: 'bold', fontSize: '21px' }}>BAD</p>
                                </button>
                            </div>


                            <div className="listcontainer">
                                <button onClick={() => handleButtonClick('AVERAGE')}>
                                    <div id="none-animation-container" className="lottiecontainer" style={{ height: '150px', width: '150px', margin: 'auto' }}></div>
                                    <p style={{ color: '#050505', margin: 'auto', fontWeight: 'bold', fontSize: '21px' }}>AVERAGE</p>
                                </button>
                            </div>


                            <div className="listcontainer">
                                <button onClick={() => handleButtonClick('HAPPY')}>
                                    <div id="happy-animation-container" className="lottiecontainer" style={{ height: '150px', width: '150px', margin: 'auto' }}></div>
                                    <p style={{ color: '#141313', margin: 'auto', fontWeight: 'bold', fontSize: '21px' }}>GOOD</p>
                                </button>
                            </div>

                        </div>
                    </>
                )}

                {/* Start of Feedback Page */}
                {isFeedbackVisible && (
                    <>
                        <Row className="feedbackcontainer">
                            <Col className="listcontainer">
                                <div id="lottie-animation-container" style={{ margin: 'auto', width: '350px', height: '250px' }}></div>
                                <h1 style={{ fontWeight: '700px', fontSize: '54px', color: 'rgb(2, 66, 24)' }}>Thank You</h1>
                                <p style={{ color: 'black', fontSize: '20px', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                    We will use your feedback to improve our customer support performance.
                                </p>
                            </Col>
                        </Row>
                    </>
                )}
                {/* End of Feedback Page */}
            </div>
        </div>

    );
};

export default Bodyy;
