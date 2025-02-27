import { FaRegUserCircle } from "react-icons/fa";
const UserProfile = ({ user }) => {
    return (
      <div className="flex items-center gap-x-2 pr-3">
        <FaRegUserCircle className="w-8 h-8 "/>
        <h2 className="text-lg font-semibold">{user.user.username}</h2>
      </div>
    );
  };

  export default UserProfile;