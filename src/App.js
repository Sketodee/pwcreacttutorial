
import './App.css';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import About from './pages/about';
import ApplicationForm from './pages/applicationform';
import ContactUs from './pages/contactus';
import StudentsData from './pages/studentsdata';
import { Routes, Route } from "react-router-dom"
import Gallery from './pages/gallery';

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
        {/* <Route path='/studentsdata' element={<StudentsData/>}/> */}
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
