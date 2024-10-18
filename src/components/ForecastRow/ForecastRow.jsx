import { drawDirectionWind } from '../../helpers';
import { Loading } from '../Loading/Loading';
import s from './ForecastRow.module.css';

export const ForecastRow = ({ data, j }) => {
    if (!data) {
        return <div>Forecast items Loading...<Loading/></div>
    }

    return (
    <tr className={s.row}>            
        <td className={`${s.item} ${s.time}`}>{j} h</td>
        <td className={`${s.item} ${s.temp}`}>{data.temp_c}&#176;C</td>  
        <td className={`${s.item} ${s.image}`}>
            <img className={s.img} src={data.condition.icon} alt={data.condition.text} />
        </td>
        <td className={`${s.item} ${s.text}`}>{data.condition.text}</td>     
        <td className={`${s.item} ${s.wind}`}>{data.wind_kph} km/h</td>
            <td className={`${s.item} ${s.wind_dir}`} style={{ transform: `rotate(${drawDirectionWind(data.wind_dir)}deg)`}}>&#8595;</td> 
        {/* <td className={`${s.item} ${s.wind_dir}`}>{drawDirectionWind(data.wind_dir)}</td>      */}
        <td className={`${s.item} ${s.feel}`}>{data.feelslike_c}&#176;C</td>
    </tr>
)}