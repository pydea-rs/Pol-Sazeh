import { createContext } from "react";

const MainContext = createContext({
    projects: [],
    currentProject: null,
    changeProject: () => {},
    closeProject: () => {}
});

export default MainContext;
