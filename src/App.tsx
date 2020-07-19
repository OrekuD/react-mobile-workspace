import React from "react";
import "./App.scss";
import { Scene } from "./components";

function App() {
  const Header = () => <h2> Header </h2>;

  return (
    <Scene variant="large" backgroundColor="#ee3345" renderTitle={<Header />}>
      <h1> Hmm </h1>
    </Scene>
  );
}

export default App;
