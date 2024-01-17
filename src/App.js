import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import client from "./apollo";
import HomePage from "./pages/HomePage";
import { SignupForm } from "./component/SignupForm";
import { SigninForm } from "./component/SigninForm";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<SigninForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
