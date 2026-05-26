function SectionTitle({ children, icon: Icon, id }) {
  return (
    <h2
      id={id}
      className="section-label mb-3 flex items-center gap-2 text-caption text-ink-muted"
    >
      {Icon ? (
        <Icon aria-hidden="true" className="size-3 shrink-0" />
      ) : null}
      <span>{children}</span>
    </h2>
  )
}

export default SectionTitle
