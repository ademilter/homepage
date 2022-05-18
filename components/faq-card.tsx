import type { Faq } from "types/Faq";

export default function FaqCard(props: Faq) {
  return (
    <div className="">
      <div className="">
        <h3 className="text-highlight font-semibold">{props.bodyHTML}</h3>
      </div>
      <div className="mt-1">
        <p>{props.answer.bodyHTML}</p>
      </div>
    </div>
  );
}
