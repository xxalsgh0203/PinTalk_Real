import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Loan = () => {
  return (
    <Layout title='대출'>
      <header
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/02/21/22/hands-1947915__480.jpg')`,
        }}
        className='w-full h-[100vh] bg-cover bg-center relative before:absolute before:-inset-1 before:bg-black before:opacity-80 bg-no-repeat'
      >
        <div className='absolute w-full h-full text-white flex justify-center items-center flex-col'>
          <h1 className='uppercase font-bold text-4xl mb-4'>pintalk 대출</h1>
          <h3 className='text-xl text-gray-200 mb-10'>
            가치에 금융을 더 합니다.
          </h3>
          <div className='text-gray-400 flex items-center'>
            <span className='text-teal-500 font-bold uppercase'>pintalk</span>
            <p className=''>
              에 직접 투자하고, 대출이자는 적절한 현금과 가게의 상품(현물)으로
              받음으로써 금리를 낮추고, 단골고객은 늘립니다.
            </p>
          </div>
          <Link to='/loan/apply' target='_blank'>
            <button className='mt-20 rounded-lg relative flex justify-center items-center overflow-hidden before:absolute before:translate-y-[100%] hover:before:bg-pink-600 before:w-full before:h-full hover:before:translate-y-0 before:transition-transform before:duration-500 px-4 before:px-4 py-1'>
              <span className='block text-white uppercase z-20'>
                pintalk 대출 신청
              </span>
            </button>
          </Link>
        </div>
      </header>

      <section></section>
    </Layout>
  );
};
export default Loan;
