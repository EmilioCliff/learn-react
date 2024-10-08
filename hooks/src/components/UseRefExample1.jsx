import React, { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <p onClick={() => inputRef.focus} ref={paraRef}>
          Good morning
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
