import Button from '../Button';
import RegisterInput from './RegisterInput';
import { useForm } from 'react-hook-form';
import cls from '../../utils/cls';
import ValidateForm, {
  NOT_NUMBER,
  NUMBER,
  NUMBER_ENGLISH,
} from '../../utils/validateForm';
import RegisterErrorMessage from './RegisterErrorMessage';

const validateForm = new ValidateForm();
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onValid = (data) => {
    const email = data.frontEmail && data.frontEmail + '@' + data.backEmail;
    const ssn = data.ssn1 + data.ssn2;
    const phone1 = data.phone2 && data.phone3 ? data.phone1 : null;

    console.log({
      email: email || null,
      address1: data.address1 || null,
      address2: data.address2 || null,
      gender: data.gender || null,
      id: data.id,
      job: data.job || null,
      job_key: data.job_key || null,
      name: data.name || null,
      password: data.password,
      phone1,
      phone2: data.phone2 || null,
      phone3: data.phone3 || null,
      ssn,
    });
    return {
      email: email || null,
      address1: data.address1 || null,
      address2: data.address2 || null,
      gender: data.gender || null,
      id: data.id,
      job: data.job || null,
      job_key: data.job_key || null,
      name: data.name || null,
      password: data.password,
      phone1,
      phone2: data.phone2 || null,
      phone3: data.phone3 || null,
      ssn,
    };
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className='rounded-lg max-w-xl lg:max-w-2xl m-auto space-y-8 text-gray-100 p-4 bg-white/10 backdrop-blur-sm'
    >
      <div className='space-y-6 pb-2'>
        <div className='flex items-center space-x-10'>
          <div className='w-[50%]'>
            <RegisterInput
              register={register('name', {
                onChange: (e) => validateForm.inputValid(e, 'name', NOT_NUMBER),
              })}
              errorMessage={errors.name?.message}
              htmlFor='name'
              label='이름'
              maxLength={10}
            />
          </div>

          <div className='w-[50%]'>
            <span className='block mb-2 text-sm'>성별</span>
            <div className='flex items-center space-x-4'>
              <label className='text-sm' htmlFor='M'>
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
                <span className='text-sm'>남</span>
              </label>

              <label htmlFor='G'>
                <input
                  type='radio'
                  value='W'
                  checked={watch('gender') === 'W'}
                  {...register('gender')}
                  className={cls(
                    'appearance-none w-3 h-3 text-blue-600 bg-gray-100   rounded-full transition-all cursor-pointer mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-teal-700',
                    watch('gender') === 'W' ? 'bg-teal-400' : ''
                  )}
                />
                <span className='text-sm'>여</span>
              </label>
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <label className='flex text-sm' htmlFor='ssn'>
            주민번호
            {errors.ssn1?.message || errors.ssn2?.message ? (
              <RegisterErrorMessage
                errorMessage={errors.ssn1?.message || errors.ssn2?.message}
              />
            ) : (
              <span className='ml-4 text-sm text-teal-200'>
                필수정보입니다.
              </span>
            )}
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
                onChange: (e) => validateForm.inputValid(e, 'ssn1', NUMBER),
              })}
              placeholder='앞 6자리'
              type='text'
              maxLength={6}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%] placeholder:text-gray-400 placeholder:text-sm text-sm'
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
                onChange: (e) => validateForm.inputValid(e, 'ssn2', NUMBER),
              })}
              type='text'
              maxLength={7}
              placeholder='뒤 7자리'
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%] placeholder:text-gray-400 placeholder:text-sm text-sm'
            />
          </div>
        </div>

        <div className='space-y-2'>
          <label className='flex text-sm'>
            핸드폰 번호
            {(errors.phone1?.message ||
              errors.phone2?.message ||
              errors.phone3?.message) && (
              <RegisterErrorMessage
                errorMessage={
                  errors.phone1?.message ||
                  errors.phone2?.message ||
                  errors.phone3?.message
                }
              />
            )}
          </label>
          <div className='flex items-center space-x-4'>
            <select
              {...register('phone1', {
                validate: (value) => {
                  if (watch('phone2') === '' && watch('phone3') === '') return;
                  return value !== '' || '번호를 선택해주세요.';
                },
              })}
              className='bg-transparent p-1 outline-none text-sm border-2 border-gray-500 rounded-md text-yellow-400 w-[15%]'
            >
              <option value=''>선택</option>
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
                onChange: (e) => validateForm.inputValid(e, 'phone2', NUMBER),
                minLength: {
                  value: 4,
                  message: '4자리를 입력해주세요',
                },
                validate: (value) => {
                  if (watch('phone1') === '' && watch('phone3') === '') return;
                  return value !== '' || '번호를 선택해주세요.';
                },
              })}
              type='text'
              maxLength={4}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%] text-sm'
            />
            <span>-</span>
            <input
              {...register('phone3', {
                minLength: {
                  value: 4,
                  message: '4자리를 입력해주세요',
                },
                onChange: (e) => validateForm.inputValid(e, 'phone3', NUMBER),
                validate: (value) => {
                  if (watch('phone1') === '' && watch('phone2') === '') return;
                  return value !== '' || '번호를 선택해주세요.';
                },
              })}
              type='text'
              maxLength={4}
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%] text-sm'
            />
          </div>
        </div>

        <RegisterInput
          register={register('id', {
            required: '아이디를 입력해주세요.',
            onChange: (e) => {
              validateForm.notSpecialString(e);
              return validateForm.inputValid(e, 'id', NUMBER_ENGLISH);
            },
          })}
          htmlFor='id'
          label='아이디'
          necessary={true}
          errorMessage={errors.id?.message}
          maxLength={15}
        />
        <RegisterInput
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            validate: (value) => {
              const checkSpecialString =
                /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,15}$/;
              return (
                checkSpecialString.test(value) ||
                '숫자,영문,특수문자(!~@#$%^*+=-)를 포함해주세요.'
              );
            },
            minLength: {
              value: 8,
              message: '8자 이상 작성해주세요',
            },
            maxLength: {
              value: 15,
              message: '15자 이내로 작성해주세요',
            },
          })}
          necessary
          maxLength={15}
          type='password'
          htmlFor='password'
          name='password'
          label='비밀번호'
          errorMessage={errors.password?.message}
          password
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
          <label className='flex text-sm' htmlFor='email'>
            이메일
            {(errors.frontEmail?.message || errors.backEmail?.message) && (
              <RegisterErrorMessage
                errorMessage={
                  errors.frontEmail?.message || errors.backEmail?.message
                }
              />
            )}
          </label>
          <div className='flex items-center space-x-4'>
            <input
              {...register('frontEmail', {
                minLength: {
                  value: 3,
                  message: '3자리 이상 입력해주세요.',
                },
                onChange: (e) => {
                  validateForm.noSpecialString(e);
                  return validateForm.inputValid(
                    e,
                    'frontEmail',
                    NUMBER_ENGLISH
                  );
                },

                validate: (value) => {
                  if (!watch('backEmail')) return;
                  return value !== '' || '이메일을 입력해주세요.';
                },
              })}
              maxLength={15}
              type='text'
              className='bg-transparent border-gray-500 rounded-md p-1 px-3 outline-none border-2 transition-all focus:border-teal-600 w-[50%] text-sm'
            />
            <span>@</span>
            <select
              {...register('backEmail', {
                validate: (value) => {
                  if (!watch('frontEmail')) return;
                  return value !== '' || '이메일을 선택해주세요';
                },
              })}
              className='bg-transparent border-2 rounded-md px-1 border-gray-500 py-1 outline-none w-[20%] relative text-sm text-yellow-400'
            >
              <option value=''>선택</option>
              <option value='naver.com'>naver.com</option>
              <option value='nate.com'>nate.com</option>
              <option value='gmail.com'>gmail.com</option>
              <option value='daum.net'>daum.net</option>
            </select>
          </div>
        </div>

        <div className='flex items-center space-x-6'>
          <div className='w-[50%]'>
            <RegisterInput
              register={register('job_key', {
                onChange: (e) => validateForm.inputValid(e, 'job_key', NUMBER),
                minLength: {
                  value: 4,
                  message: '4자리 이상 입력해주세요.',
                },
              })}
              errorMessage={errors.job_key?.message}
              htmlFor='job_key'
              label='직업코드'
              maxLength={4}
            />
          </div>
          <div className='w-[50%]'>
            <RegisterInput
              register={register('job', {
                onChange: (e) => {
                  const regex = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\s|]/g;
                  return (e.target.value = e.target.value.replace(regex, ''));
                },
                minLength: {
                  value: 6,
                  message: '6자리 이상 입력해주세요.',
                },
              })}
              errorMessage={errors.job?.message}
              htmlFor='job'
              label='직업명'
              maxLength={10}
            />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center'>
        <Button title='신청서 제출' />
      </div>
    </form>
  );
};
export default RegisterForm;
