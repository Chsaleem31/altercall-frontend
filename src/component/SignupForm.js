"use client";

import { useCallback, useState } from "react";
import { Button, Card } from "flowbite-react";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { SIGN_UP_MUTATION } from "../graphql/mutations";
import Input from "./shared/Input/Input";
import { OtpModal } from "./OtpModal";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const [showModal, setshowModal] = useState(false);
  const [userData, setuserData] = useState(null);
  const [signUpMutation] = useMutation(SIGN_UP_MUTATION);

  const handleSubmit = useCallback(async (values, { setSubmitting }) => {
    try {
      const {
        data: {
          signup: { user },
        },
      } = await signUpMutation({
        variables: {
          username: values.username,
          name: values.name,
          password: values.password,
          email: values.email,
          weight: values.weight,
        },
      });
      if (!!user) {
        setshowModal(true);
        setuserData(user);
      }
    } catch (error) {
      alert(error);
    } finally {
      setSubmitting(false);
    }
  }, [signUpMutation]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-1/3">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            name: "",
            height: "",
            weight: "",
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Input name="name" label="name" placeholder="name" required />
              <Input
                name="username"
                label="Username"
                placeholder="Username "
                required
              />{" "}
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
                placeholder="password"
                required
              />
              <Button type="submit" className="mt-2" color="blue">
                Signup
              </Button>
            </Form>
          )}
        </Formik>
        <OtpModal
          shouldShow={showModal}
          onClose={() => setshowModal(false)}
          username={userData?.username}
        />
        <p>
          Already have an account?{" "}
          <Link className="text-cyan-700" to="/signin">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
};
