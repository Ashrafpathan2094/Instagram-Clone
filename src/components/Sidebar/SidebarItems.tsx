import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;
