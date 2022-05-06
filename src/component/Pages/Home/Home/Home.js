import React from 'react';
import Banner from '../Banner/Banner';
import Inventorys from '../Inventorys/Inventorys';
import News from '../News/News';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventorys></Inventorys>
      <News></News>
      <Contact></Contact>
    </div>
  );
};

export default Home;