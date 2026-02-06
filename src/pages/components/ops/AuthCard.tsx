import type { ReactNode } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from './AuthCard.styles'

type AuthCardProps = {
  title: string
  subtitle: string
  children: ReactNode
}

const AuthCard = ({ title, subtitle, children }: AuthCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </CardHeader>
    <CardBody>{children}</CardBody>
  </Card>
)

export default AuthCard
