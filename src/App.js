

import { Routes, Route } from "react-router-dom";

import ProgressBar from "./Widgets/ProgressBar";

import './App.css';

function App() {
    return (
        <div className="App">
            
            <Routes>

                <Route path="/progressbar/:startday/:startmonth/:startyear/:endday/:endmonth/:endyear" element={<ProgressBar />} />

            </Routes>

        </div>
    );
}

export default App;
