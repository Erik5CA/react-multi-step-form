import AddOnsForm from "./AddOnsForm";
import FinalMessage from "./FinalMessage";
import PersonalForm from "./PersonalForm";
import PlanForm from "./PlanForm";
import SummaryForm from "./SummaryForm";

const SwichForm = ({ step }: { step: number }) => {
  switch (step) {
    case 0:
      return <PersonalForm />;
    case 1:
      return <PlanForm />;
    case 2:
      return <AddOnsForm />;
    case 3:
      return <SummaryForm />;
    default:
      return <FinalMessage />;
  }
};

export default SwichForm;
