import React, { FC } from 'react';
import HomeList from '../../components/HomeList';
import './index.less';

const styleHomeContent = {
  padding: '20px 0'
}

const Home: FC = () => (
  <div style={styleHomeContent}>
    <div className="home-banner"></div>
    <HomeList category={'热门'}></HomeList>
    <HomeList></HomeList>
  </div>
);

export default Home;
