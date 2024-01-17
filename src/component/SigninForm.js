import { Button, Card } from "flowbite-react";
import { Form, Formik } from "formik";
import Input from "./shared/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../graphql/mutations"; // Import your mutation from the correct location
import { useCallback } from "react";

export const SigninForm = () => {
  const navigate = useNavigate();
  const [signinMutation] = useMutation(SIGNIN_MUTATION);

  const handleSubmit = useCallback(async (values) => {
    try {
      const { data } = await signinMutation({
        variables: {
          username: values.email,
          password: values.password,
        },
      });

      localStorage.setItem("userData", data?.signin);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }, [navigate, signinMutation]);

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
