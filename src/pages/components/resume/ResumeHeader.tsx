import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLeft, HeaderLogo, HeaderLogoIcon, HeaderNav, HeaderNavLink, HeaderRight, HeaderUserInfo, HeaderUserName, HeaderUserPlan, HeaderUserAvatar } from './ResumeHeader.styles'

const ResumeHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLogo to="/">
          <HeaderLogoIcon>
            <i className="fa-solid fa-bolt"></i>
          </HeaderLogoIcon>
          <span>Vinsign AI</span>
        </HeaderLogo>
      </HeaderLeft>
      <HeaderNav>
        <HeaderNavLink to="/resume-report" $isActive>
          분석 대시보드
        </HeaderNavLink>
        <HeaderNavLink to="/resume-management">이력서 관리</HeaderNavLink>
        <HeaderNavLink to="/talent-profile">인재상 설정</HeaderNavLink>
        <HeaderNavLink to="/report-archive">리포트 보관함</HeaderNavLink>
      </HeaderNav>
      <HeaderRight>
        <HeaderUserInfo>
          <HeaderUserName>인사관리팀 김철수</HeaderUserName>
          <HeaderUserPlan>Premium Plan</HeaderUserPlan>
        </HeaderUserInfo>
        <HeaderUserAvatar
          src="https://vinsign.app/resources/avatars/avatar-1.png"
          alt="Profile"
        />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default ResumeHeader
