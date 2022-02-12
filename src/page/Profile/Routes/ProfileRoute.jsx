import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditProfile from '../EditProfile';
import Profile from '../Profile';
import MyPageRoute from './MyPageRoute';

const ProfileRoute = () => {
  return (
    <Routes>
      <Route exact path="" element={<Profile />} />
      <Route exact path="edit" element={<EditProfile />} />
      <Route exact path="mypage/*" element={<MyPageRoute />} />
    </Routes>
  );
};

export default ProfileRoute;
