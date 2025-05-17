import './style.scss'
import data from './data.json';
import moment from 'moment';
import 'moment/locale/pt-br';

const Experience = () => {
  moment.locale('pt-br');

  const periperiodFormat = (item) => {
    const start = moment(item.date_start);
    const end = item.date_end ? moment(item.date_end) : moment()

    console.log(item);
    

    const duration = moment.duration(end.diff(start));
    const year = duration.years();
    const mounth = duration.months();

    return `${start.format('MMM YYYY')} - ${item.date_end ? end.format('MMM YYYY') : 'Present'} · ${year} ${year === 1 ? 'yr' : 'yrs'} ${mounth} ${mounth === 1 ? 'mo' : 'mos'}`;
  };
  return (
    <div className="experience content">
      <h2>Professional experience</h2>
      {
        data.map(item => (
          <div className="experience__content">
            <div className="info">
              <div className='info-function'>{item.title}</div>
              <div className="info-busines">{item.busines}</div>
              <div className='info-time'>{periperiodFormat(item)}</div>
              <div className="info-location">{item.location}</div>

            </div>
            <div className="experience__content-history">
              {item.description}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Experience;