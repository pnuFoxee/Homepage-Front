import React, { useState } from 'react';
import { connect } from 'react-redux';

import './style/height.css';
import './style/drag.css';
import FirstPage from './Component/FirstPage';
import SecondPage from './Component/SecondPage';
import { useEffect } from 'react';

import homeAPI from 'API/v1/home';

const Home = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    homeAPI.getTrends().then((data) => {
      console.log(data);
    });
  }, []);

  const goToFirst = () => {
    setVisible(true);
  };
  const goToSecond = () => {
    setVisible(false);
  };

  return (
    <div className="drag-false bg-mainWhite dark:bg-mainBlack text-mainBlack dark:text-mainWhite overflow-x-hidden">
      {visible && <FirstPage goToSecond={goToSecond} />}
      <SecondPage goToFirst={goToFirst} visibleArrow={visible} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Home);
