import { useForm } from 'react-hook-form';
import CommonInput from '../../shareInputs/CommonInput';
import Gender from '../../shareInputs/Gender';
import SSN from '../../shareInputs/SSN';
import Phone from '../../shareInputs/Phone';
import Email from '../../shareInputs/Email';
import ValidateForm, { NOT_NUMBER, NUMBER, NUMBER_ENGLISH } from '../../../utils/validateForm';
import Password from '../../shareInputs/Password';
import Status from '../../shareInputs/Status';

const validateForm = new ValidateForm();

const UserInfoData = ({ userInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // console.log(userInfo[0]);

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
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <h1 className="py-5 text-2xl text-pintalk-dark-brown text-semibold">
                회원 상세 정보
              </h1>
              <table className="min-w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      이름
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap w-5/12">
                      <CommonInput
                        register={register('name', {
                          onChange: (e) => validateForm.inputValid(e, 'name', NOT_NUMBER),
                        })}
                        errorMessage={errors.name?.message}
                        htmlFor="name"
                        maxLength={10}
                        placeholder={userInfo[0]?.name}
                        editPage
                      />
                    </td>
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      성별
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Gender
                        register={register('gender')}
                        watch={watch}
                        ugender={userInfo[0]?.gender}
                        editPage
                      />
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      주민등록번호
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <SSN
                        register={register}
                        validateForm={validateForm}
                        errorMessage={errors.ssn1?.message || errors.ssn2?.message}
                        ssn1={userInfo[0]?.ssn1}
                        ssn2={userInfo[0]?.ssn2}
                        editPage
                      />
                      <button className="text-sm bg-gray-200 p-1 px-2 rounded-md hover:bg-gray-300 transition-colors">
                        주민번호 확인
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      전화번호
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Phone
                        register={register}
                        watch={watch}
                        validateForm={validateForm}
                        errorMessage={
                          errors.phone1?.message || errors.phone2?.message || errors.phone3?.message
                        }
                        phone1={userInfo[0]?.phone1}
                        phone2={userInfo[0]?.phone2}
                        phone3={userInfo[0]?.phone3}
                        editPage
                      />
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      아이디
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {userInfo[0]?.id}
                    </td>
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      비밀번호
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Password
                        necessary
                        register={register}
                        type="password"
                        htmlFor="password"
                        errorMessage={errors.password?.message}
                        upassword={userInfo[0]?.password}
                        editPage
                      />
                      <button className="text-sm bg-gray-200 p-1 px-2 rounded-md hover:bg-gray-300 transition-colors">
                        비밀번호 검증
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      주소
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <CommonInput
                        register={register('address1')}
                        htmlFor="address1"
                        label="사는곳"
                        placeholder={userInfo[0]?.address1}
                      />
                      <CommonInput
                        register={register('address2')}
                        htmlFor="address2"
                        label="상세주소"
                        placeholder={userInfo[0]?.address2}
                      />
                      {userInfo[0]?.address1} {userInfo[0]?.address2}
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      이메일
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Email
                        register={register}
                        watch={watch}
                        validateForm={validateForm}
                        errorMessage={errors.frontEmail?.message || errors.backEmail?.message}
                        email1={userInfo[0]?.email.split('@')[0]}
                        email2={userInfo[0]?.email.split('@')[1]}
                        editPage
                      />
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      JOB KEY
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {userInfo[0]?.job_key}
                      <CommonInput
                        register={register('job_key', {
                          onChange: (e) => validateForm.inputValid(e, 'job_key', NUMBER),
                          minLength: {
                            value: 4,
                            message: '4자리 이상 입력해주세요.',
                          },
                        })}
                        errorMessage={errors.job_key?.message}
                        htmlFor="job_key"
                        maxLength={4}
                        placeholder={userInfo[0]?.job_key}
                      />
                    </td>
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      회원가입 여부
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Status
                        register={register('status')}
                        watch={watch}
                        ustatus={userInfo[0]?.status}
                        editPage
                      />
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      가입일자
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {userInfo[0]?.reg_Date.slice(0, 10)}
                    </td>
                    <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                      정보변경일자
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {userInfo[0]?.update_Date.slice(0, 10)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 mt-10">
        <button
          className="px-4 py-2 text-white-800  rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10 w-[30%] md:w-[15%] lg:w-[10%] bg-pintalk-light-yellow"
          id="reset"
          type="button"
        >
          수정
        </button>

        <button
          className="px-4 py-2 text-white-800  rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10 w-[30%] md:w-[15%] lg:w-[10%] bg-pintalk-dark-yellow"
          type="submit"
          onClick={window.close}
        >
          닫기
        </button>
      </div>
    </>
  );
};

export default UserInfoData;
