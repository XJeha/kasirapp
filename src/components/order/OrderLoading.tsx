export function OrderLoading() {
  return (
    <div role="status" aria-busy="true" aria-label="Memuat formulir pesanan">
      <div className="mb-8 h-14 rounded-xl border border-line bg-white" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="h-[720px] rounded-2xl border border-line bg-white" />
        <div className="h-[420px] rounded-2xl border border-line bg-white" />
      </div>
    </div>
  );
}
