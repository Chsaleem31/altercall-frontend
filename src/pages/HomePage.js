import { Button, Card, Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import Input from "../component-dir/shared/Input/Input";
import { useCallback, useState } from "react";

const API_GATEWAY_BASE_URL = "https://4elmsusmue.execute-api.eu-north-1.amazonaws.com/default";

const HomePage = () => {
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = useCallback(async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch(`${API_GATEWAY_BASE_URL}/askAI`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userAge: values.age,
          userHeight: values.height,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAiResponse(data.workoutSuggestion);
        resetForm();
        setSubmitting(false);
      } else {
        console.error("Error fetching AI response:", response.status);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setSubmitting(false);
    }
  }, []);

  return (
    <div className="flex p-5 gap-5 items-center justify-center h-screen">
      <Card className={aiResponse ? "w-1/3" : "w-1/2"}>
        <Formik
          initialValues={{
            age: "",
            height: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input name="age" label="Age" placeholder="Your age" required />
              <Input
                name="height"
                label="Height"
                placeholder="Height (ft)"
                required
              />

              <Button
                disabled={isSubmitting}
                type="submit"
                className="mt-2"
                color="blue"
              >
                {isSubmitting && (
                  <Spinner color="green" className="fill-blue-500" />
                )}
                Ask AI
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      {aiResponse && <div className="w-1/2">AI Response: ${aiResponse}</div>}
    </div>
  );
};

export default HomePage;
