import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div className='border-2 flex items-center justify-between p-2 shadow-md'>
      <Link to='/'>
        <div>PINTALK</div>
      </Link>
      <h1>{title}</h1>
      <ul className='flex items-center space-x-10'>
        <li>
          <Link to='/investment'>투자자</Link>
        </li>
        <li>
          <Link to='/loan'>대출자</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
