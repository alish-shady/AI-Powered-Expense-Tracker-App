import AppHeaderLayout from "#components/layout/AppHeaderLayout";
import { HiOutlineUser } from "react-icons/hi2";
import { useUser } from "../hooks/useUser";

export default function ProfileHeader() {
  const { user } = useUser();
  console.log({ user });
  const fullName = user?.user_metadata?.fullName;
  const email = user.email.split("@").at(0);
  return (
    <AppHeaderLayout>
      <HiOutlineUser className="text-primary p-2 text-8xl" />
      <span>{fullName}</span>
      <span className="text-one text-xs">{email}</span>
    </AppHeaderLayout>
  );
}
