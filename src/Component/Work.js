import React, { Component } from 'react';

export class Work extends Component {  
    render(){
        return(
            <div className='bg-white px-md-5 pt-md-4 pb-md-5 rounded p-4 ContactUs'>
                <h2 className='pagetitle'>Portfolio</h2> <span></span>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='bg-white'>
                            <div className='imge'>
                                <img src='download.webp'width={288} height={260}/>
                            </div>
                            <div className='imge mt-3'>
                                <img src='time.jpg'width={288} height={280}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='imge2'>
                            <img src='calories.jpg'width={288} height={260}/>
                        </div>
                        <div className='imge2 mt-3'>
                            <img src='concrete.jpg'width={288} height={260}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

export default Work