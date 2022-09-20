import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import ClientRoutes from "components/clientRoutes/ClientRoutes";



export const App = () => {
  return (
    
    <BrowserRouter>
      <Header/>
      <ClientRoutes />
    </BrowserRouter>
    
  );
};
