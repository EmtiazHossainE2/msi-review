import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Review from './pages/Review/Review';
import Header from './components/Header/Header';
import Blogs from './pages/Blogs/Blogs';

const App = () => {
    return (
        <div className='overflow-hidden '>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/review' element={<Review></Review>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/about-us' element={<About></About>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
};

export default App;