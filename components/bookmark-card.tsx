import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import parseISO from 'date-fns/parseISO';
import { tr } from 'date-fns/locale';
import A from 'components/a';

function BookmarkCard(item) {
  return (
    <div key={item._id}>
      <h3 className="text-lg leading-6 font-bold text-highlight">
        <A href={item.link} blank>
          {item.title}
        </A>
      </h3>

      {/*<p className="text-gray-500 truncate">{item.excerpt}</p>*/}

      <div className="mt-1 flex items-center text-gray-500">
        <span>{item.domain}</span>
        <span>・</span>
        <span>
          {formatDistanceToNowStrict(parseISO(item.created), {
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>
    </div>
  );
}

export default BookmarkCard;
