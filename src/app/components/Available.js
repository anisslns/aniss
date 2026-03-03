export default function Available({text}) {
  return (
    <div className="bg-[#f5fbf7] w-fit py-2 px-4 rounded-4xl flex items-center gap-2 mb-6">
      <div className="relative w-2 h-2 flex items-center justify-center">
        {/* Pulsing circle */}
        <div className="absolute w-full h-full rounded-full bg-green-600 opacity-50 animate-ping-custom" />

        {/* Solid center circle */}
        <div className="w-2 h-2 rounded-full bg-green-600" />
      </div>
      <span className="text-[#008a1e]">{text}</span>
    </div>
  );
}
