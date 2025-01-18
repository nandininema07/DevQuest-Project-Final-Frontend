export function FeatureSection({ title, children }) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-6">
        {children}
      </div>
    </section>
  )
}

