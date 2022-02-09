import React from 'react';
import { useState } from 'react';

const Roulette = () => {
  const [ani, setAni] = useState('animate-none');
  const onClick = () => {
    console.log('click');
    setAni('animate-spin');
    setTimeout(function () {
      setAni('animate-none');
    }, 3000);
  };

  return (
    <div className="border border-divisionGray items-center m-10">
      <div className="m-0 p-0 bg-slate-600 flex items-center justify-center overflow-hidden">
        <div
          className={`${ani} w-52 h-52 bg-slate-100 border-solid border-8 rounded-full relative overflow-hidden`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="w-0 h-0 border-t-green-600 border-t-[15px] border-r-transparent border-r-[5px] border-l-transparent border-l-[5px]"></div>
          </div>

          <button
            onClick={onClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-cyan-300 uppercase border-8 border-solid border-cyan-600 font-bold text-gray-500 w-20 h-20 rounded-full cursor-pointer outline-none"
          >
            Spin
          </button>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-red-600 h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-1/2`}
          >
            1
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-orange-600 rotate-[45deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            2
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-yellow-600 rotate-[90deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            3
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-green-600 rotate-[135deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            4
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-blue-600 rotate-[180deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            5
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-purple-600 rotate-[225deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            6
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-gray-600 rotate-[270deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            7
          </div>
          <div
            className={`[clip-path:polygon(100%_0,_50%_100%,_0_0)] bg-slate-100 rotate-[315deg] h-1/2 w-1/2 absolute -translate-x-1/2 origin-bottom text-center flex items-center justify-center text-xl font-bold left-24`}
          >
            8
          </div>
        </div>
      </div>
    </div>
  );
};

const RuleOfRoulette = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-3/5 my-5 p-5 border-2 border-divisionGray">
        게임 규칙
        <br />
        매일 3번까지 구매 가능합니다.
        <br />
        start 버튼을 눌려 주사위를 굴립니다.
        <br />
        수령을 클릭하면 당첨 포인트가 수령됩니다.
      </div>
    </div>
  );
};

export { Roulette, RuleOfRoulette };
