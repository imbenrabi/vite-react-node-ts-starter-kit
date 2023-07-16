import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        setData(data.message);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <div>
    <section>Server Data</section>
    {data}
  </div>;
};

const rootElement = document.getElementById('root') as Element;
const app = <App />; // Replace App with your root component

const root = ReactDOM.createRoot(rootElement);
root.render(app);
