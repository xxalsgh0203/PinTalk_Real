import { useForm } from 'react-hook-form';
import CommonInput from '../shareInputs/CommonInput';
import Gender from '../shareInputs/Gender';
import SSN from '../shareInputs/SSN';
import Phone from '../shareInputs/Phone';
import Email from '../shareInputs/Email';
import ValidateForm, { NUMBER, NUMBER_ENGLISH } from '../../utils/validateForm';
import Password from '../shareInputs/Password';
import useMutation from '../../hooks/useMutation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../Loading';
import useAddress from '../../hooks/useAddress';

const validateForm = new ValidateForm();
const RegisterForm = () => {
  const { error, loading, mutation, data } = useMutation('/userMemberInsert');
  const { address, handleAddress } = useAddress();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
  });

  const onValid = (data) => {
    const email = data.frontEmail && data.frontEmail + '@' + data.backEmail;
    const ssn = data.ssn1 + data.ssn2;
    const phone1 = data.phone2 && data.phone3 ? data.phone1 : null;

    const submitData = {
      email: email || null,
      address1: data.address1 || null,
      address2: data.address2 || null,
      gender: data.gender || null,
      id: data.id,
      jobkey: data.jobkey || null,
      name: data.name || null,
      password: data.password,
      phone1,
      phone2: data.phone2 || null,
      phone3: data.phone3 || null,
      ssn,
    };
    if (window.confirm('정말 등록하시겠습니까?')) {
      mutation(submitData);
    }
    return;
  };

  useEffect(() => {
    if (data) {
      navigate('/admin');
      window.close();
    }
  }, [data]);

  useEffect(() => {
    if (address) {
      setValue('address1', address);
    }
  }, [address]);

  console.log('error', error);

  return loading ? (
    <Loading />
  ) : (
    <form
      onSubmit={handleSubmit(onValid)}
      className="rounded-lg max-w-xl lg:max-w-2xl m-auto space-y-4 pb-3"
    >
      <div className="space-y-5">
        <div className="flex items-center space-x-10">
          <div className="w-[50%]">
            <CommonInput
              register={register('name', {
                required: '이름을 입력해주세요.',
              })}
              necessary
              errorMessage={errors.name?.message}
              htmlFor="name"
              label="이름"
              maxLength={15}
            />
          </div>

          <Gender
            necessary
            errorMessage={errors?.gender?.message}
            register={register('gender', {
              required: '성별을 입력해주세요.',
            })}
            watch={watch}
          />
        </div>

        <div className="space-y-2">
          <SSN
            register={register}
            validateForm={validateForm}
            errorMessage={errors.ssn1?.message || errors.ssn2?.message}
          />
          <button className="text-sm bg-gray-200 p-1 px-2 rounded-md hover:bg-gray-300 transition-colors">
            주민번호 확인
          </button>
        </div>

        <Phone
          register={register}
          watch={watch}
          validateForm={validateForm}
          errorMessage={errors.phone1?.message || errors.phone2?.message || errors.phone3?.message}
        />

        <div className="space-y-2">
          <CommonInput
            register={register('id', {
              required: '아이디를 입력해주세요.',
              onChange: (e) => {
                validateForm.notSpecialString(e);
                return validateForm.inputValid(e, 'id', NUMBER_ENGLISH);
              },
            })}
            htmlFor="id"
            label="아이디"
            necessary={true}
            errorMessage={errors.id?.message}
            maxLength={15}
          />
          <button className="text-sm bg-gray-200 p-1 px-2 rounded-md hover:bg-gray-300 transition-colors">
            아이디 중복체크
          </button>
        </div>

        <div className="space-y-2">
          <Password
            necessary
            register={register}
            label="비밀번호"
            type="password"
            htmlFor="password"
            errorMessage={errors.password?.message}
          />
          <button className="text-sm bg-gray-200 p-1 px-2 rounded-md hover:bg-gray-300 transition-colors">
            비밀번호 검증
          </button>
        </div>

        <div className="space-y-2 py-2">
          <label className="text-sm flex items-center">주소</label>
          <div className="space-x-4">
            <input
              onClick={handleAddress}
              type="text"
              {...register('address1')}
              className="bg-transparent rounded-md w-full h-full p-1 px-3 outline-none border-2 transition-all"
            />
          </div>

          <CommonInput register={register('address2')} htmlFor="address2" label="상세주소" />
        </div>

        <Email
          register={register}
          watch={watch}
          validateForm={validateForm}
          errorMessage={errors.frontEmail?.message || errors.backEmail?.message}
        />

        <div className="flex items-center space-x-6">
          <div className="w-[50%]">
            <CommonInput
              register={register('jobkey', {
                onChange: (e) => validateForm.inputValid(e, 'jobkey', NUMBER),
                minLength: {
                  value: 4,
                  message: '4자리 이상 입력해주세요.',
                },
              })}
              errorMessage={errors.job_key?.message}
              htmlFor="jobkey"
              label="직업코드"
              maxLength={4}
            />
          </div>
          {/*    <div className="w-[50%]">
            <CommonInput
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
              htmlFor="job"
              label="직업명"
              maxLength={10}
            />
          </div> */}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="text-white py-1 px-6 rounded-lg bg-yellow-500 hover:bg-pintalk-dark-yellow transition-colors text-lg w-full font-bold">
          등록
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
