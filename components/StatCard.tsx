export default function StatCard(props: { title: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="text-sm text-gray-600">{props.title}</div>
      <div className="mt-1 text-2xl font-semibold">{props.value}</div>
      {props.hint ? <div className="mt-1 text-xs text-gray-500">{props.hint}</div> : null}
    </div>
  );
}


