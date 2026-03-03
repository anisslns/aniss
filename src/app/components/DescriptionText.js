export default function DescriptionText({ text, className }) {
  return (
    <p className={`${className} font-light text-[clamp(1rem,0.5362rem+0.7246vw,1.125rem)] text-[#47474f] max-md:text-[16px] text-lg max-md:text-base leading-7 max-w-3xl`}>
      {text}
    </p>
  );
}
