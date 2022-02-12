import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, ViewGridIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

// local
import HeaderPopDown from './HeaderPopDown';
import Logo from 'assets/img/keeper_logo.png';
import DarkModeSwitch from 'shared/DarkModeSwitch';

const categories = [
  {
    id: 1,
    name: 'KEEPER',
    subs: [
      {
        id: 7,
        name: '동아리 소개',
        href: 'about',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 8,
        name: '이벤트',
        href: 'event',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 9,
        name: '동아리 일정',
        href: 'schedule',
        description: '',
        icon: ViewGridIcon,
      },
    ],
  },
  {
    id: 2,
    name: '게시판',
    subs: [
      {
        id: 10,
        name: '공지사항',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 11,
        name: '건의사항',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 12,
        name: '자유게시판',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 13,
        name: '익명게시판',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 14,
        name: '연재글',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
    ],
  },
  {
    id: 3,
    name: '동아리활동',
    subs: [
      {
        id: 15,
        name: '발표자료',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 16,
        name: '스터디',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 17,
        name: '기술문서',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 18,
        name: '회계부',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 19,
        name: 'KUCIS',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
    ],
  },
  {
    id: 4,
    name: '정보',
    subs: [
      {
        id: 20,
        name: '해킹대회정보',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 21,
        name: '유용한사이트',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 22,
        name: 'Tools',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 23,
        name: '외부문서&강의',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 24,
        name: '취업&면접',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 25,
        name: '시험',
        href: 'board',
        description: '',
        icon: ViewGridIcon,
      },
    ],
  },
  {
    id: 5,
    name: '서비스',
    subs: [
      {
        id: 26,
        name: '도서 신청',
        href: 'library',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 27,
        name: '기자재 신청',
        href: 'library',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 28,
        name: '도서 대여',
        href: 'library',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 29,
        name: '기자재 대여',
        href: 'library',
        description: '',
        icon: ViewGridIcon,
      },
    ],
  },
  {
    id: 6,
    name: '포인트',
    subs: [
      {
        id: 30,
        name: '랭킹',
        href: 'attandance',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 31,
        name: '출석부',
        href: 'attandance',
        description: '',
        icon: ViewGridIcon,
      },
      {
        id: 32,
        name: '게임',
        href: 'game',
        description: '',
        icon: ViewGridIcon,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <>
      <Popover className="relative bg-mainWhite dark:bg-mainBlack z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-darkComponent py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-mainYellow rounded-md p-2 inline-flex items-center justify-center text-mainWhite hover:text-mainYellow hover:bg-pointYellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-divisionGray">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {categories.map((category, index) => (
                <HeaderPopDown key={index} category={category} />
              ))}
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="signin"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainYellow hover:bg-pointYellow"
              >
                Sign in
              </Link>
              <Link
                to="signup"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainYellow hover:bg-pointYellow"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-mainYellow ring-opacity-5 bg-mainWhite divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-mainYellow rounded-md p-2 inline-flex items-center justify-center text-mainWHite hover:text-mainYellow hover:bg-pointYellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-divisionGray">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {categories.map((item, index) => (
                      <Link
                        key={index}
                        to={item.subs[0].href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <ViewGridIcon
                          className="flex-shrink-0 h-6 w-6 text-mainYellow"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-semibold text-mainYellow">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
                <div>
                  <Link
                    to="signup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainYellow hover:bg-pointYellow"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-mainBlack">
                    Existing customer?{' '}
                    <Link
                      to="signin"
                      className="text-base text-mainYellow hover:text-pointYellow"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="absolute right-1 z-20">
        <DarkModeSwitch />
      </div>
    </>
  );
}
