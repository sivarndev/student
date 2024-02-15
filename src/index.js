import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Createbuttton} from './components/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Createbuttton.Provider value={{isFaculty:true}}>
     
            <React.StrictMode>
              <App />
            </React.StrictMode>
   
    </Createbuttton.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
