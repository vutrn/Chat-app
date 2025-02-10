import { Camera, Mail, User } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64 = reader.result;
      setSelectedImg(base64);
      await updateProfile({ profilePic: base64 });
    };
  };
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-2xl space-y-8 p-4">
        <div className="bg-base-300 space-y-8 rounded-xl p-6">
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-base-content/60">Update your profile</p>
          </div>

          {/* AVATAR UPLOAD SECTION */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full border-4 object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className={`bg-base-content absolute right-0 bottom-0 cursor-pointer rounded-full p-2 transition-all duration-200 hover:scale-105 ${isUpdatingProfile ? "pointer-events-none animate-pulse" : ""} `}
              >
                <Camera className="text-base-200 h-5 w-5" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* PROFILE DETAILS */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <User className="h-4 w-4" />
                Full Name
              </div>
              <p className="bg-base-200 rounded-lg border px-4 py-2.5">
                {authUser?.fullname}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Mail className="h-4 w-4" />
                Email Address
              </div>
              <p className="bg-base-200 rounded-lg border px-4 py-2.5">
                {authUser?.email}
              </p>
            </div>
          </div>

          <div className="bg-base-300 mt-6 rounded-xl p-6">
            <h2 className="mb-4 text-lg font-medium">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-zinc-700 py-2">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
