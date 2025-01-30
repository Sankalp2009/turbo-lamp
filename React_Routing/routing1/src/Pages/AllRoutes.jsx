import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import SingleUser from './SingleUser';
const AllRoutes = () =>{
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path=":id" element={<SingleUser />} />
      </Routes>
    )
}

export default AllRoutes;