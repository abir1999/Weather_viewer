import './style.css'
import { getweather } from './weather'

getweather(25.25, 55.375, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
    res => {
        console.log(res.data)
    }
)