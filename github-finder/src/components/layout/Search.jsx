import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function Search() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearState } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div className="">
        <form>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="input input-lg w-full pr-40 bg-gray-200"
                placeholder="Search"
                value={text}
                onChange={handleText}
              />
              <button
                onClick={handleSubmit}
                className="absolute text-white bg-gray-800 right-0 rounded-l-none w-36 btn btn-lg no-change"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={clearState}
            className="btn btn-ghost text-white btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
