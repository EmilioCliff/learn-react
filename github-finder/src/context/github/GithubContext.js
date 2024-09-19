import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.loading,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubContext;
