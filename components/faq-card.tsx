import cx from "classnames";
import type { Issue } from "types/GithubIssue";

export default function FaqCard(props: Issue) {
  const { title, body } = props;

  return (
    <div className="">
      <div className="">
        <h3 className="font-semibold text-highlight">{title}</h3>
      </div>
      <div className="mt-1">
        <p>{body}</p>
      </div>
    </div>
  );
}
