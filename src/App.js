import logo from './logo.svg';
import './App.css';
import UserList from './Features/Users/UserList';
import { Routes,Route } from 'react-router-dom';
import AddUser from './Features/Users/AddUser';
import EditUser from './Features/Users/EditUser';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h3 className='text-center font-bold text-2xl text-gray-700'>
        Redux Toolkit
      </h3>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
