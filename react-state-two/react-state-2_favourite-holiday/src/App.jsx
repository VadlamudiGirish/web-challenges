import { useState } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("Christmas");
  const [date, setDate] = useState("2025-12-25");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setDate(data.date);
    setHoliday(data.holiday);

    event.target.reset();

    event.target.elements.holiday.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday:{" "}
        <span className="output">{holiday ? holiday : "Christmas"}</span>
      </p>
      <p>
        Date: <span className="output">{date ? date : "2025-12-25"}</span>
      </p>
    </div>
  );
}
