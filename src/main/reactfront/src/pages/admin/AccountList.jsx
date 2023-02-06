import AdminLayout from '../../components/admin/AdminLayout';
import AccountListTable from '../../components/admin/table/AccountListTable';

const AccountList = () => {
  return (
    <AdminLayout title="계좌 조회">
      <AccountListTable />
    </AdminLayout>
  );
};
export default AccountList;
