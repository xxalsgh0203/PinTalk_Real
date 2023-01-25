import Layout from '../components/layout/Layout';
import logo from '../asset/pinbank_icon.png';
import { AiOutlineDown } from 'react-icons/ai';
import { useRef } from 'react';

const bgUrl =
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwZ3JvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60';

const Home = () => {
  const nextSectionRef = useRef();

  const handleNextSection = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <Layout home>
      <section className="relative min-h-screen">
        <header className="">
          <div className="z-10 absolute w-full h-full top-52 flex flex-col items-center space-y-12">
            <h1 className="text-5xl font-extrabold text-black tracking-widest">금융을 내편으로</h1>
            <div className="flex items-end">
              <img className="w-16 h-16" src={logo} alt="logo" />
              <div className="flex items-center text-black text-2xl font-extrabold">
                <span className="uppercase mr-1">intalk</span>
                <span>에서 쉽고 간편하게</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 z-10 w-full flex items-center justify-center animate-[homeBounce_1s_ease-in-out_infinite]">
            <span onClick={handleNextSection} className="cursor-pointer">
              <AiOutlineDown size={60} />
            </span>
          </div>

          <div className="h-screen">
            <img src={bgUrl} className="object-cover w-full h-full" alt="bg" />
          </div>
          <div className="absolute w-full h-full bg-white bg-gradient-to-t from-amber-50 opacity-70 top-0" />
        </header>
      </section>

      <section ref={nextSectionRef} className="h-screen">
        <div className="flex justify-center items-center h-full">
          <span className="cursor-pointer">next section</span>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
