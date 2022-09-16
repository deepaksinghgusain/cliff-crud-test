import './App.css';
import { Fragment } from 'react';
import Header from './components/ui/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Employee from './components/pages/Employee';
import EmployeeList from './components/pages/EmployeeList';
import AddEditEmployee from './components/pages/AddEditEmployee';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <Fragment>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<Employee />}>
            <Route path="list" element={<EmployeeList />} />
            <Route path="add-employee" element={<AddEditEmployee />} />
            <Route path="edit-employee/:id" element={<AddEditEmployee />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
