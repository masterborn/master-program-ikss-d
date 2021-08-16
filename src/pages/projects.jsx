import React from 'react';

import Navbar from '@components/Navbar/Navbar';

const projects = () => (
  <div>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />
    projects
  </div>
);

export default projects;
