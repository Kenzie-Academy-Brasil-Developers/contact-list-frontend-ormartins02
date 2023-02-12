import { AuthProvider } from "./context/AuthContext";
import { Router } from "./Router/Router";
import { Toaster } from "react-hot-toast";
import { AppDiv } from "./AppStyle";

const App = () => {
  return (
    <AppDiv>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </AppDiv>
  );
};

export default App;
