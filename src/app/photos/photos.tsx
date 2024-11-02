export default function Photos({ data }: { data: string[] }) {
  return (
    <div className="grid items-end gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((url: any, index) => {
        return <Photo key={index} url={url} />;
      })}
    </div>
  );
}

function Photo({ url }: { url: string }) {
  return (
    // <figure className="flex h-full items-center rounded-md bg-white p-4">
    <img src={`https://${url}`} alt="" className="w-full rounded-2xl" />
    // </figure>
  );
}
