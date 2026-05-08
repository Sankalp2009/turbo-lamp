import { createContext, useState } from "react";
import { InitialState } from "./InitialData.jsx";
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalInfo = createContext(null);

import React from "react";

function FormContext({ children }) {
  const [formValues, setFormValues] = useState(InitialState);

  const values = { formValues, setFormValues };

  return <GlobalInfo.Provider value={values}>{children}</GlobalInfo.Provider>;
}

export default FormContext;
