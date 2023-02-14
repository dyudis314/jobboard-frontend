import { React, useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobCategory, setJobCategory] = useState('All');
  const [headerText, setHeaderText] = useState("");
  const [headerSubText, setHeaderSubtext] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/63eb21c8c0e7653a05770f38', {
      method: 'GET',
		  headers: {
			'X-Master-Key': '$2b$10$5BTJjf.LeCa1ePLHpxLmGumT30xHJdaB5UUxS8m7RGigEo0sVuplG'
		  },
    })
      .then(response => response.json())
      .then(res => {
        if (res) {
          setJobs(res.record);
          setLoading(true);
        }
      });
  }, []);

  return (
    <div className="App">
      <Home
        jobs={jobs}
        setJobs={setJobs}
        jobCategory={jobCategory}
        setJobCategory={setJobCategory}
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        headerText={headerText}
        setHeaderText={setHeaderText}
        headerSubText={headerSubText}
        setHeaderSubtext={setHeaderSubtext}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;

