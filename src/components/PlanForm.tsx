import { useDispatch, useSelector } from "react-redux";
import { Periods, plans } from "../steps";
import FormButtons from "./FormButtons";
import { RootState } from "../store/store";
import { updatePeriod, updatePlan } from "../slices/planSlice";
import { increment } from "../slices/counterSteps";

const PlanForm = () => {
  const { plan, period } = useSelector((state: RootState) => state.plan);
  const dispatch = useDispatch();
  return (
    <form action="">
      <div className="plan-form">
        <div className="plans">
          {plans.map((item) => (
            <div
              className={plan === item.type ? "info active" : "info"}
              key={item.type}
              onClick={() => dispatch(updatePlan(item.type))}
            >
              <img className="icon" src={item.img} alt="" />
              <div className="labels">
                <h4 className="title">{item.type}</h4>
                <p className="price">
                  ${item.price}
                  {period === Periods.monthly ? "/mo" : "0/yr"}
                </p>
                {period === Periods.yearly && (
                  <p className="free">2 months free</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="period">
          <p className={period !== Periods.monthly ? "no-active" : ""}>
            Monthly
          </p>
          <div className="switch" onClick={() => dispatch(updatePeriod())}>
            <div
              className={period !== Periods.monthly ? "ball rigth" : "ball"}
            ></div>
          </div>
          <p className={!(period !== Periods.monthly) ? "no-active" : ""}>
            Yearly
          </p>
        </div>
      </div>

      <FormButtons onSubmit={() => dispatch(increment())} />
    </form>
  );
};

export default PlanForm;
