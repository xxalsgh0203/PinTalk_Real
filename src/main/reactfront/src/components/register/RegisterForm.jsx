import Button from '../Button';
import RegisterInput from './RegisterInput';
import { useForm } from 'react-hook-form';
import cls from '../../utils/cls';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onValid = (data) => {
    return {
      email: data.frontEmail + '@' + data.backEmail,
      address1: data.address1,
      address2: data.address2,
      gender: data.gender,
      id: data.id,
      job: data.job,
      job_key: data.job_key,
      name: data.name,
      password: data.password,
      phone1: data.phone1,
      phone2: data.phone2,
      phone3: data.phone3,
      ssn1: data.ssn1,
      ssn2: data.ssn2,
    };
  };

  const numberValid = (e, name) => {
    if (e.target.value.toString().length > 6) return;
    isBlank(e.target.value, name);
    return (e.target.value = e.target.value.replace(/\D/g, ''));
  };

  const englishWithNumberValid = (e, name) => {
    isBlank(e.target.value, name);
    return (e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, ''));
  };

  const checkPassword = (e) => {
    const currentPassword = e.target.value;
    const checkSpecialString =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    const isIncludeRegx = checkSpecialString.test(currentPassword);
    if (!isIncludeRegx) {
      setError('password', { message: '숫자,영문,특수문자를 포함해주세요.' });
    }
    if (currentPassword.length > 20) {
      setError('password', { message: '비밀 번호는 20자 이내로 작성해주세요' });
    }
    isBlank(currentPassword, 'password');
  };

  const isBlank = (value, name) => {
    const checkBlank = /\s/g;
    if (value.match(checkBlank)) {
      setError(name, { message: '빈공간은 허용되지 않습니다.' });
    }
  };

  console.log('error', errors.password.message);

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className='rounded-lg max-w-lg lg:max-w-2xl m-auto space-y-10 text-gray-100 p-4 bg-white/10 backdrop-blur-sm'
    >
      <div className='space-y-8'>
        <RegisterInput
          register={register('name', {
            required: '이름을 입력해 주세요.',
            onChange: (e) => isBlank(e.target.value, 'name'),
          })}
          htmlFor='name'
          label='이름'
        />

        <div>
          <span className='block mb-2'>성별</span>
          <div className='flex items-center space-x-4'>
            <label htmlFor='M'>
              <input
                type='radio'
                value='M'
                {...register('gender')}
                checked={watch('gender') === 'M'}
                className={cls(
                  'appearance-none w-3 h-3 text-blue-600 bg-gray-100  focus:bg-teal-400 rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-teal-700',
                  watch('gender') === 'M' ? 'bg-teal-400' : ''
                )}
              />
              남
            </label>

            <label htmlFor='G'>
              <input
                type='radio'
                value='G'
                checked={watch('gender') === 'G'}
                {...register('gender')}
                className={cls(
                  'appearance-none w-3 h-3 text-blue-600 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-teal-700',
                  watch('gender') === 'G' ? 'bg-teal-400' : ''
                )}
              />
              여
            </label>
          </div>
        </div>

        <div className='space-y-2'>
          <label className='flex' htmlFor='ssn'>
            주민번호
          </label>
          <div className='flex items-center space-x-4'>
            <input
              {...register('ssn1', {
                required: '주민번호를 입력해주세요',
                maxLength: {
                  value: 6,
                  message: '6자리까지 입력해주세요.',
                },
                minLength: {
                  value: '6',
                  message: '6자리를 입력해주세요.',
                },
                onChange: (e) => numberValid(e, 'ssn1'),
              })}
              type='text'
              maxLength={6}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
            />
            <span>-</span>
            <input
              {...register('ssn2', {
                required: '주민번호를 입력해주세요',
                maxLength: {
                  value: 7,
                  message: '6자리까지 입력해주세요.',
                },
                minLength: {
                  value: '7',
                  message: '7자리를 입력해주세요.',
                },
                onChange: (e) => numberValid(e, 'phone', 'ssn22'),
              })}
              type='text'
              maxLength={7}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
            />
          </div>
        </div>

        <div className='space-y-2,"phone3"'>
          <label className='flex'>핸드폰 번호</label>
          <div className='flex items-center space-x-4'>
            <select
              {...register('phone1')}
              className='bg-transparent p-1 outline-none'
            >
              <option value='010'>010</option>
              <option value='011'>011</option>
              <option value='012'>012</option>
              <option value='013'>013</option>
              <option value='014'>014</option>
              <option value='015'>015</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
              <option value='019'>019</option>
            </select>
            <input
              {...register('phone2', {
                onChange: (e) => numberValid(e, 'phone2'),
              })}
              type='text'
              maxLength={4}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
            />
            <span>-</span>
            <input
              {...register('phone3', {
                onChange: (e) => numberValid(e, 'phone3'),
              })}
              type='text'
              maxLength={4}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
            />
          </div>
        </div>
        <RegisterInput
          register={register('id', {
            required: '아이디를 입력해주세요.',
            onChange: (e) => englishWithNumberValid(e, 'id'),
          })}
          htmlFor='id'
          label='아이디'
        />
        <RegisterInput
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            onChange: (e) => checkPassword(e),
          })}
          type='password'
          htmlFor='password'
          label='비밀번호'
        />
        <RegisterInput
          register={register('address1')}
          htmlFor='address1'
          label='사는곳'
        />
        <RegisterInput
          register={register('address2')}
          htmlFor='address2'
          label='상세주소'
        />

        <div className='space-y-2'>
          <label className='flex' htmlFor='email'>
            이메일
          </label>
          <div className='flex items-center space-x-4'>
            <input
              {...register('frontEmail', {
                onChange: (e) => englishWithNumberValid(e, 'email'),
              })}
              maxLength={15}
              type='text'
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%]'
            />
            <span>@</span>
            <select
              {...register('backEmail')}
              className='bg-transparent py-1 px-2 outline-none w-[30%]'
            >
              <option value='naver'>naver</option>
              <option value='nate'>nate</option>
              <option value='gmail'>gmail</option>
              <option value='daum'>daum</option>
            </select>
          </div>
        </div>

        <RegisterInput
          register={register('job_key', {
            onChange: (e) => numberValid(e, 'job_key'),
            minLength: {
              value: 4,
              message: '4자리 이상 숫자로 입력해주세요.',
            },
          })}
          htmlFor='job_key'
          label='직업코드'
          maxLength={4}
        />
        <RegisterInput
          register={register('job', {
            onChange: (e) => numberValid(e, 'job'),
          })}
          htmlFor='job'
          label='직업명'
          maxLength={6}
        />
      </div>
      <div className='w-full flex justify-center items-center'>
        <Button title='신청서 제출' />
      </div>
    </form>
  );
};
export default RegisterForm;
