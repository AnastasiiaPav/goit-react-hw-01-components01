import propTypes from 'prop-types';
import { Table, Td } from './Transaction.styled';

export const MoneySet = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
             <tr key={id}>
                   <Td>{type}</Td>
                  <Td>{amount}</Td>
                  <Td>{currency}</Td>
                </tr>
        ))}
      </tbody>
    </Table>
  )
};

// export const Money = ({ MoneyDetails }) => {
//     return(
//         <Table>
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>
//   <tbody>
//     {MoneyDetails.map(({ id, type, amount, currency}) =>(
//          <tr key={id}>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//     ))
//     }
// </Table>
// )}
