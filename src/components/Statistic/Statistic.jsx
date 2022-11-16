import propTypes from 'prop-types';
import { Statis, Statisticli, StatisticSet } from './Statistic.styled';

export const Statistic = ({ stats, title}) => {
    return(
        <Statis>
             {title && <h2 className="title">{title}</h2>}
             <StatisticSet>
                {stats.map(({id, label, percentage}) =>
                <Statisticli key={id}>
            <span className="label">{label}</span>
             <span className="percentage">{percentage}%</span>
                </Statisticli> )}
             </StatisticSet>
        </Statis>
    )
}

Statistic.propTypes = {
    title: propTypes.string,
    id: propTypes.number,
    label: propTypes.number,
    percentage: propTypes.number,
}

//  export const Statistic = ({ stats, title }) => {
//   return (
//     <Statis>
//     <h2 class="title">Upload stats</h2>
//     {title && <h2 className="title">{title}</h2>}
//     <StatisticSet>
//       <Statisticli>
//         {stats.map(({ id, label, percentage}) =>(
// StatisticSet key={id}
//         <span class="label">.docx</span>
//         <span class="percentage">4%</span>
//         ))}}
