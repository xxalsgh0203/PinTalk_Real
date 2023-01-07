import React, { useEffect, useState } from 'react';
import Table from '../components/admin/Table';
import Layout from '../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/slices/userReducer';

const Admin = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getList());
  }, []);

  console.log(userList);

  return (
    <div>
      <Layout title="관리자">
        <h1 className="text-xl bg-gray-100 p-3">투자자 리스트</h1>
      </Layout>
    </div>
  );
};

export default Admin;
