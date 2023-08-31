
import { useParams } from 'react-router-dom'

import "./ProgressBar.css";

function update(start, end) {
    var now = new Date(); 
    var total_time = end.getTime() - start.getTime(); 
    var time_complete = now.getTime() - start.getTime();
    var percent = time_complete / total_time * 100;
    if (percent <= 100 && percent >= 0) {
        document.getElementById("progress").style.width = `${percent}%`;
    }
}

export default function ProgressBar() {

    const { startday, startmonth, startyear, endday, endmonth, endyear } = useParams()
    const start = new Date(`${startmonth}/${startday}/${startyear}`)
    const end = new Date(`${endmonth}/${endday}/${endyear}`)
    
    const update_interval = () => {
        update(start, end)
    }

    setInterval(update_interval, 10)


    return (
        <div>
            <div id="progressbar">
                <div id="progress"></div>
            </div>
        </div>
    )

}