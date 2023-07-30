import { css, styled } from 'styled-components'

export const ButtonContainer = styled.button`
  ${({ theme }) => css`
    color: ${theme.purple};
  `}
`
