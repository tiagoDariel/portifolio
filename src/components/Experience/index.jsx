import './style.scss'
import moment from 'moment';
import 'moment/locale/pt-br';

const Experience = ({ data }) => {
  moment.locale('pt-br');

  const formatPeriod = (item) => {
    const start = moment(item.date_start);
    const end = item.date_end ? moment(item.date_end) : moment();
    const duration = moment.duration(end.diff(start));
    const year = duration.years();
    const month = duration.months();

    const translate = (type, isValid = false) => {
      if (data.lang === 'pt') {
        if (isValid) return type === 'year' ? 'ano' : 'mês';
        return type === 'year' ? 'anos' : type === 'mo' ? 'meses' : 'momento';
      } else {
        if (isValid) return type === 'year' ? 'yr' : 'mo';
        return type === 'year' ? 'yrs' : type === 'mo' ? 'mos' : 'present';
      }
    };

    return `${start.format('MMM YYYY')} - ${item.date_end ? end.format('MMM YYYY') : translate()} · ${year} ${translate('year', year === 1)} ${month} ${translate('mo', month === 1)}`;
  };

  return (
    <div className="experience content">
      <h2>{data.title}</h2>
      {
        data.items.map((item, index) => (
          <div className="experience__content" key={index}>
            <div className="info">
              <div className='info-function'>{item.title}</div>
              <div className="info-busines">{item.busines}</div>
              <div className='info-time'>{formatPeriod(item)}</div>
              <div className="info-location">{item.location}</div>
            </div>
            <div className="experience__content-history">
              {item.description}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Experience;
