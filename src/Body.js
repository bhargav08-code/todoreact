import React from "react";

export default function () {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //Month
  const d = new Date();
  let name = month[d.getMonth()];
  console.log(name);

  // week

  let day = new Date();
  let printDay = weekday[day.getDay()];
  console.log(printDay);

  //date
  let date = new Date();
  let getDate = date.getDate();
  console.log(getDate);

  //year
  let year = new Date();
  let getYear = year.getFullYear();
  console.log(getYear);

  //input
  // const [giveName, setName] = React.useState("");

  // function handleClick(e) {
  //   e.preventDefault();
  //   alert(`you entered : ${giveName}`);
  // }

  // function onChange(e) {
  //   setName(e.target.value);
  // }

  //main working

  function Strike(event) {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  }

  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function KeyDown(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  }
  return (
    <div className="container">
      <div className="Heading">
        <h1 className="day">{printDay}</h1>
        <h2 className="dayinfo">
          {name} {getDate} , {getYear}
        </h2>
      </div>
      <div className="form">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          onKeyDown={KeyDown}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li onClick={Strike}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
