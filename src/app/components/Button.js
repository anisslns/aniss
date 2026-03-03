export default function Button({
  className,
  href,
  text,
  backgroundColor,
  textColor,
  hoverEffect,
  type,
}) {
  return (
    <button
      type={type}
      className={`${className} ${backgroundColor} ${hoverEffect} ${textColor} rounded-4xl font-medium ease-in-out duration-1000 transition  cursor-pointer py-3 px-6 `}
    >
      <a href={href}>{text}</a>
    </button>
  );
}
