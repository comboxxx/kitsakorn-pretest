import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "./question2.css";

function Question2() {
  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    try {
      let response = await axios.get("https://api.publicapis.org/categories");
      setDataList(response.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleFilterData = () => {
    if (input === "") return setFilteredData(dataList);

    let _filterdData = _.filter(dataList, (data) => _.includes(data, input));
    setFilteredData(_filterdData);
  };

  //Initial fetch data
  useEffect(() => {
    fetchData();
  }, []);

  //Filter data when input change
  useEffect(() => {
    handleFilterData();
  }, [dataList, input]);

  return (
    <div className="_container">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <table className="customTable">
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          {filteredData.map((data, idx) => {
            return (
              <tr key={`data_${idx}`}>
                <td>{data}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Question2;
