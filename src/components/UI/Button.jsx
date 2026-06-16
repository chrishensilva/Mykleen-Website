export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:   'bg-mykleen-blue text-white shadow-lg hover:bg-mykleen-blue-light hover:shadow-xl focus:ring-mykleen-blue',
    secondary: 'bg-transparent text-mykleen-blue border-2 border-mykleen-blue hover:bg-mykleen-blue hover:text-white focus:ring-mykleen-blue',
    white:     'bg-white text-mykleen-blue shadow-lg hover:shadow-xl focus:ring-white',
    green:     'bg-mykleen-green text-white shadow-lg hover:bg-mykleen-green-light hover:shadow-xl focus:ring-mykleen-green',
    ghost:     'bg-white/10 text-white border border-white/30 hover:bg-white/20 focus:ring-white',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
