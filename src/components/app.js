import { h } from "preact";
import { Router } from "preact-router";

import { Header } from "./Header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Details from "../routes/details";
import { Provider } from "./provider";

const App = () => {
  return (
    <div id="app" class="h-screen">
      <Provider>
        <Header />
        <Router>
          <Home path="/" />
          <Details path="/:id" />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
