import { RouterProvider } from "react-router-dom";
import "./App.scss";

import router from "./Router/Router";

const App = () => {
  return <>
  
 <RouterProvider router={router} />
  
  </>;
};

export default App;
