import Button from '../Button';
import RegisterInput from './RegisterInput';

const RegisterForm = () => {
  return (
    <form className='rounded-lg max-w-lg lg:max-w-2xl m-auto space-y-10 text-gray-100 p-4 bg-white/10 backdrop-blur-sm'>
      <div className='space-y-8'>
        <RegisterInput detailInfo='이름' htmlFor='name' label='이름' />

        <fieldset>
          <legend className='mb-2'>성별</legend>
          <div className='flex items-center space-x-4'>
            <label htmlFor='man' className=''>
              <input
                type='radio'
                name='gender'
                value='man'
                className='appearance-none w-3 h-3 text-blue-600 bg-gray-100  focus:bg-teal-500 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-teal-700'
              />
              남
            </label>

            <label htmlFor='woman'>
              <input
                type='radio'
                name='gender'
                value='woman'
                className='appearance-none w-3 h-3 text-blue-600 bg-gray-100  focus:bg-teal-400 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-teal-700'
              />
              여
            </label>
          </div>
        </fieldset>

        <RegisterInput detailInfo='주민번호' htmlFor='ssn' label='주민번호' />
        <RegisterInput detailInfo='휴대폰' htmlFor='phone' label='핸드폰' />
        <RegisterInput detailInfo='아이디' htmlFor='id' label='아이디' />
        <RegisterInput
          detailInfo='비밀번호'
          htmlFor='password'
          label='비밀번호'
        />
        <RegisterInput detailInfo='사는곳' htmlFor='address1' label='사는곳' />
        <RegisterInput
          detailInfo='상세주소'
          htmlFor='address2'
          label='상세주소'
        />
        <RegisterInput detailInfo='이메일' htmlFor='email' label='이메일' />
        <RegisterInput
          detailInfo='직업코드'
          htmlFor='job_key'
          label='직업코드'
        />
        <RegisterInput detailInfo='직업명' htmlFor='job' label='직업명' />
      </div>
      <div className='w-full flex justify-center items-center'>
        <Button title='신청서 제출' />
      </div>
    </form>
  );
};
export default RegisterForm;
