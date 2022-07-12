import { memo, ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const PageTitle = ({ children }: IProps) => {
  return (
    <h1>{children}</h1>
  )
}

export default memo(PageTitle);
