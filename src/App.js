import logo from './logo.svg';
import './App.css';
import api from "./api/axiosConfig";
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const[jobs, setJobsState] = useState();


  //TODO: Parameterise this.
  const getJobs = async() => {
    try {
        const jobResponse = await api.get("/v1/jobs");
        console.log(jobResponse.data)
        setJobsState(jobResponse.data)
    }
    catch(err) {
        console.log(err)
    }
  }

  useEffect(() => {
    getJobs();
  },[])

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>} ></Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
