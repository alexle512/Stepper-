import "semantic-ui-css/semantic.min.css";

import React from "react";
import { render } from "react-dom";
import { StepList, Step } from "./stepper";

const PageTwo = () => (
  <h2>We have a second page.</h2>
)

const PageThree = () => (
  <h2>Page three is working.</h2>
)

const App = () => (
  <StepList>
    <Step>
      <h1>Hello world on page one!</h1>
    </Step>
    <Step component={PageTwo} />
    <Step component={PageThree} />
  </StepList>
);

render(<App />, document.getElementById("root"));
