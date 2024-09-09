import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../slices/counterSteps";
import { RootState } from "../store/store";

interface Props {
  onSubmit?: () => void;
}

const FormButtons = ({ onSubmit }: Props) => {
  const step = useSelector((state: RootState) => state.counterSteps.step);

  const dispatch = useDispatch();
  return (
    <div className="container-btns">
      {step !== 0 ? (
        <button className="btn-back" onClick={() => dispatch(decrement())}>
          Go Back
        </button>
      ) : (
        <div></div>
      )}
      <button
        type="submit"
        className={`${step === 3 ? "btn-continue" : ""}`}
        onClick={onSubmit}
      >
        {step === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default FormButtons;
