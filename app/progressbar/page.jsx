"use client";

import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import ProgressBar from "../components/ProgressBar";

const ProgressBarTest = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Container>
      <ProgressBar steps={steps} currentStep={currentStep} />
      <div className="mt-20 flex items-center gap-6">
        <Button
          label="prev"
          onClick={() => setCurrentStep((step) => (step > 0 ? step - 1 : step))}
        />
        Step {currentStep + 1}
        <Button
          label="next"
          onClick={() =>
            setCurrentStep((step) =>
              step < steps.length - 1 ? step + 1 : step
            )
          }
        />
      </div>
    </Container>
  );
};

export default ProgressBarTest;
