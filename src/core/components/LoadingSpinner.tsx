interface LoadingSpinnerProps {
  size?: number;
  fullpage?: boolean;
}

const LoadingSpinner = ({ size, fullpage }: LoadingSpinnerProps) => {
  if (fullpage) {
    return (
      <div className="h-screen flex justify-center items-center dark:bg-slate-950">
        <div
          style={
            size
              ? { height: `${size / 4}rem`, width: `${size / 4}rem` }
              : {
                  height: "4rem",
                  width: "4rem",
                }
          }
          className={`${size !== undefined ? "" : "size-16"} inline-block animate-spin rounded-full border-4 border-solid border-slate-950 border-e-transparent dark:border-slate-50 dark:border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={
          size
            ? { height: `${size / 4}rem`, width: `${size / 4}rem` }
            : {
                height: "4rem",
                width: "4rem",
              }
        }
        className={`${size !== undefined ? "" : "size-16"} inline-block animate-spin rounded-full border-4 border-solid border-slate-950 border-e-transparent dark:border-slate-50 dark:border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
    );
  }
};

export default LoadingSpinner;
