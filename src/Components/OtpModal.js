import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { USER_CONFIRMATION_MUTATION } from "../graphql/mutations"; // Import your mutation from the correct location
import { useNavigate } from "react-router-dom";

export const OtpModal = ({ onClose, shouldShow, username }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [confirmUserMutation] = useMutation(USER_CONFIRMATION_MUTATION);

  const handleSubmit = async () => {
    try {
      const { data } = await confirmUserMutation({
        variables: {
          username: username,
          otp: otp,
        },
      });

      // Handle the response as needed
      console.log("User Confirmation response:", data);
      navigate("/signin");
    } catch (error) {
      alert(error);
    } finally {
      // Close the modal, whether successful or not
      onClose();
    }
  };

  return (
    <Modal show={shouldShow} onClose={onClose} size="2xl">
      <Modal.Header>Add OTP</Modal.Header>
      <Modal.Body>
        <TextInput onChange={(e) => setOtp(e.target.value)} />

        <Button className="mt-2" color="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  );
};
