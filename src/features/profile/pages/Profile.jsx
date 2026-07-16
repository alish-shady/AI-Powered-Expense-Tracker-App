import ProfileHeader from "../components/ProfileHeader";
import ProfileMenu from "../components/ProfileMenu";
import AppLayout from "../../../components/layout/AppLayout";

export default function Profile() {
  return (
    <AppLayout.Main>
      <ProfileHeader />
      <ProfileMenu />
    </AppLayout.Main>
  );
}
