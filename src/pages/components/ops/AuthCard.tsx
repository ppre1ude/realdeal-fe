import type { ReactNode } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from './AuthCard.styles'

type AuthCardProps = {
  title: string
  subtitle: string
  children: ReactNode
  offsetTop?: number
}

const AuthCard = ({ title, subtitle, children, offsetTop }: AuthCardProps) => (
  <Card $offsetTop={offsetTop}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </CardHeader>
    <CardBody>{children}</CardBody>
  </Card>
)

export default AuthCard
