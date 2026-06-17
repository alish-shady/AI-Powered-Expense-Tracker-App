import { IoNotificationsOutline } from "react-icons/io5";
import Heading from "./Heading";
import { useUser } from "../../features/profile/hooks/useUser";

export default function HomeHeader() {
  const { user } = useUser();
  const fullName = user?.user_metadata?.fullName || "Guest";

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <span className="text-text-1/50 text-xs font-medium uppercase tracking-wider">
          Welcome
        </span>
        <Heading as="h3" className="text-one leading-tight">
          {fullName}
        </Heading>
      </div>
      <button className="bg-one/10 text-one hover:bg-one/20 relative flex items-center justify-center rounded-xl p-2.5 transition-all active:scale-95">
        <IoNotificationsOutline className="text-2xl" />
        <span className="bg-error absolute right-2.5 top-2 h-2 w-2 rounded-full ring-2 ring-white"></span>
      </button>
    </div>
  );
}
