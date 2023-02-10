import { AuthProvider } from "./context/AuthContext";
import { Router } from "./Router/Router";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <div id="App">
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </div>
  );
};

export default App;
