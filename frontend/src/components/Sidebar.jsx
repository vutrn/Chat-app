import { useEffect, useState } from "react";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { useChatStore } from "../store/useChatStore";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;

  const filteredUsers = showOnlineOnly
    ? users.filter((value) => onlineUsers.includes(value._id))
    : users;

  return (
    <aside className="border-base-300 flex h-full w-20 flex-col border-r transition-all duration-200 lg:w-72">
      <div className="border-base-300 w-full border-b p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="hidden font-medium lg:block">Online Users</span>
        </div>
        {/* ONLINE FILTER TOGGLE */}
        <div className="mt-3 hidden items-center gap-2 lg:flex">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      <div className="w-full overflow-y-auto py-3">
        {filteredUsers.map((value) => (
          <button
            key={value._id}
            onClick={() => setSelectedUser(value)}
            className={`hover:bg-base-200 flex w-full items-center gap-3 p-3 transition-colors ${selectedUser?._id === value._id ? "bg-base-300 ring-base-300 ring-1" : ""} `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={value.profilePic || "/avatar.png"}
                alt={value.fullname}
                className="size-12 rounded-full object-cover"
              />
              {onlineUsers.includes(value._id) && (
                <span className="absolute right-0 bottom-0 size-3 rounded-full bg-green-500 ring-2 ring-zinc-900" />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden min-w-0 text-left lg:block">
              <div className="truncate font-medium">{value.fullname}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(value._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="py-4 text-center text-zinc-500">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
