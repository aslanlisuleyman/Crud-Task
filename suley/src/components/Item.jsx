
import React from 'react';

function Item({ item, setFilteredData }) {
  const handleDelete = () => {
    setFilteredData((deleted) => deleted.filter((i) => i.id !== item.id));
  };

  return (
    <tr className='tr'>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.quantityPerUnit}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Item;