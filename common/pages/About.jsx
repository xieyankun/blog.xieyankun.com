import React from 'react';
import Aside from '../components/Aside';

const About = () => (
  <div>
    <main className="col-md-9">
      <h1>关于我</h1>
    </main>
    <Aside categories arch tags social />
  </div>
);

export default About;
