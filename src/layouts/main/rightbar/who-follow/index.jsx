import SidebarSection from "../../../../components/sidebar-section";
import { whoFollowUsers } from "../../../../mock";
import { useAccount } from "../../../../store/auth/hooks";
import UserCard from "../../../../components/user-card";

export default function WhoFollow() {
  const user = useAccount();

  return (
    <SidebarSection
      title="Who to follow"
      more={`/connect_people?user_id=${user.id}`}
    >
      {whoFollowUsers.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </SidebarSection>
  );
}
