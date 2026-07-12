import React, { useState, Children } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Stepper.css";

const GOLD = "#d4a017";
const DARK = "#0b0f19";
const MUTED = "#2a3144";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const steps = Children.toArray(children);
  const total = steps.length;

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);

  const isLast = currentStep === total;
  const completed = currentStep > total;

  const goTo = (step) => {
    setCurrentStep(step);
    if (step > total) onFinalStepCompleted();
    else onStepChange(step);
  };

  return (
    <div className="outer-container" {...rest}>
      <div className={`step-circle-container ${stepCircleContainerClassName}`}>
        <div className={`step-indicator-row ${stepContainerClassName}`}>
          {steps.map((_, i) => {
            const step = i + 1;
            return (
              <React.Fragment key={step}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      goTo(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={step}
                    currentStep={currentStep}
                    disableStepIndicators={disableStepIndicators}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      goTo(clicked);
                    }}
                  />
                )}

                {i !== total - 1 && (
                  <StepConnector isComplete={currentStep > step} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className={`step-content-default ${contentClassName}`}>
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            {!completed && (
              <motion.div
                key={currentStep}
                custom={direction}
                variants={{
                  enter: (d) => ({
                    x: d > 0 ? 60 : -60,
                    opacity: 0,
                    scale: 0.985,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  },
                  exit: (d) => ({
                    x: d > 0 ? -60 : 60,
                    opacity: 0,
                    scale: 0.985,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}
              >
                <div className="step-default">
                  {steps[currentStep - 1]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!completed && (
          <div className={`footer-container ${footerClassName}`}>
            <div className={`footer-nav ${currentStep > 1 ? "spread" : "end"}`}>
              {currentStep > 1 && (
                <button
                  className="back-button"
                  onClick={() => {
                    setDirection(-1);
                    goTo(currentStep - 1);
                  }}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}

              <button
                className="next-button"
                onClick={() => {
                  setDirection(1);
                  if (isLast) goTo(total + 1);
                  else goTo(currentStep + 1);
                }}
                {...nextButtonProps}
              >
                {isLast ? "Complete Journey" : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Step({ children }) {
  return children;
}

function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators,
}) {
  const status =
    currentStep === step
      ? "active"
      : currentStep > step
      ? "complete"
      : "inactive";

  return (
    <motion.div
      className="step-indicator"
      animate={status}
      onClick={() =>
        !disableStepIndicators && step !== currentStep && onClickStep(step)
      }
    >
      <motion.div
        className="step-indicator-inner"
        transition={{ duration: 0.2 }}
        variants={{
          inactive: {
            backgroundColor: MUTED,
            color: "#b8b8b8",
            scale: 1,
          },
          active: {
            backgroundColor: GOLD,
            color: DARK,
            scale: 1.06,
          },
          complete: {
            backgroundColor: GOLD,
            color: DARK,
            scale: 1,
          },
        }}
      >
        {status === "complete" ? (
          <CheckIcon className="check-icon" />
        ) : status === "active" ? (
          <div className="active-dot" />
        ) : (
          <span className="step-number">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  return (
    <div className="step-connector">
      <motion.div
        className="step-connector-inner"
        style={{ originX: 0 }}
        initial={false}
        animate={{
          scaleX: isComplete ? 1 : 0,
          backgroundColor: GOLD,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}