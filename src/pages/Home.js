import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => (
  <>
    <Header />
    <Link to="/pokedex/">Pokedex</Link>
  </>
);

export default Home;
