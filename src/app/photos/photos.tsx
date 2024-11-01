function Photo({ url }: { url: string }) {
  return (
    <img src={`https://${url}`} alt="" className="rounded-xl sm:rounded-2xl" />
  );
}

function Photos({ data }: { data: string[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:gap-16">
      {data.map((url: any, index) => {
        return <Photo key={index} url={url} />;
      })}
    </div>
  );
}

export default Photos;
