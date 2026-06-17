export default function ListItem({ category, amount, position }) {
  return (
    <li className="bg-one text-three border-four/40 flex items-center justify-between rounded-xl border px-4 py-4 text-sm shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-three/70 text-xs">{position}</span>
        <span className="text-three font-medium">{category}</span>
        <span className="text-three/70 text-xs">{amount}</span>
      </div>

      <div className="flex items-center gap-3 text-xs">
        <span className="text-three/70 hover:text-three cursor-pointer transition-colors">
          Edit
        </span>
        <span className="text-error/80 hover:text-error cursor-pointer transition-colors">
          Delete
        </span>
      </div>
    </li>
  );
}
