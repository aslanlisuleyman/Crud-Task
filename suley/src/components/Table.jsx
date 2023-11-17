import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import Header from "./Header";

function Table() {
  const [inform, setInform] = useState([]);
  const [name, setName] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setInform(res.data);
      setFilteredData(res.data)
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://northwind.vercel.app/api/products", {
        name,
        quantityPerUnit,
      })
      .then((res) => {
        setInform([...inform, res.data]);
        setName("");
        setQuantityPerUnit("");
      });
  };

  return (
    <div>
      <Header inform={inform} setInform={setInform} filteredData={filteredData} setFilteredData={setFilteredData} />
      <div className="add">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="quantityPerUnit"
          onChange={(e) => setQuantityPerUnit(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <table className="table table-dark table">
        <thead className="thead">
          <tr className="tr">
            <th>ID</th>
            <th>Name</th>
            <th>quantityPerUnit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <Item key={item.id} item={item} setInform={setInform} setFilteredData={setFilteredData} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
