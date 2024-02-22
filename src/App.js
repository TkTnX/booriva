import { Header } from "./components/header/Header";
import { Home } from "./pages/Home/Home";

import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
