import { useState } from "react";
import appContext from "./app-context";

const MyProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <appContext.Provider value={{ value, setValue }}>
      {children}
    </appContext.Provider>
  );
};

export default MyProvider;
