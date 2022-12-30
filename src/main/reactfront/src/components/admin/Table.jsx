import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
const Table = ({erpMembers}) => {

    const [posts, setPosts] = useState([]);
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

                <div className="overflow-auto rounded-lg shadow">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">No.</th>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">Status</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">Name</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">id</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">Gender</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">Address</th>
                                <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">email</th>
                                <th className="p-3 text-sm font-semi-bold tracking-wide text-left">Phone Number</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">Erp level</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">Job Key</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">contract_no</th>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">Reg Date</th>
                                <th className="w-20 p-3 text-sm font-semi-bold tracking-wide text-left">Update Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">

                        {erpMembers.slice(offset, offset + limit).map(member => {
                            return (
                                <tr className="bg-gray-50">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-500 hover:underline">{member.no}</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{member.status}</span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {member.name}
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.id}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.gender}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.address1}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.email}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.erp_LEVEL}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.phone1}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.job_KEY}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.contract_NO}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.reg_DATE}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.update_DATE}</td>
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