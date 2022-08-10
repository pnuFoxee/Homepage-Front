import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Marquee from 'react-fast-marquee';

//local
import memberImage from 'assets/img/memberCircle.svg';

const Content = ({ memberList }) => {
  const handleErrorImg = (e) => {
    e.target.src = memberImage;
  }; // 회원의 이미지가 없을때 보여줄 프로필사진
  return (
    <div className=" w-fit bg-slate-50 border-gray-500 border-2 rounded-b-md rounded-tr-md">
      {/* 사람 체크 리스트  */}
      <div className="h-6 w-full bg-gray-500"></div>
      <div className="w-fit p-2">
        <div className="grid grid-cols-4 gap-2 m-2">
          {memberList?.map((member, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center bg-white rounded-lg px-2"
            >
              <img
                src={member.thumbnailPath ? member.thumbnailPath : memberImage}
                alt="profile"
                onError={handleErrorImg}
                className="hidden md:block w-10 rounded-md object-center object-cover group-hover:opacity-75"
              />
              <div className="flex flex-col p-2 text-left">
                <div className="text-sm md:text-lg font-medium truncate w-16 md:w-20 lg:w-28">
                  {member.nickName.length > 10 ? (
                    <Marquee gradient={false} speed={10} className="text-black">
                      {member.nickName}
                    </Marquee>
                  ) : (
                    member.nickName
                  )}
                </div>
                <div className="text-xs md:text-sm ">
                  {`Keeper ${
                    member.generation === null ? '?' : member.generation
                  }기`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { member: state.member };
};

export default connect(mapStateToProps)(Content);
