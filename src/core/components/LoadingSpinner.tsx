const LoadingSpinner = ({ size, fullpage }: { size?: number; fullpage?: boolean }) => {
  if (fullpage) {
    <div className="h-screen flex justify-center items-center bg-slate-900">
      <div
        style={size ? { height: `${size / 4}rem`, width: `${size / 4}rem` } : {}}
        className={`${size !== undefined ? "" : "h-16 w-16"} inline-block animate-ping rounded-full bg-blue-500`}
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
    </div>;
  } else {
    return (
      <div
        style={size ? { height: `${size / 4}rem`, width: `${size / 4}rem` } : {}}
        className={`${size !== undefined ? "" : "h-16 w-16"} inline-block animate-ping rounded-full bg-blue-500`}
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
    );
  }
};

export default LoadingSpinner;
