import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/02/21/22/hands-1947915__480.jpg')`,
      }}
      className='w-full min-h-screen bg-cover bg-center relative before:absolute before:content-[" "]  before:w-full before:h-full before:bg-black before:opacity-90 bg-no-repeat'
    >
      <div className='absolute w-full h-full box-border px-4'>
        <div className='flex flex-col items-center my-10 justify-center space-y-4 '>
          <h1 className='font-bold text-2xl lg:text-3xl text-white'>
            대출 신청서 작성
          </h1>
          <p className='md:text-lg sm:text-sm text-xs text-gray-200 mb-10'>
            대출 신청서를 제출하시면
            <span className='text-teal-300 font-bold mx-1'>PINTALK</span>
            에서 확인 후 빠른 시간 내에 연락드리겠습니다.
          </p>
        </div>
      </div>
      <div className='pt-44 pb-6'>
        <RegisterForm />
      </div>
    </div>
  );
};
export default Register;
