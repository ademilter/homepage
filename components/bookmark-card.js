import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'
import A from '@comp/a'

function BookmarkCardMeta(item) {
  return (
    <div className="flex items-center text-gray-500 mt-2">
      <span>{item.domain}</span>
      <span>・</span>
      <span>
        {formatDistanceToNowStrict(parseISO(item.created), {
          addSuffix: true,
          locale: tr
        })}
      </span>
    </div>
  )
}

function BookmarkCard(item) {
  return (
    <div key={item._id} className="flex">
      <div className="hidden sm:block mr-6 flex-shrink-0 w-44">
        <img src={item.cover} alt={item.title} />
      </div>

      <div className="flex-grow">
        <h4 className="font-bold">
          <A href={item.link} blank>
            {item.title}
          </A>
        </h4>

        <p className="text-gray-500 truncate">{item.excerpt}</p>

        <BookmarkCardMeta {...item} />
      </div>
    </div>
  )
}

export default BookmarkCard
