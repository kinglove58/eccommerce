import { useContext, useState, useEffect } from "react";
import { AuthContent } from "../context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  const { user, updateUserProfile } = useContext(AuthContent);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFullName(user.displayName || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const profileUpdates = {
      displayName: fullName,
      photoURL: profilePicture
        ? URL.createObjectURL(profilePicture)
        : user.photoURL,
    };

    updateUserProfile(profileUpdates)
      .then(() => {
        alert("Profile updated successfully");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Edit Profile</h1>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div className="flex justify-center">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <FaUserCircle className="w-20 h-20 text-gray-500" />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              onChange={handleProfilePictureChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update Profile
          </button>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Profile;
