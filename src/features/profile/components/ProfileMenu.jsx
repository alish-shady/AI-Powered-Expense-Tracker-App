import { IoExitOutline } from "react-icons/io5";

export default function ProfileMenu({ onLogout, isPending }) {
  return (
    <ul
      className={`flex flex-col gap-2 ${isPending ? "animate-custom-pulse" : ""}`}
    >
      <li
        onClick={onLogout}
        className="hover:bg-four/10 hover:text-one flex cursor-pointer items-center gap-6 rounded-xl p-2 text-sm duration-200"
      >
        <IoExitOutline />
        <span>{isPending ? "Logging Out..." : "Logout"}</span>
      </li>
    </ul>
  );
}
