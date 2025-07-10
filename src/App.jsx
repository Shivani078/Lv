import { useEffect, useState } from 'react';
import logo from './assets/logo_LV.png';
import { fetchCurrentInterval } from './api/localvolts.js';
import IntervalCard from './components/IntervalCard.jsx';
import './App.css';

function App() {
  const [intervalData, setIntervalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetchCurrentInterval();

      if (data && data.length > 0) {
        setIntervalData(data[0]); // ✅ Just the first NMI
        setError(null);
      } else {
        setError('No interval data available.');
      }
    } catch (err) {
      setError('Failed to fetch data from API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="header">
        <img src={logo} alt="Localvolts Logo" className="logo" />
      </header>

      <div className="container">
        <h1 className="title">⚡ Live Localvolts Interval Monitor</h1>

        {loading && <p className="loading">Loading data...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && intervalData && (
          <IntervalCard interval={intervalData} />
        )}
      </div>
    </>
  );
}

export default App;
