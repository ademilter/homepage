import cx from "classnames";
import type { Issue } from "types/GithubIssue";

export default function FaqCard(props: Issue) {
  const { title, body } = props;

  return (
    <div className="">
      <div className="">
        <h3 className="">{title}</h3>
      </div>
      <div className="">
        <p>{body}</p>
      </div>
    </div>
  );
}
