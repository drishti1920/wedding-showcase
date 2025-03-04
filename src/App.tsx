import { useEffect, useState } from "react";
import "./index.css";
import AppRouter from "./router/AppRouter";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return <div>{loading ? <SplashScreen /> : <AppRouter />}</div>;
}

export default App;
