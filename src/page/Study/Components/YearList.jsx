import React from 'react';
import { useParams } from 'react-router-dom';
import { PlusSmIcon, PaperClipIcon, CogIcon } from '@heroicons/react/solid';
//local
import { years } from 'page/Study/testData';

const YearList = ({ currentYear, setCurrentYear, setCurrentSeason }) => {
  console.log(years);
  return (
    <div
      name="좌측 사이드바"
      className="border w-[20vw] rounded-lg p-3 py-5 bg-gray-50 hidden md:block"
    >
      <button
        type="button"
        className="inline-flex items-center text-mainYellow shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
      >
        <PlusSmIcon className="-ml-1.5 mr-1 h-5 w-5 " aria-hidden="true" />
        <span>
          <strong>Add</strong>
        </span>
      </button>
      {years?.map((object, index) => (
        <button
          key={index}
          className={
            (currentYear == object.year
              ? 'bg-mainYellow '
              : 'bg-mainWhite hover:bg-yellow-200') +
            ' border border-mainYellow w-full p-2  my-1'
          }
          onClick={() => {
            setCurrentYear(object.year);
            setCurrentSeason(1);
          }}
        >
          {object.year}년
        </button>
      ))}
    </div>
  );
};

export default YearList;
