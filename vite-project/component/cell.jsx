export default function Cell({value, onClick}){
    return (
      <th onClick={onClick}  >
        {value}
      </th>
    );
  }