interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const Section = ({ title, children, className = "" }: SectionProps) => {
  return (
    <section className={`grid grid-cols-1 mobile:grid-cols-4 gap-4 mobile:gap-8 ${className}`}>
      <h2 className="text-sm">{title}</h2>
      <div className="mobile:col-span-3">
        {children}
      </div>
    </section>
  )
}
