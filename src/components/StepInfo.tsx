export const StepInfo = ({
  label,
  index,
  isActive,
}: {
  label: string;
  index: number;
  isActive: boolean;
}) => {
  return (
    <div className="step-info">
      <div className={`number ${isActive ? "active" : ""}`}>{index + 1}</div>
      <div className="content">
        <p className="step">STEP {index + 1}</p>
        <p className="label">{label}</p>
      </div>
    </div>
  );
};
