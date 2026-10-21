export function CheckoutLoading() {
  return (
    <div role="status" aria-busy="true" aria-label="Memuat data pesanan">
      <div className="mb-6 h-12 rounded-xl border border-line bg-white" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="h-44 rounded-2xl border border-line bg-white" />
          <div className="h-[420px] rounded-2xl border border-line bg-white" />
        </div>
        <div className="h-[460px] rounded-2xl border border-line bg-white" />
      </div>
    </div>
  );
}
