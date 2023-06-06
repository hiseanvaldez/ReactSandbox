const SegmentedProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex">
        {steps.map((step, idx) => {
          const isNotLast = idx !== steps.length - 1;

          return (
            <div key={idx} className={`flex ${isNotLast && "w-full"}`}>
              <div className="relative m-1 flex w-min flex-col items-center">
                <div
                  className={`h-6 w-6 rounded-full border-[5px] transition-all duration-1000 ${
                    idx <= currentStep ? "border-rose-400" : "border-gray-400"
                  }`}
                />
                <div className="absolute top-8 whitespace-nowrap">{step}</div>
              </div>
              {isNotLast && (
                <div className="mt-[14px] flex h-[3px] w-full rounded bg-gray-200">
                  <div
                    className="h-[3px] bg-rose-400"
                    style={{
                      width: idx < currentStep ? "100%" : "0",
                      transition: "width 1s ease-in-out",
                    }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SegmentedProgressBar;
