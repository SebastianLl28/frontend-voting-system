import { useId } from 'react'
import { cn } from '../../helpers/cn'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hookForm: UseFormRegisterReturn<string>
  error?: FieldError | undefined
}

const InputText = ({
  className,
  type = 'text',
  label,
  hookForm,
  error,
  ...args
}: ITextInput) => {
  const id = useId()

  return (
    <div className='relative w-full pb-4'>
      {label ? (
        <label
          htmlFor={id}
          className={`font-semibold ${error ? 'text-red-600' : ''}`}
        >
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        className={cn(
          'w-full rounded border border-gray-400 px-2 py-2',
          className,
          error
            ? 'border-red-500 focus:outline-red-600 focus-visible:outline-red-600'
            : ''
        )}
        {...hookForm}
        {...args}
      />
      {error ? (
        <span className='absolute -bottom-px left-0 text-xs text-red-500'>
          {error.message}
        </span>
      ) : null}
    </div>
  )
}

export default InputText
