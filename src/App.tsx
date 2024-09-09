import aside from "./assets/images/bg-sidebar-desktop.svg";
import { StepInfo } from "./components/StepInfo";
import { steps } from "./steps";
import SwichForm from "./components/SwichForm";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
function App() {
  const step = useSelector((state: RootState) => state.counterSteps.step);

  return (
    <div className="main">
      <aside className="steps">
        <img src={aside} />
        <div className="steps-content">
          {steps.map((val, ind) => (
            <StepInfo
              key={val.label}
              label={val.label}
              index={ind}
              isActive={step === ind}
            />
          ))}
        </div>
      </aside>

      <div className="container-form">
        {step < 4 && (
          <div className="header">
            {step < 4 && (
              <>
                <h1 className="title">{steps[step].title}</h1>
                <p className="subtitle">{steps[step].subtitle}</p>
              </>
            )}
          </div>
        )}

        <SwichForm step={step} />
      </div>
    </div>
  );
}

export default App;
