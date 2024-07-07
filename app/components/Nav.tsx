import { Section } from "../page";

export default function Nav({
  handleClick,
  workInView,
  contactInView,
}: {
  handleClick: (section: Section) => void;
  workInView: boolean;
  contactInView: boolean;
}) {
  return (
    <nav>
      <ul className="fixed bottom-8 md:bottom-14 inset-x-0 m-auto w-fit h-11 md:h-14 backdrop-blur-3xl bg-[#c6c6c61f] rounded-full py-1.5 px-3.5 flex justify-center items-center font-medium tracking-tight text-sm capitalize z-50">
        <ListItem
          text="work"
          isInView={workInView}
          handleClick={() => handleClick("work")}
        />
        <ListItem
          text="contact"
          isInView={contactInView}
          handleClick={() => handleClick("contact")}
        />
      </ul>
    </nav>
  );
}

function ListItem({
  text,
  handleClick,
  isInView,
}: {
  text: string;
  handleClick: () => void;
  isInView: boolean;
}) {
  return (
    <li
      onClick={() => handleClick()}
      className={`relative bg-[#c6c6c61f] ${
        isInView ? `px-5` : `px-3`
      } py-1 rounded-full cursor-pointer ${text === "work" && `mr-4`}`}
    >
      {isInView && (
        <span className="absolute left-2.5 -top-2 text-2xl font-black">.</span>
      )}
      <span className={`${isInView && `ml-1.5`}`}>{text}</span>
    </li>
  );
}
