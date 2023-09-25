import Topic from "./topic";
import { topics } from "../../../../utils/const";
export default function Topics() {
  return (
    <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center">
        Trends for you
      </h5>
      <div className="grid">
        {topics.map((topic, index) => (
          <Topic item={topic} key={index} />
        ))}
      </div>
      <a
        class="h-[52px] flex rounded-b-2xl items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]"
        href="/trends"
      >
        Daha fazla göster
      </a>
    </section>
  );
}
