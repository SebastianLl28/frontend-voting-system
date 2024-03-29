import { cn } from '../../helpers/cn'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  children,
  type = 'button',
  disabled = false,
  className,
  ...props
}: IButton) => {
  return (
    <button
      className={cn(
        'rounded-md bg-blue-600 px-4 py-2 duration-100 hover:bg-blue-500',
        className
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
