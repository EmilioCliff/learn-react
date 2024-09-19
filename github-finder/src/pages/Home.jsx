import React from "react";
import { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import UserItem from "../components/users/UserItem";
import GithubContext from "../context/github/GithubContext";
import Search from "../components/layout/Search";

function Home() {
  const { isLoading, users } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Search />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  }
}

export default Home;
