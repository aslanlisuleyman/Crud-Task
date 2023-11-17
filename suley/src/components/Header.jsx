import React from "react";

function Header({ inform, setInform, filteredData, setFilteredData }) {
  const handleChange = (e) => {
    if (inform === " ") {
      setInform([...inform]);
      setFilteredData([...inform]);
    }
    let search = e.target.value.trim().toLowerCase();
    console.log(search);
    setFilteredData([
      ...inform.filter((card) =>
        card.name.trim().toLowerCase().includes(search.trim().toLowerCase())
      ),
    ]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let sortedData = inform.sort((a, b) => a.id - b.id);
    console.log(sortedData);
    setInform([...sortedData]);
  };

  return (
    <div className="header">
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => handleClick(e)}>Sort By Price</button>
    </div>
  );
}

export default Header;
