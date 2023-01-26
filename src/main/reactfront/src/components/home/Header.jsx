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
      <div className="flex justify-center items-center pl-1 py-96 sm:py-60 xl:py-52">
        <div className="w-full sm:w-[50%] h-full space-y-8 flex flex-col items-center">
          <h1 className="text-5xl xl:text-7xl font-extrabold text-black xl:tracking-widest">
            금융을 내편으로
          </h1>
          <div className="flex items-end">
            <img className="w-12 xl:w-16" src={logo} alt="logo" />
            <div className="flex items-center text-black text-2xl  sm:text-xl xl:text-4xl font-extrabold">
              <span className="uppercase mr-1">intalk</span>
              <span>에서 쉽고 간편하게</span>
            </div>
          </div>
        </div>

        {smallSize ? null : (
          <div className="w-[50%]">
            <img className="h-[270px] md:h-[320px] xl:h-[400px]" src={mainUrl} alt="icon" />
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
