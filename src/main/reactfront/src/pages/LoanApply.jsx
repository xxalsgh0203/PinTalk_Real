const LoanApply = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/02/21/22/hands-1947915__480.jpg')`,
      }}
      className='w-full h-[150vh] bg-cover bg-center relative before:absolute before:-inset-1 before:bg-black before:opacity-90 bg-no-repeat '
    >
      <div className='absolute w-full h-full box-border px-4'>
        <div className='flex flex-col items-center my-20 justify-center space-y-4 '>
          <h1 className='font-bold text-2xl lg:text-3xl text-white'>
            대출 신청서 작성
          </h1>
          <p className='lg:text-lg md:text-sm text-xs text-gray-200 mb-10'>
            대출 신청서를 제출하시면
            <span className='text-teal-300 font-bold mx-1'>PINTALK</span>
            에서 확인 후 빠른 시간 내에 연락드리겠습니다.
          </p>
        </div>

        <form className='rounded-lg max-w-lg lg:max-w-2xl m-auto space-y-10 text-gray-100 p-4 bg-white/10 backdrop-blur-sm'>
          <div className='space-y-8'>
            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                이름
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

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

            <div className='space-y-2'>
              <label className='flex' htmlFor=''>
                주민번호
              </label>
              <div className='flex items-center space-x-4'>
                <input
                  type='text'
                  className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
                />
                <span>-</span>
                <input
                  type='text'
                  className='bg-transparent border-gray-500 rounded-md w-[50%] p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='flex' htmlFor=''>
                휴대폰
              </label>
              <div className='flex items-center space-x-4'>
                <select
                  name='010'
                  id=''
                  className='bg-transparent p-1 outline-none'
                >
                  <option value='010'>010</option>
                  <option value='011'>011</option>
                  <option value='016'>016</option>
                </select>
                <input
                  type='text'
                  className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[30%]'
                />
                <span>-</span>
                <input
                  type='text'
                  className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[30%]'
                />
              </div>
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                아이디
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                비밀번호
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                사는곳
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                상세주소
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                이메일
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                작업코드
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='' htmlFor=''>
                직업명
              </label>
              <input
                type='text'
                className='bg-transparent border-gray-500 rounded-md w-full p-1 px-3 outline-none border-2 transition-all focus:border-teal-600'
              />
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <button className='text-white py-2 px-6 rounded-lg bg-teal-700 hover:bg-teal-500 transition-colors text-lg'>
              신청서 제출
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoanApply;
