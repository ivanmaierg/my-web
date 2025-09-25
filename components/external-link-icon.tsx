interface ExternalLinkIconProps {
  className?: string
  size?: number
}

export const ExternalLinkIcon = ({ className = "w-3 h-3", size }: ExternalLinkIconProps) => {
  return (
    <svg 
      className={className}
      width={size}
      height={size}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
      />
    </svg>
  )
}
