export function FeatureCard({ title, children, className = "" }) {
  return (
    <div className={`rounded-xl p-8 ${className}`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}

