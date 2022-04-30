import React from 'react';
import About from '../../component/About'
import Time from '../../component/Time'
import Social from '../../component/Social/social.jsx'
function HomePage(props) {
  return (
    <div>
      <Time />
      <About />
      <Social />
    </div>
  );
}

export default HomePage;