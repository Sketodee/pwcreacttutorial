
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import ApplicationForm from './pages/ApplicationForm';
import ContactUs from './pages/ContactUs';
import StudentsData from './pages/StudentsData';
import { Routes, Route } from "react-router-dom"
import Gallery from './pages/Gallery';
import RecruitmentForm from './pages/RecruitmentForm';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Todos from './pages/Todos';
import Login from './pages/Login';
import SingleBlogPage from './pages/SingleBlogPage';
import CareerForm from './pages/CareerForm';


function App() {

  const StudentsDataDetails = [
    {
      id: 1,
      name: "John Snow",
      state: "Castle Black",
      stack: "Fullstack",
      desc: "Just a bastard, Yunno",
      jobTitle: "Software Dev"
    },
    {
      id: 2,
      name: "Arya Stark",
      state: "Winterfell",
      stack: "Backend",
      desc: "Killed the Night Lord with a plastic knife. WTF!!!",
      jobTitle: "DevOps"
    },
    {
      id: 3,
      name: "Lord Baelish",
      state: "Ogun",
      stack: "Frontend",
      desc: "A snitch and more",
      jobTitle: "Software Dev"
    },
    {
      id: 4,
      name: "Ned Stark",
      state: "Lagos",
      stack: "Fullstack",
      desc: "Lost his head",
      jobTitle: "Frontend Dev"
    },
    {
      id: 5,
      name: "Shobande James",
      state: "Ogun",
      stack: "Fullstack",
      desc: "Well, Just me telling a story",
      jobTitle: "Fullstack Dev"
    }
  ]

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/applicationform' element={<ApplicationForm />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/studentsdata' element={<StudentsData studentsDataDetails={StudentsDataDetails} />} />
        <Route path='recruitmentform' element = {<RecruitmentForm />}/>
        <Route path='/posts' element ={<Posts/>}/>
        <Route path='/users' element ={<Users/>}/>
        <Route path='/todos' element ={<Todos/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/singleblogpage/:id'  element={<SingleBlogPage/>}/>
        <Route path='careerform' element={<CareerForm />}/>
        {/* <Route path='/studentsdata' element={<StudentsData/>}/> */}
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
