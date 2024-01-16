// Import necessary dependencies and the mutation
import { Button, Card } from "flowbite-react";
import { Form, Formik } from "formik";
import Input from "./Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../graphql/mutations"; // Import your mutation from the correct location

export const SigninForm = () => {
  // Initialize useNavigate
  const navigate = useNavigate();

  // Initialize the mutation hook
  const [signinMutation] = useMutation(SIGNIN_MUTATION);

  // Define the submit function
  const handleSubmit = async (values) => {
    try {
      // Execute the mutation
      const { data } = await signinMutation({
        variables: {
          username: values.email, // Assuming you use email as username in this case
          password: values.password,
        },
      });

      // Handle the response as needed
      console.log("Signin response:", data);

      // Redirect to a different page upon successful signin
      // For example, assuming you have a "/dashboard" route
      localStorage.setItem("userData", data?.signin);
      navigate("/");
    } catch (error) {
      // Handle errors
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-1/3">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="user@email.com"
                required
              />
              <Input
                name="password"
                label="Password"
                type="password"
                required
              />
              <Button type="submit" className="mt-2" color="blue">
                Signin
              </Button>
            </Form>
          )}
        </Formik>
        <p>
          Do not have an account?{" "}
          <Link className="text-cyan-700" to="/signup">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
};
