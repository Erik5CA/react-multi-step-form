import { useDispatch, useSelector } from "react-redux";
import FormButtons from "./FormButtons";
import { RootState } from "../store/store";
import { Periods, plans } from "../steps";
import { goToStep, increment } from "../slices/counterSteps";

const SummaryForm = () => {
  const {
    plan: { plan, period },
    addOnds,
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const selectedPlan = plans.filter((p) => p.type === plan).pop();
  const total = addOnds.reduce(
    (acc, item) => (item.state ? (acc += item.price) : (acc += 0)),
    0
  );
  return (
    <form>
      <div className="summary-form">
        <div className="services">
          <div className="header">
            <div>
              <p className="title">
                {selectedPlan?.type} ({period})
              </p>
              <button
                type="button"
                className="change"
                onClick={() => dispatch(goToStep(1))}
              >
                Change
              </button>
            </div>
            <div>
              <p className="price">
                +${selectedPlan?.price}
                {period === Periods.monthly ? "/mo" : "0/yr"}
              </p>
            </div>
          </div>

          {addOnds.map(
            (add) =>
              add.state && (
                <div className="ser-item">
                  <p className="title">{add.title}</p>
                  <p className="price">
                    +${add.price}
                    {period === Periods.monthly ? "/mo" : "0/yr"}
                  </p>
                </div>
              )
          )}
        </div>

        <div className="total">
          <p className="title">
            Total (per {period === Periods.monthly ? "month" : "year"})
          </p>
          <p className="price">
            +${total + (selectedPlan?.price || 0)}
            {period === Periods.monthly ? "/mo" : "0/yr"}
          </p>
        </div>
      </div>

      <FormButtons onSubmit={() => dispatch(increment())} />
    </form>
  );
};

export default SummaryForm;
