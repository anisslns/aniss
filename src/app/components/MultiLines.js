function MultiLines({ children, className }) {
  return (
    <div
      className={`${className} space-y-[18px] font-light text-[#47474f] max-w-3xl leading-7 text-[clamp(1rem,0.5362rem+0.7246vw,1.125rem)]`}
    >
      {children}
    </div>
  );
}

export default MultiLines;
