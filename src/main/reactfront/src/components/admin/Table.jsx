import React, { useRef, useState } from "react";
import Pagination from "./Pagination";
import ErpMember from "./ErpMember";
const Table = ({erpMembers}) => {

    let newErpMembers = erpMembers;
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    //  --------------- 검색 기능 ---------------

    const [isFiltered, toggleFilter] = useState(false);
    const [filterState, setFilterState] = useState({
        gender: "",
        name: "",
        phone: "",
        address: "",
        email: "",
        erp_level: "",
        reg_date: "",
        update_date: "",
    });

    const handleChange = (e) => {
        setFilterState({
            ...filterState,
            [e.target.name] : e.target.value,
        });
    };

    const genderInput = useRef();
    const nameInput = useRef();
    const phoneInput = useRef();
    const addressInput = useRef();
    const emailInput = useRef();
    const erpLevelInput = useRef();
    const regDateInput = useRef();
    const updateDateInput = useRef();

    // //input box filters
    const filterMembers = () => {

        return newErpMembers.filter(member => member.name.toString() === filterState.name.toString())
                // .filter(member => member.gender.toString() === filterState.gender.toString())

                // .filter(member => member.phone.toString() === filterState.phone.toString())
                // .filter(member => member.address.toString() === filterState.address.toString())
                // .filter(member => member.email.toString() === filterState.email.toString())
                // .filter(member => member.erp_level.toString() === filterState.erp_level.toString())
                // .filter(member => member.reg_date.toString() === filterState.reg_date.toString())
                // .filter(member => member.update_date.toString() === filterState.update_date.toString())
    }

    return (

        <div>
            <div className="p-3 h-screen bg-gray-100">

                {/*  ------------------Table------------------  */}

                <div className="flex flex-col pb-5">
                    <div className="bg-white p-6 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                            <div className="flex flex-col">
                                <label id="gender" className="font-medium text-sm text-stone-600">성별</label>
                                <select
                                    name="gender"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                    ref={genderInput}
                                    value={filterState.gender}
                                    onChange={handleChange}
                                >
                                    <option>남자</option>
                                    <option>여자</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-medium text-sm text-stone-600">이름</label>
                                <input
                                    type="text"
                                    name="name"
                                    ref={nameInput}
                                    placeholder="홍길동"
                                    onChange={handleChange}
                                    value={filterState.name}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="phone" className="font-medium text-sm text-stone-600">전화 번호</label>
                                <input
                                    type="text"
                                    name="phone"
                                    ref={phoneInput}
                                    placeholder="010-0000-0000"
                                    onChange={handleChange}
                                    value={filterState.phone}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="address" className="font-medium text-sm text-stone-600">주소</label>
                                <input
                                    type="text"
                                    name="address"
                                    ref={addressInput}
                                    onChange={handleChange}
                                    value={filterState.address}
                                    placeholder="서울특별시 둔촌동 12로"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="font-medium text-sm text-stone-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailInput}
                                    onChange={handleChange}
                                    value={filterState.email}
                                    placeholder="pintalk@example.com"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="erp_level" className="font-medium text-sm text-stone-600">투자자 등급</label>
                                <input
                                    type="number"
                                    name="erp_level"
                                    ref={erpLevelInput}
                                    onChange={handleChange}
                                    value={filterState.erp_level}
                                    placeholder="99"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="reg_date" className="font-medium text-sm text-stone-600">가입날짜</label>
                                <input
                                    type="date"
                                    name="reg_date"
                                    ref={regDateInput}
                                    onChange={handleChange}
                                    value={filterState.reg_date}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="update_date" className="font-medium text-sm text-stone-600">정보 변경날짜</label>
                                <input
                                    type="date"
                                    name="update_date"
                                    ref={updateDateInput}
                                    onChange={handleChange}
                                    value={filterState.update_date}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                />
                            </div>


                        </div>

                        <div className="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
                            <button
                                className="px-4 py-2 rounded-lg text-white-800 bg-blue-400 rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10" id="reset">
                                Reset
                            </button>

                            <button
                                className="px-4 py-2 rounded-lg bg-blue-800 rounded-lg bg-opacity-50 hover:bg-stone-200 hover:bg-orange-500 font-bold text-white shadow-lg shadow-orange-200 transition ease-in-out duration-200 translate-10" id="search"
                                onClick={
                                    ()=>{
                                        newErpMembers = filterMembers();
                                        toggleFilter(true);
                                        console.log(newErpMembers);
                                    }
                                }>
                                Search
                            </button>
                        </div>
                    </div>
                </div>


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
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">전화번호</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">주소</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">이메일</th>
                                <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">투자자 등급</th>
                                <th className="w-24 p-3 text-sm font-semi-bold tracking-wide text-left">가입날짜</th>
                                <th className="w-32 p-3 text-sm font-semi-bold tracking-wide text-left">정보 변경날짜</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">

                        {
                            !isFiltered ?
                            (erpMembers.slice(offset, offset + limit).map(member => {
                            return (
                                <ErpMember member={member} />
                            );
                            })) :
                                (newErpMembers.slice(offset, offset + limit).map(member => {
                                    return (
                                        <ErpMember member={member} />
                                    );
                                }))
                        }

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