import { useDispatch, useSelector } from "react-redux";
// import { addOnns } from "../steps";
import FormButtons from "./FormButtons";
import { RootState } from "../store/store";
import { updateAddOns } from "../slices/addonsSlice";
import { increment } from "../slices/counterSteps";
import { Periods } from "../steps";

const AddOnsForm = () => {
  const {
    addOnds,
    plan: { period },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <form>
      <div className="add-form">
        {addOnds.map((item) => (
          <div
            className={item.state ? "item active" : "item"}
            key={item.title}
            onClick={() => dispatch(updateAddOns(item.type))}
          >
            <div className="content">
              <div className="check">
                <input className="input" type="checkbox" checked={item.state} />
              </div>

              <div>
                <p className="title">{item.title}</p>
                <p className="subtitle">{item.subtitle}</p>
              </div>
            </div>

            <div>
              <p className="price">
                ${item.price}
                {period === Periods.monthly ? "/mo" : "0/yr"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <FormButtons onSubmit={() => dispatch(increment())} />
    </form>
  );
};

export default AddOnsForm;
