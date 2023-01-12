import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserMemberDetail = () => {
  let { id } = useParams();

  const [userInfo, UpdateInfo] = useState({});

  // 데이터 받아와서 userInfo state 에 저장하기

  useEffect(() => {
    axios.get(`/userMemberDetail/${id}`).then((response) => {
      UpdateInfo(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    고유번호
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.no}
                  </td>
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    이름
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.name}
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
                    {userInfo[0]?.password}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    성별
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.gender}
                  </td>
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    이메일
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.email}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    주소 1
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.address1}
                  </td>
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    주소 2
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.address2}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    전화번호
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.phone1}-{userInfo[0]?.phone2}-{userInfo[0]?.phone3}
                  </td>
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    주민등록번호
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.ssn1}-{userInfo[0]?.ssn2}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    JOB KEY
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.job_key}
                  </td>
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    회원가입 여부
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.status}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    등록 날짜
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.reg_Date}
                  </td>
                  <td className="px-6 py-4 bg-gray-100 whitespace-nowrap text-sm font-medium text-gray-900">
                    업데이트 날짜
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {userInfo[0]?.update_Date}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMemberDetail;
