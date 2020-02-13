import React, { Fragment } from 'react';
import { Button, Row, Col, Input } from 'antd';
import playBtn from '../src/assets/play.svg';
import sup from '../src/assets/sup.svg';
import branding from '../src/assets/branding.svg';
import development from '../src/assets/developer.svg';
import graphics from '../src/assets/graphics.svg';
import testing from '../src/assets/testing.svg';
import uiux from '../src/assets/uiux.svg';
import webdesign from '../src/assets/webdesign.svg';
import dotbg from '../src/assets/dotbg.svg';
import manbg from '../src/assets/man-bg.svg';
import { FaFacebookF, FaLinkedinIn, FaCopyright } from "react-icons/fa"; 
import { IoLogoTwitter, IoLogoDribbble,  IoIosMenu } from "react-icons/io";
// import 'antd/dist/antd.css';
import './App.css';

function App() {

  const toggleMenu = () =>{
    console.log('clicked')
   let menu =  document.querySelector('.menu');
   menu.classList.toggle('menu-open')
  }
  return (
    <Fragment>
      <section>
    <img src={manbg} alt='advert' className='img_ovlp shadow hide-md'/>
      <div className='landing'>
        <div className='rot_bg'>creative</div>
        <div className='container'>
          <nav>
            <Row className='row'>
              <Col xs={20} sm={20} md={20} lg={12}>
                <span className='homeBtn'>
                  agency
              <sup><img src={sup} alt=''/></sup>
                </span>
              </Col>
              <Col xs={4} sm={4} md={4} lg={12} >
              <IoIosMenu onClick={toggleMenu} fontSize='30px' className='d-flex md-d-none float-right toggleMenu'/>
              </Col>
              <Col xs={4} sm={4} md={4} lg={12} className='hide-md menu'>
                <div className=''>
                  <div className='d-flex align-center nav_menu'>
                  <ul className='nav-right'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Project</a></li>
                    <li><a href='/'>About us</a></li>
                    <li><a href='/'>Contact</a></li>
                  </ul>
                  <Button size='large' shape="round" className='nav_btn actionBtn'>My Project</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </nav>
          <div className='c_ad m-auto md-m-none'>
            <div className='ad_c'>
              <span className='ad_i xs-f90 fs120'>
                creative
            </span>
              <span className='ad_i xs-f90 fs120'>
                agency
            </span>
              <span className='p-m'>
                <img src={playBtn} alt='' />
                <span className='pl_m'>watch a video intro</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className='s_p'>
      <img src={dotbg} alt='' style={{    position: 'absolute',
    right: 0,
    top: '-8%', zIndex: 1}} className='d-none show-md-lg'/>
        <div className='container section-2'>
          <div className='s-content'>
            <div className='mb8'>
              <span className='white-text md-f110 d-table s2-h'>services</span>
              <span className='white-text md-f110 d-table s2-h'>&portfolio</span>
            </div>
            <Row gutter={16}>
              <Col className="gutter-row mb8" xs={24} sm={12} md={12} lg={8}>
                <Row>
                  <Col className="gutter-row" span={4}>
                    <img src={webdesign} alt='web design' />
                  </Col>
                  <Col className="gutter-row" span={20}>
                    <div className="gutter-box">
                      <span className='d-block services mb3 white-text f18 white-text f18'>Web Design</span>
                      <p className='md-w-90 white-text f17 serv_prod'>
                        modern web design services withnew trends and direction.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row mb8"  xs={24} sm={12} md={12} lg={8}>
                <Row>
                  <Col className="gutter-row" span={4}>
                    <img src={branding} alt='branding' />
                  </Col>
                  <Col className="gutter-row" span={20}>
                    <div className="gutter-box">
                      <span className='d-block services mb3 white-text f18'>Branding</span>
                      <p className='md-w-90 white-text f17 serv_prod'>
                        highly professional branding and logo design work.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row mb8 clear-both md-clear-none"  xs={24} sm={12} md={12} lg={8}>
                <Row>
                  <Col className="gutter-row" span={4}>
                    <img src={graphics} alt='motion graphics' />
                  </Col>
                  <Col className="gutter-row" span={20}>
                    <div className="gutter-box">
                      <span className='d-block services mb3 white-text f18'>Motion Graphics</span>
                      <p className='md-w-90 white-text f17 serv_prod'>
                        modern motion graphics and animation for businesses.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col className="gutter-row md-clear-both"  xs={24} sm={12} md={12} lg={8}>
                <Row>
                  <Col className="gutter-row" span={4}>
                    <img src={uiux} alt='ui/ux' />
                  </Col>
                  <Col className="gutter-row" span={20}>
                    <div className="gutter-box">
                      <span className='d-block services mb3 white-text f18'>UI/UX Design</span>
                      <p className='md-w-90 white-text f17 serv_prod'>
                        Standard screen generation and design for all devices.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row clear-both clear-both md-clear-none"  xs={24} sm={12} md={12} lg={8}>
                <Row>
                  <Col className="gutter-row" span={4}>
                    <img src={development} alt='web developement' />
                  </Col>
                  <Col className="gutter-row" span={20}>
                    <div className="gutter-box">
                      <span className='d-block services mb3 white-text f18'>Web Developement</span>
                      <p className='md-w-90 white-text f17 serv_prod'>
                        website development is something we are best in.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row"  xs={24} sm={12} md={12} lg={8}>
                <Row>
                  <Col className="gutter-row" span={4}>
                    <img src={testing} alt='testing' />
                  </Col>
                  <Col className="gutter-row" span={20}>
                    <div className="gutter-box">
                      <span className='d-block services mb3 white-text f18'>App Developement</span>
                      <p className='md-w-90 white-text f17 serv_prod'>
                        we test app for better user experience and results.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section style={{position: 'relative'}}>
        <img src={dotbg} alt='' style={{    position: 'absolute',
    right: 0,
    top:' 22%'}} className='d-none show-md-lg'/>
    <div className='team_rot_bg d-none show-md-lg'>team</div>
        <div className='container pt10 pb5'>
          <div className='text-center mb20'>
            <h6 className='f30 h_sm1'>Meet the team</h6>
            <p className='textColor md-w-60 f25 md-f42 m-auto t_h'>
              great outcome always relay on
        the great foundation
      </p>
          </div>
          <div>
            <Row gutter={20}>
              <Col className="gutter-row mb5" xs={24} sm={24} md={24} lg={8}>
                <div className="gutter-box">
                  <div className='team jam'>

                  </div>
                  <div className='text-center mt5'>
                    <h6 className='team-mem'>Jam Potrick</h6>
                    <div className='mb4 mt4'>
                      <span className='d-block f22 t_info'>Standard screen generation</span>
                      <span className='d-block f22 t_info'>and design for all </span>
                    </div>
                    <div className='d-flex w-60 m-auto justify-space-between'>
                       <a href='/'>
                       <FaFacebookF color='#BEBEBE' fontSize='30px'/>
                       </a>
                    <a href='/'>
                    <IoLogoTwitter color='#BEBEBE' fontSize='30px'/>
                    </a>
                     <a href='/'>
                     <IoLogoDribbble color='#BEBEBE' fontSize='30px'/>
                     </a>
                     <a href='/'>
                     <FaLinkedinIn color='#BEBEBE' fontSize='30px'/>
                     </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row mb5" xs={24} sm={24} md={24} lg={8}>
                <div className="gutter-box">
                  <div className='team ema'>

                  </div>
                  <div className='text-center mt5'>
                    <h6 className='team-mem'>Ema Jonas</h6>
                    <div className='mb4 mt4'>
                      <span className='d-block f22 t_info'>Standard screen generation</span>
                      <span className='d-block f22 t_info'>and design for all </span>
                    </div>
                    <div className='d-flex w-60 m-auto justify-space-between'>
                        <a href='/'>
                       <FaFacebookF color='#BEBEBE' fontSize='30px'/>
                       </a>
                    <a href='/'>
                    <IoLogoTwitter color='#BEBEBE' fontSize='30px'/>
                    </a>
                     <a href='/'>
                     <IoLogoDribbble color='#BEBEBE' fontSize='30px'/>
                     </a>
                     <a href='/'>
                     <FaLinkedinIn color='#BEBEBE' fontSize='30px'/>
                     </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row mb5" xs={24} sm={24} md={24} lg={8}>
                <div className="gutter-box">
                  <div className='team mike'>

                  </div>
                  <div className='text-center mt5'>
                    <h6 className='team-mem'>Mike Pens</h6>
                    <div className='mb4 mt4'>
                      <span className='d-block f22 t_info'>Standard screen generation</span>
                      <span className='d-block f22 t_info'>and design for all </span>
                    </div>
                    <div className='d-flex w-60 m-auto justify-space-between'>
                        <a href='/'>
                       <FaFacebookF color='#BEBEBE' fontSize='30px'/>
                       </a>
                    <a href='/'>
                    <IoLogoTwitter color='#BEBEBE' fontSize='30px'/>
                    </a>
                     <a href='/'>
                     <IoLogoDribbble color='#BEBEBE' fontSize='30px'/>
                     </a>
                     <a href='/'>
                     <FaLinkedinIn color='#BEBEBE' fontSize='30px'/>
                     </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className='text-center mt5 mb10'>
              <Button size='large' shape="round" className='actionBtn shadow' style={{ height: '50px', paddingLeft: '5%', paddingRight: '5%' }}>Let's Catch All</Button>
            </div>
            <div className='text-center md-w-60 m-auto'>
              <h6 className="f30 h_sm2">contact us</h6>
              <span className='con-frm-info f25 md-f42 d-block mb5'>
                Have an awesome idea in your mind?
  we would love to hear
              </span>
              <div className='d-flex ph10 align-center'>
                <Input className='form-input' placeholder="enter your email" />
                <Button size='default' style={{ paddingLeft: '5%', paddingRight: '5%' }} shape="round" className='actionBtn shadow'>start</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer p5' >
        <div className='container'>
          <hr />
          <div className="pv10">
            <Row gutter={16}>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <div className="gutter-box">
                  <span className='d-block mb10 foot_ser homeBtn f21'>
                  agency
              <sup><img src={sup} alt='' /></sup>
                </span>
                  <p className='md-w-90 f17 foot_deet'>
                    A design agency shaping ideas into products.
We help startups and enterprises invent, build and launch
their next project.
                      </p>
                </div>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <div className="gutter-box">
                  <span className='d-block mb10 f21 foot_ser'>Services</span>
                  <div className='md-w-90 f17'>
                    <ul style={{ listStyle: 'none' }} className='foot_deet'>
                      <li className='mb3'><a href='/'>Web Design</a></li>
                      <li className='mb3'> <a href='/'>App Design</a></li>
                      <li className='mb3'><a href='/'>Photography</a></li>
                      <li className='mb3'><a href='/'>Videography</a></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row clear-both md-clear-none" xs={24} sm={12} md={12} lg={6}>
                <div className="gutter-box">
                  <span className='d-block mb10 f21 foot_ser'>Support</span>
                  <div className='md-w-90 f17'>
                    <ul style={{ listStyle: 'none' }} className='foot_deet'>
                      <li className='mb3'> <a href='/'>Get Support</a></li>
                      <li className='mb3'><a href='/'>Contact</a></li>
                      <li className='mb3'><a href='/'>My Blog</a></li>
                      <li className='mb3'><a href='/'>Privacy Policy</a></li>
                      <li className='mb3'><a href='/'>Pricing</a></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <div className="gutter-box">
                  <span className='d-block mb10 f21 foot_ser'>Social</span>
                  <div className='md-w-90 f17'>
                  <div className='d-flex m-auto opacity-dot5 justify-space-between'>
                      <a href='/'>
                      <FaFacebookF color='#502EFF' fontSize='30px'/>
                      </a>
                    <a href='/'> 
                    <IoLogoTwitter color='#502EFF' fontSize='30px'/></a>
                     <a href='/'>
                     <IoLogoDribbble color='#502EFF' fontSize='30px'/>
                     </a>
                     <a href='/'>
                     <FaLinkedinIn color='#502EFF' fontSize='30px'/>
                     </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <hr />

          <div className='d-flex mt5 align-center justify-content-center'>
            <FaCopyright color='#502EFF'/>
            <p style={{marginLeft: '1%', color: '#502EFF'}}> frontendtest | All rights reserved 2020</p>
          </div>
        </div>
      </footer>
      </section>
    </Fragment>
  );
}

export default App;
