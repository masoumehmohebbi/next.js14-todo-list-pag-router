import { useRef } from "react";
import Button from "../ui/button";

export default function EventsSerach({ onSearch }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth);
  };
  return (
    <form onSubmit={submitHandler} className="my-6 flex justify-center">
      <div className="py-2 px-3 flex gap-x-4 bg-pink-200 items-center mx-auto justify-center shadow-sm rounded-md">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <label htmlFor="year" className="font-bold">
              Year
            </label>
            <select id="year" ref={yearInputRef} className="selectOpt">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="flex items-center gap-x-2">
            <label htmlFor="month" className="font-bold">
              Month
            </label>
            <select id="month" ref={monthInputRef} className="selectOpt">
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <Button onClick={console.log("k")}>Find Events</Button>
      </div>
    </form>
  );
}
