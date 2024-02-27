import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); // goes back 1 step ; +1 goes forward 1 step
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
