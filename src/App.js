import logo from './logo.svg';
import './App.css';
import api from "./api/axiosConfig";
import {useState, useEffect} from 'react';

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
    </div>
  );
}

export default App;
