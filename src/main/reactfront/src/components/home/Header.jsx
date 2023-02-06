import logo from '../../asset/pinbank_icon.png';

import useWindowSize from '../../hooks/useWindowSize';
import SubNavbar from './SubNavbar';

const mainUrl = 'https://ifh.cc/g/SwrsvO.png';

const subNavbar = [
  {
    title: '계좌조회',
    id: 'allAccount',
  },
  {
    title: '계좌이체',
    id: 'transfer',
  },
  {
    title: '이체내역',
    id: 'transferList',
  },
];

const Header = () => {
  const { smallSize } = useWindowSize();
  return (
    <div className="animate-fade">
      <div className="flex justify-center items-center pl-1 py-20">
        <div className="w-full sm:w-[50%] h-full space-y-8 flex flex-col items-center">
          <h1 className="text-5xl xl:text-7xl font-extrabold text-black xl:tracking-widest animate-fadeEffect">
            금융을 내편으로
          </h1>
          <div className="flex items-end animate-slowFadeEffect">
            <img className="w-12 xl:w-16" src={logo} alt="logo" />
            <div className="flex items-center text-black text-2xl  sm:text-xl xl:text-4xl font-extrabold">
              <span className="uppercase mr-1">intalk</span>
              <span>에서 쉽고 간편하게</span>
            </div>
          </div>
        </div>

        {smallSize ? null : (
          <div className="lg:w-[30%]">
            <img className="h-[270px] md:h-[320px] xl:h-[400px]" src={mainUrl} alt="icon" />
          </div>
        )}
      </div>

      <div className="absolute w-full h-48 flex items-center  justify-evenly px-10 space-x-10">
        {subNavbar.map((item, index) => (
          <SubNavbar key={item.id} {...item} index={index} />
        ))}
      </div>

      <div className="-z-10 absolute w-full h-full bg-white bg-gradient-to-t from-amber-50 opacity-70 top-0 min-h-screen" />
    </div>
  );
};
export default Header;
