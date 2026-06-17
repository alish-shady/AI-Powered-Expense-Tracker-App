import { HiOutlineUser } from "react-icons/hi2";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="rounded-full bg-four p-4 text-6xl text-three">
        <HiOutlineUser />
      </span>

      <h2>YOUR NAME</h2>
      <h3 className="text-xs text-one">YOUR USERNAME</h3>
    </div>
  );
}
