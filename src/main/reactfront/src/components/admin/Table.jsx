import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";
const Table = ({erpMembers}) => {

    const [newErpMembers, filterErpMembers] = useState([...erpMembers]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    return (
        <div>
            <div className="p-5 h-screen bg-gray-100">

                <label>
                    페이지 당 표시할 게시물 수:&nbsp;
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value } }) => setLimit(Number(value))}
                    >
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>

                <div className="overflow-auto rounded-lg shadow pt-5">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">고유번호</th>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">성별</th>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">이름</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">휴대폰 번호</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">사는곳</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">이메일</th>
                                <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">투자자 등급</th>
                                <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">가입날짜</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">정보 변경날짜</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">

                        {erpMembers.slice(offset, offset + limit).map(member => {
                            return (
                                <tr className="bg-gray-50">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">{member.no}</span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {member.gender === 'M' ? "남자" : "여자"}
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.name}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">0{member.phone1} - {member.phone2} - {member.phone3}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.address1}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.email}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.erp_level}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.reg_date}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.update_date}</td>
                                </tr>
                            );
                        })}

                        </tbody>
                    </table>
                </div>

                <footer>
                    <Pagination
                        total={erpMembers.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </footer>
            </div>
        </div>
    );
}

export default Table;