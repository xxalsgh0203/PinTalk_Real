import Layout from '../components/layout/Layout';
import logo from '../asset/pinbank_icon.png';
import useWindowSize from '../hooks/useWindowSize';
import { BiTransferAlt } from 'react-icons/bi';
import { AiOutlineAccountBook } from 'react-icons/ai';

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

const Home = () => {
  const { smallSize } = useWindowSize();
  return (
    <Layout home>
      <section className="relative h-[52rem]">
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
              <div
                key={item.id}
                className="h-full w-60 rounded-lg relative cursor-pointer shadow-lg hover:opacity-60 transition-all"
              >
                <div className="z-10 w-full absolute flex flex-col items-center justify-center h-full space-y-4">
                  <div className="">
                    {item.title === '전체계좌조회' ? (
                      <div className="text-teal-600">
                        <AiOutlineAccountBook size={40} />
                      </div>
                    ) : (
                      <div className="text-orange-600">
                        <BiTransferAlt size={40} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h1 className="text-black font-bold text-xl">{item.title}</h1>
                  </div>
                </div>
                <div className="rounded-lg absolute w-full h-full bg-white bg-gradient-to-t from-amber-400 opacity-70 bottom-0 hover:opacity-20 transition-all" />
              </div>
            ))}
          </div>

          <div className="-z-10 absolute w-full h-full bg-white bg-gradient-to-t from-amber-50 opacity-70 top-0" />
        </header>
      </section>

      <section className=""></section>
    </Layout>
  );
};
export default Home;
