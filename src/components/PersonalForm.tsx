import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import FormButtons from "./FormButtons";
import { SubmitHandler, useForm } from "react-hook-form";
import { PersonalInfoState, update } from "../slices/personalInfoSlice";
import { increment } from "../slices/counterSteps";

const PersonalForm = () => {
  const personalInfo = useSelector((state: RootState) => state.personalInfo);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoState>({
    defaultValues: {
      name: personalInfo.name,
      email: personalInfo.email,
      phone: personalInfo.phone,
    },
  });

  const onSubmit: SubmitHandler<PersonalInfoState> = (data) => {
    console.log(data);
    dispatch(update(data));
    dispatch(increment());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="personal-form">
        <div>
          <div className="labels-container">
            <label htmlFor="">Name</label>
            {errors.name && (
              <span className="error">This field is required</span>
            )}
          </div>
          <input
            className={errors.name ? "error-input" : ""}
            type="text"
            placeholder="Your name"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <div className="labels-container">
            <label htmlFor="">Email Address</label>
            {errors.email && (
              <span className="error">This field is required</span>
            )}
          </div>
          <input
            className={errors.email ? "error-input" : ""}
            type="email"
            placeholder="Your email address"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <div className="labels-container">
            <label htmlFor="">Phone Number</label>
            {errors.phone && (
              <span className="error">This field is required</span>
            )}
          </div>
          <input
            className={errors.phone ? "error-input" : ""}
            type="number"
            placeholder="Your phone number"
            {...register("phone", { required: true })}
          />
        </div>
      </div>

      <FormButtons />
    </form>
  );
};

export default PersonalForm;
