import Topic from "./topic";
import { topics } from "../../../../utils/const";
import SidebarSection from "../../../../components/sidebar-section";

export default function Topics() {
  return (
    <SidebarSection title="Trends for you" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
