import { ElementType } from 'react'

export default function withAuth(WrappedComponent: ElementType) {
  const Wrapper = ({ ...props }) => {
    return <WrappedComponent {...props} />
  }

  return Wrapper
}