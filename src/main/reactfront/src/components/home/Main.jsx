import Header from '../home/Header';
import { BsChevronCompactDown } from 'react-icons/bs';
import { useRef } from 'react';

const Main = () => {
  const nextSectionRef = useRef(null);
  const handleNextSection = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div>
      <header className="min-h-screen">
        <Header />
        <div className="absolute bottom-20 w-full flex justify-center items-center animate-bounce text-gray-500 hover:text-gray-300 transition-all xl:bottom-6">
          <span onClick={handleNextSection} className="cursor-pointer">
            <BsChevronCompactDown size={50} />
          </span>
        </div>
      </header>

      <section ref={nextSectionRef} className="min-h-screen">
        <div>next section</div>
      </section>
    </div>
  );
};
export default Main;
