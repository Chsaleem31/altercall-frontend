import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import client from "./apollo";
import HomePage from "./pages/HomePage";
import { SignupForm } from "./Components/SignupForm";
import { SigninForm } from "./Components/SigninForm";

// Import your components for signup, signin, and homepage

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} /> 
      <Route path="/" element={<HomePage />} />
    </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
