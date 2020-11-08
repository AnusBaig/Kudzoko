import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import dman from './Assets/dman.PNG'
import footer from './Assets/footer1.png'
import whatsapp from './Assets/whatsapp.png'
import insta from './Assets/insta.png'
import left from './Assets/left.png'
import mid from './Assets/middle.png'
import right from './Assets/right.png'
import uleft from './Assets/uleft.png'
import umid from './Assets/umid.png'
import uright from './Assets/uright.png'
import apple from './Assets/apple.PNG'
import playstore from './Assets/playstore.PNG'
import facebook from './Assets/facebook-notRounded.png'
import kud from './Assets/kud.PNG'
import Logo from './Assets/argon-react.png'
import '../../assets/css/landingPage.css';

const Landing = () => {

    const [toggle, setToggle] = useState(false)
    console.log(toggle)
    return (
        <div className="upper-body">

            <Navbar expand="lg" className="navbar py-2 py-md-3 py-lg-4 py-sm-2 px-2 px-md-4 px-lg-3 px-sm-2  upper-body">
                <Navbar.Brand href="#home" className="app_logo"><img src={Logo} style={{ width: '230px'}}/></Navbar.Brand>
                < Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setToggle(!toggle)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link className="navItem">Home <hr className="active-un" /> </Nav.Link>
                        <Nav.Link className="navItem">Services</Nav.Link>
                        <Nav.Link className="navItem">About Us</Nav.Link>
                        <Nav.Link className="navItem">Help Center</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                        <Link to='/login' className='login-btn text-decoration-none'>Login / Signup</Link>
                </Form>
            </Navbar >


            <div className="bg-white w-100">
                <img src={dman} className="w-100 packageManImg" />
                <div className={`divText ${toggle ? "topdivText" : ""} title__box m-2 m-xl-5 m-lg-4 m-md-3 m-sm-2 p-2 p-xl-5 p-lg-4 p-md-3 p-sm-2`} >
                    <h1 class="title py-2 py-lg-4 py-md-3 py-sm-2">You Sell
                            <span className="title__second"> it We</span>
                            <span className="deliver"> Deliver it</span>
                    </h1>
                    <p className="subTitle">Leave the logistics to us, <span className='subTitle__firstPart'>while you focus</span> <span className='subTitle__secondPart'>on your customers &amp; Productss</span></p>
                </div>
            </div>

            <Row className="bg-white" className="bodydiv">
                <Col xs={4} className="text-center" className="uleft" >
                    <img src={uleft} alt="" className="w-50 feature__image" />
                    <div className={`feature`} >
                        <h5 className="text-dark feature__title">Super Fast Delivery</h5>
                        <p className="feature__desc">We only need 45-60 minutes to <br /> get your product into your <br /> costumer's hands.</p>
                    </div>
                </Col>
                <Col xs={4} className="text-center" className="umid">

                    <img src={umid} alt="" className="w-50 feature__image" />

                    <div className={`feature`} >
                        <h5 className="text-dark feature__title">Real Time Tracking</h5>
                        <p className="feature__desc">We only need 45-60 minutes to <br /> get your product into your <br /> costumer hands.</p>
                    </div>
                </Col>
                <Col xs={4} className="text-center "
                    style={{
                        visibility: "hidden"
                    }}
                >
                    <img src={uright} alt="" className="w-50"
                        style={{ marginTop: "20rem" }}
                    />
                    <div className={`feature`} >
                        <h5 className="text-dark feature__title">Discounts</h5>
                        <p className="feature__desc">We only need 45-60 minutes to <br /> get your product into your <br /> costumer hands.</p>
                    </div>
                </Col>
                <Container>

                    <Row>

                        <Col className="text-center row" >
                            <div className="mr-2 mr-xl-5 mr-lg-4 mr-md-3 uright1" >
                                <img src={kud} alt="" className="buis_img w-100" />

                            </div>

                        </Col>

                        <Col className="text-center row">
                            <div className="ml-auto uright" >
                                <img src={uright} alt="" className="feature__image w-50"

                                />
                                <div className={`feature`} >
                                    <h5 className="text-dark feature__title">Discounts</h5>
                                    <p className="feature__desc">We only need 45-60 minutes to <br /> get your product into your <br /> costumer hands.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Row>
            
            <hr className="topic__seprator" />

            <Row className="bg-white resp">
                <Col xs={12} md={3} className="nnleft text-center" >
                    <img src={left} alt="" className="w-75 stats-left__img" />
                </Col>
                <Col className="nnmid" xs={12} md={5} className="text-center">
                    <img src={mid} alt="" className="w-100 stats-middle__img" />
                    <div className={`stats__info`} >
                        <h5 className="stats__title">Round the Clock Support</h5>
                        <p className="stats__desc">We only need 45-60 minutes to <br /> get your product into your <br /> costumer's hands.</p>
                    </div>
                </Col>
                <Col xs={12} md={3} className="nnright">
                    <img src={right} alt="" className="w-75 stats-right__img" />
                </Col>
            </Row>



            <div className="bg-white w-100 position-relative">
                <div className="py-3 px-5 foot-text">
                    <div className="p-2 foot-section-1">
                        <div className="downoad__sources">
                            <div class="download__box">
                                <img src={apple} className="download__source-img curson-pointer" alt="" />
                                <div>
                                    <div class="download__text">Download on</div>
                                    <div class="download__source-name curson-pointer">App Store</div>
                                </div>
                            </div>
                            <div class="download__box">
                                <img src={playstore} className="download__source-img curson-pointer" alt="" />
                                <div className="pr-2">
                                    <div class="download__text">Download on</div>
                                    <div class="download__source-name curson-pointer">PlayStore</div>
                                </div>
                            </div>
                        </div>
                        <div className="socialmedia__icons ml-5">
                            <img src={insta} alt="" className="curson-pointer" />
                            <img src={whatsapp} alt="" className="mx-4 curson-pointer" />
                            <img src={facebook} alt="" className="curson-pointer" />   
                        </div>    
                    </div>
                    <Nav className="mr-auto ">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Services</Nav.Link>
                        <Nav.Link >About Us</Nav.Link>
                        <Nav.Link >Help Center</Nav.Link>
                    </Nav>

                </div>
                <img src={footer} className="w-100" />
            </div>

        </div >
    )
}

export default Landing