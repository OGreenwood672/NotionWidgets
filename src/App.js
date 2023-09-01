

import { Routes, Route } from "react-router-dom";

import ProgressBar from "./Widgets/ProgressBar";
import ClockHome from "./Widgets/ClockHome";

import './App.css';

function App() {
    return (
        <div className="App">
            
            <Routes>

                <Route path="/progressbar/:startday/:startmonth/:startyear/:endday/:endmonth/:endyear" element={<ProgressBar />} />
                <Route path="/clock" element={<ClockHome />} />

            </Routes>

        </div>
    );
}

export default App;
