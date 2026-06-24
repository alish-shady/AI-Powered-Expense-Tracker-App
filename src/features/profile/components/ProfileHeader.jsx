import { HiOutlineUser } from "react-icons/hi2";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="bg-four text-three rounded-full p-4 text-lg">
        <HiOutlineUser />
      </span>

      <h2>YOUR NAME</h2>
      <h3 className="text-one text-xs">YOUR USERNAME</h3>
    </div>
  );
}
