import ProfileHeader from "../components/ProfileHeader";
import ProfileMenu from "../components/ProfileMenu";
import AppLayout from "../../../components/layout/AppLayout";
import { useSignout } from "../../authentication/hooks/useSignout";

export default function Profile() {
  const { isPending, signout } = useSignout();

  const handleLogout = () => {
    console.log("Logging out...");
    signout();
  };
  return (
    <AppLayout.Main>
      <ProfileHeader />
      <div>
        <ProfileMenu onLogout={handleLogout} isPending={isPending} />
      </div>
    </AppLayout.Main>
  );
}
