import { SocialButtonBase, SocialIcon } from './AuthForm.styles'

type SocialButtonProps = {
  text: string
}

const ChatIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12 4c-4.4 0-8 2.9-8 6.6 0 2.4 1.5 4.6 3.9 5.7l-.7 3.4 3.4-2.1c.4.1.9.1 1.4.1 4.4 0 8-2.9 8-6.6S16.4 4 12 4z"
      fill="currentColor"
    />
  </svg>
)

const SocialButton = ({ text }: SocialButtonProps) => (
  <SocialButtonBase type="button">
    <SocialIcon aria-hidden="true">
      <ChatIcon />
    </SocialIcon>
    {text}
  </SocialButtonBase>
)

export default SocialButton
