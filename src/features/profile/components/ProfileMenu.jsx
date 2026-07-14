import {
  Item,
  ItemMedia,
  ItemActions,
  ItemGroup,
  ItemTitle,
  ItemDescription,
  ItemContent,
} from "#components/ui/item";
import { useSignout } from "@/features/authentication/hooks/useSignout";
import { IoExitOutline } from "react-icons/io5";
import { useState } from "react";
import ProfileMenuItem from "#components/common/ProfileMenuItem";
import ChangeEmailModal from "./ChangeEmailModal";
import { LockKeyhole, LogOut, Mail, Palette } from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import ThemeToggle from "./ThemeToggle";

export default function ProfileMenu() {
  const { isPending, signout } = useSignout();
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  return (
    <>
      <ItemGroup>
        <ProfileMenuItem
          onClick={signout}
          Icon={LogOut}
          className="hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive"
        >
          {isPending ? "Logging Out..." : "Logout"}
        </ProfileMenuItem>
        <ProfileMenuItem
          className="hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          onClick={() => setShowChangeEmail(true)}
          Icon={Mail}
        >
          Change Email
        </ProfileMenuItem>
        <ProfileMenuItem
          className="hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          onClick={() => setShowChangePassword(true)}
          Icon={LockKeyhole}
        >
          Change Password
        </ProfileMenuItem>
        <ProfileMenuItem
          className="hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          Icon={Palette}
        >
          <ThemeToggle />
        </ProfileMenuItem>
        <Item
          variant="outline"
          size="sm"
          className="hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive"
        >
          <div className="flex cursor-pointer gap-4">
            <ItemMedia variant="icon">
              <IoExitOutline />
            </ItemMedia>
            <ItemActions>Delete Account</ItemActions>
          </div>
        </Item>
        <Item variant="outline" size="sm">
          <ItemContent>
            <ItemTitle>Member Since:</ItemTitle>
            <ItemDescription>Description</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
      {showChangeEmail && <ChangeEmailModal setShowForm={setShowChangeEmail} />}
      {showChangePassword && (
        <ChangePasswordModal setShowForm={setShowChangePassword} />
      )}
    </>
  );
}
