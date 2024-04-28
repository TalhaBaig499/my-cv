import React, { Component } from 'react';


export class ContactUs extends Component {
  render() {
    return (
      <div className='bg-white px-md-5 pt-md-4 pb-md-5 rounded p-4 ContactUs'>
        <h2 className='pagetitle'>Contact</h2> <span></span>
        <form className='mt-3 p-md-5 p-4' method='post'>
          <p className='tagline'>
            I'm Always Open To Discussing Produuct
          </p>
          <h2>
            design work or partnerships.
          </h2>
          <div className='my-5'>
            <p className='my-0'>
              <label htmlFor="name">Name</label>
            </p>
            <input type='text' name='name' id='name' />
          </div>
          <div className='my-5'>
            <p className='my-0'>
              <label htmlFor="email">Email</label>
            </p>
            <input type='text' email='email' id='name'  />
          </div>
          <div className='my-5'>
            <p className='my-0'>
              <label htmlFor="text">Message</label>
            </p>
            <textarea cols='50' rows='10' ></textarea>
          </div>
          <div className='my-5'>
            <button className='btn1 py-2 px-5' name='submit' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactUs
