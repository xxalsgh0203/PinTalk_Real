import UserMembers from './userMembers';
import useMembers from '../../hooks/useMembers';

import Pagination from './Pagination';
import FilteringTable from './filtering/FilteringTable';
import Loading from '../Loading';

const Table = () => {
  const { users: userList, loading, error, PageInfo } = useMembers();

  return (
    <div>
      <div className="p-3 h-screen bg-gray-100">
        {/*  ------------------Table------------------  */}

        <FilteringTable />

        <h1 className="">고유번호 클릭시 상세페이지로 이동합니다</h1>

        <div className="overflow-auto rounded-lg shadow pt-5 h-[36rem]">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">
                  고유번호
                </th>
                <th className="w-10 p-3 text-sm font-semi-bold tracking-wide text-left">성별</th>
                <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">이름</th>
                <th className="w-16 p-3 text-sm font-semi-bold tracking-wide text-left">
                  주민등록번호
                </th>
                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">
                  전화번호
                </th>
                <th className="w-48 p-3 text-sm font-semi-bold tracking-wide text-left">주소</th>
                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">이메일</th>
                <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">
                  가입날짜
                </th>
                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">
                  정보 변경날짜
                </th>
              </tr>
            </thead>
            {loading ? (
              <Loading />
            ) : (
              <tbody className="divide-y divide-gray-100">
                {userList?.map((member) => {
                  return <UserMembers member={member} key={member.id} />;
                })}
              </tbody>
            )}
          </table>
        </div>
        <Pagination PageInfo={PageInfo} />
      </div>
    </div>
  );
};

export default Table;
