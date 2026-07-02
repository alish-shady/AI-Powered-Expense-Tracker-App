import Heading from "#components/common/Heading";
import AppHeaderLayout from "#components/layout/AppHeaderLayout";
import { HiOutlineUser } from "react-icons/hi2";

export default function ProfileHeader() {
  return (
    <AppHeaderLayout>
      <HiOutlineUser className="text-primary p-2 text-xl" />

      <span>YOUR NAME</span>
      <span className="text-one text-xs">YOUR USERNAME</span>
    </AppHeaderLayout>
  );
}
