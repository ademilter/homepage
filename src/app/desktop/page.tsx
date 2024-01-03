import dynamic from "next/dynamic";

const Comp = dynamic(() => import("./comp"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default async function MeetPage() {
  return (
    <div className="grid place-items-center">
      <Comp />
    </div>
  );
}
