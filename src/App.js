import "./App.css";

import { useState } from "react";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";

function App() {
  const [page, setPage] = useState("Question 1");

  return (
    <div>
      <NavigationBar page={page} setPage={setPage} />
      {page === "Question 1" && <Question1 />}
      {page === "Question 2" && <Question2 />}
      {/*{page === "Question 3" && <Question3 />} */}
    </div>
  );
}

export default App;

const menuList = ["Question 1", "Question 2"];

const NavigationBar = (props) => {
  return (
    <div className="navigationTabContainer">
      {/* <center> */}
      {menuList.map((menu) => (
        <PageMenu {...props} text={menu} />
      ))}
      {/* </center> */}
    </div>
  );
};

const PageMenu = ({ text, page, setPage }) => {
  return (
    <h2
      onClick={() => setPage(text)}
      className="pageMenu"
      style={{ color: page === text ? "blue" : "black" }}
    >
      <u>{text}</u>
    </h2>
  );
};
