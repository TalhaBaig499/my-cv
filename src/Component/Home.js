import React, { Component } from 'react';
import talhaImage from '../images/talha.jpg';
import Portfolio from './Work.js';
import ContactUs from './ContactUs.js';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            
            <div className='bg-white rounded pt-4 pb-2 px-2'>
                <div className='text-center'>
                    <img src={talhaImage} alt="MY" className='rounded' width={230} height={230} />
                </div>
                <div className='text-center'>
                    <p className='mb-0 name'>Talha Latif Baig</p>
                    <p className='bg-light mt-2 p-2 d-inline-block rounded-1'>Web Developer</p>
                </div>
                <ul className='social-media d-flex justify-content-evenly gap-2 px-0'>
                    <li>
                        <a href="https://www.facebook.com/talha.baig.9277/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 24 24">
                                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 48 48">
                                <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 24 24">
                                <path d="M21.634,4.031c-0.815,0.385-2.202,1.107-2.899,1.245c-0.027,0.007-0.049,0.016-0.075,0.023 c-0.813-0.802-1.927-1.299-3.16-1.299c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.218,0-5.568-1.679-7.327-3.837 C3.438,4.873,3.188,5.024,3.136,5.23C3.019,5.696,2.979,6.475,2.979,7.031c0,1.401,1.095,2.777,2.8,3.63 c-0.314,0.081-0.66,0.139-1.02,0.139c-0.424,0-0.912-0.111-1.339-0.335c-0.158-0.083-0.499-0.06-0.398,0.344 c0.405,1.619,2.253,2.756,3.904,3.087c-0.375,0.221-1.175,0.176-1.543,0.176c-0.136,0-0.609-0.032-0.915-0.07 c-0.279-0.034-0.708,0.038-0.349,0.582c0.771,1.167,2.515,1.9,4.016,1.928c-1.382,1.084-3.642,1.48-5.807,1.48 c-0.438-0.01-0.416,0.489-0.063,0.674C3.862,19.504,6.478,20,8.347,20C15.777,20,20,14.337,20,8.999 c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.589-0.425,1.491-1.163,1.947-1.728c0.155-0.192,0.03-0.425-0.181-0.352 c-0.543,0.189-1.482,0.555-2.07,0.625c1.177-0.779,1.759-1.457,2.259-2.21C22.109,4.168,21.895,3.907,21.634,4.031z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/talha-latif-baig-b65a35247?originalSubdomain=pk">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 32 32">
                                <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <ul className='bg-light p-4 pt-3 rounded contect mx-4'>
                    <li className='d-flex align-items-center border-bottom py-2'>
                        <div className='pe-3'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span className='text-light'>Phone</span>
                            <p className='mb-0 mt-1' ><a className='text-dark' href='tel:+923047011499'>923047011499</a></p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center border-bottom py-2'>
                        <div className='pe-3'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M21.79 9.5 12.606 2.212a1.507 1.507 0 0 0-1.212-.212L2.21 9.5c-.597.332-.975.963-.975 1.642V18.75a1.5 1.5 0 0 0 1.5 1.5h17.5a1.5 1.5 0 0 0 1.5-1.5v-7.608c0-.679-.378-1.31-.975-1.642zM12 4.268 19.732 10H4.268L12 4.268zM4.5 11.75V17.25h15V11.75l-7.5 4.5-7.5-4.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span className='text-light'>Email</span>
                            <p className='mb-0 mt-1' ><a className='text-dark' href='mailto:talhalatifbaig@gmail.com'>Talhalatifbaig@gmail.com</a></p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center border-bottom py-2'>
                        <div className='pe-3'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2c3.038 0 5.5 2.462 5.5 5.5 0 3.03-5.5 9.5-5.5 9.5s-5.5-6.47-5.5-9.5C6.5 4.462 8.962 2 12 2zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span className='text-light'>Address</span>
                            <p className='mb-0 mt-1 '>Abdullah pull, Samundari road, Faisalabad, Pakistan</p>
                        </div>
                    </li>

                    <li className='d-flex align-items-center pt-2'>
                        <div className='pe-3'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M3 8v1a1 1 0 0 1 1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10a1 1 0 0 1 1-1V8a1 1 0 0 0-1-1h-1V5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H3a1 1 0 0 0-1 1zm2 9v-6h14v6H5zm4-4h2v-2H9v2zm4 0h2v-2h-2v2z" clipRule="evenodd" />
                            </svg>

                        </div>
                        <div>
                            <span className='text-light'>Birthday</span>
                            <p className='mb-0 mt-1' >10 Jan 1999</p>
                        </div>
                    </li>
                </ul>
                <p className='text-center mt-4'>
                    <a href='' className='btn1' download bis_skin_checked="1"> download cv</a>
                </p>
            </div>    
        )
    }
}

export default Home
