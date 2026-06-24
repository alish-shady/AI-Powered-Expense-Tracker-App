import Heading from "./Heading";

export default function Spinner() {
  return (
    <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 justify-items-center gap-2">
      <svg className="aspect-square w-14 animate-spin" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          strokeWidth="2"
          strokeDasharray="47.12 15.71"
          strokeDashoffset="6"
          strokeLinecap="round"
          className="stroke-one"
        />
      </svg>
      <Heading as="h3">Fetching...</Heading>
    </div>
  );
}
