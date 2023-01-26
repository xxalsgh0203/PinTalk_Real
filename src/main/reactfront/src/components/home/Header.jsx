import logo from '../../asset/pinbank_icon.png';

import useWindowSize from '../../hooks/useWindowSize';
import SubNavbar from './SubNavbar';

const mainUrl = 'https://ifh.cc/g/SwrsvO.png';

const subNavbar = [
  {
    title: '전체계좌조회',
    id: 'allAccount',
  },
  {
    title: '계좌이체',
    id: 'transfer',
  },
];

const Header = () => {
  const { smallSize } = useWindowSize();
  return (
    <header className="h-full">
      <div className="flex justify-center items-center pl-1 py-96 sm:py-44">
        <div className="w-full sm:w-[50%] h-full space-y-8 flex flex-col items-center">
          <h1 className="text-5xl sm:text-4xl xl:text-5xl font-extrabold text-black tracking-widest">
            금융을 내편으로
          </h1>
          <div className="flex items-end">
            <img className="w-8 md:w-10 xl:w-14" src={logo} alt="logo" />
            <div className="flex items-center text-black text-2xl  sm:text-xl xl:text-2xl font-extrabold">
              <span className="uppercase mr-1">intalk</span>
              <span>에서 쉽고 간편하게</span>
            </div>
          </div>
        </div>

        {smallSize ? null : (
          <div className="w-[50%]">
            <img className="h-[400px]" src={mainUrl} alt="icon" />
          </div>
        )}
      </div>

      <div className="absolute w-full h-48 -bottom-[96px] flex items-center  justify-evenly px-10 space-x-10">
        {subNavbar.map((item) => (
          <SubNavbar key={item.id} {...item} />
        ))}
      </div>

      <div className="-z-10 absolute w-full h-full bg-white bg-gradient-to-t from-amber-50 opacity-70 top-0" />
    </header>
  );
};
export default Header;
