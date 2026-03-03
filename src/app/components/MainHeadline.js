export default function MainHeadline({ text, colored }) {
  return (
    <h1 className="text-[#1e1e28] text-6xl text-[clamp(2.25rem,-3.3152rem+8.6957vw,3.75rem)] max-md:text-4xl max-md:leading-[50px] leading-[clamp(3.125rem,-1.9764rem+7.971vw,4.5rem)] font-semibold mb-4">
      {text}
      <span className="text-[#797d85]">{colored}</span>
    </h1>
  );
}
