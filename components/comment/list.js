import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { tr } from 'date-fns/locale';

function CommentList({ comments }) {
  return (
    <div className="space-y-6 mt-10">
      {comments.map((comment) => {
        return (
          <div key={comment.created_at} className="flex space-x-4">
            <div className="flex-shrink-0">
              <img src={comment.picture} width={50} className="rounded-full" />
            </div>

            <div>
              <div className="flex space-x-2">
                <b>{comment.name}</b>
                <time className="text-gray-400 dark:text-gray-600">
                  {formatDistanceToNowStrict(comment.created_at, {
                    locale: tr,
                  })}
                </time>
              </div>

              <div>{comment.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
