// PageRenderer.js
import React from 'react';
import ContactUs from './View/ContactUs';
import Portfolio from './View/Portfolio';

function PageRenderer({ to }) {
  // Check the value of "to" prop and render the appropriate component
  switch (to) {
    case '/contactus':
      return <ContactUs />;
    case '/portfolio':
      return <Portfolio />;
    default:
      return null;
  }
}

export default PageRenderer;
