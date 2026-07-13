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
import { useChangeUserEmail } from "../hooks/useChangeUserEmail";
import { useState } from "react";
import Modal from "#components/common/Modal";
import Input from "#components/common/Input";
import ProfileMenuItem from "#components/common/ProfileMenuItem";
import ChangeEmailForm from "./ChangeEmailForm";

export default function ProfileMenu() {
  const { isPending, signout } = useSignout();
  // const {
  //   data,
  //   isSuccess,
  //   isPending: isChanging,
  //   changeEmail,
  // } = useChangeUserEmail();
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  return (
    <>
      <ItemGroup>
        <ProfileMenuItem
          onClick={signout}
          Icon={IoExitOutline}
          className="hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive"
        >
          {isPending ? "Logging Out..." : "Logout"}
        </ProfileMenuItem>
        <ProfileMenuItem
          className="hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          onClick={() => setShowChangeEmail({ show: true })}
          Icon={IoExitOutline}
        >
          Change Email
        </ProfileMenuItem>
        <Item
          variant="outline"
          size="sm"
          className="hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
        >
          <div className="flex cursor-pointer gap-4">
            <ItemMedia variant="icon">
              <IoExitOutline />
            </ItemMedia>
            <ItemActions>Change Password</ItemActions>
          </div>
        </Item>
        <Item
          variant="outline"
          size="sm"
          className="hover:border-accent/50 hover:bg-accent/20 hover:text-accent-foreground"
        >
          <div className="flex cursor-pointer gap-4">
            <ItemMedia variant="icon">
              <IoExitOutline />
            </ItemMedia>
            <ItemActions>Theme Toggle</ItemActions>
          </div>
        </Item>
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
      {showChangeEmail && <ChangeEmailForm setShowForm={setShowChangeEmail} />}
    </>
  );
}
