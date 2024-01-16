import { Button, Card } from "flowbite-react";
import { Form, Formik } from "formik";
import Input from "../Components/Input/Input";
import { useState } from "react";

const HomePage = () => {
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        "https://4elmsusmue.execute-api.eu-north-1.amazonaws.com/default/askAI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userAge: values.age, // Assuming you have an 'age' input in your form
            userHeight: values.height,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Assuming the Lambda function returns a property called 'aiResponse'
        setAiResponse(data.aiResponse);
      } else {
        // Handle non-ok response
        console.error("Error fetching AI response:", response.status);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-1/3">
        <Formik
          initialValues={{
            age: "", // Assuming you have an 'age' input in your form
            height: "",
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Input name="age" label="Age" placeholder="Your age" required />
              <Input
                name="height"
                label="Height"
                placeholder="Height (ft)"
                required
              />

              <Button type="submit" className="mt-2" color="blue">
                Ask AI
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <div>{aiResponse && `AI Response: ${aiResponse}`}</div>
    </div>
  );
};

export default HomePage;
