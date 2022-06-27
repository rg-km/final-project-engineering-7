import moment from "moment";
import { useState } from "react";

function TimeEnd({time_end}){
    const [date, setDate] = useState(moment(time_end).format("YYYY-MM-DD"));

    return <input disabled type="date" value={date} />
}

export default TimeEnd