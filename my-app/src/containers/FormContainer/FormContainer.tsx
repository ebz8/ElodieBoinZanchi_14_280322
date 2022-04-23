import { FC, createElement } from "react"
import { ReactNode } from "react"

export type classNameType = string
export type childrenType = ReactNode

export interface IFormProps {
  defaultValues?: any
  children?: childrenType
  buttonLabel?: string
  onSubmit?: any
  handleSubmit?: any
  register?: any
  className?: classNameType
}

const FormContainer: FC<IFormProps> = ({
  defaultValues,
  buttonLabel = "Submit",
  children,
  onSubmit,
  handleSubmit,
  register,
  className,
  ...rest
}) => {
  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child: any) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default FormContainer
