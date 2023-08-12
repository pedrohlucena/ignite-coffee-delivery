import { styled, css } from 'styled-components'

const BENEFIT_CIRCLE_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

export type BenefitCircleColor = keyof typeof BENEFIT_CIRCLE_COLORS

interface BenefitCircleProps {
  circleColor: BenefitCircleColor
}

export const HomeContainer = styled.div``

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 36.75rem;
    gap: 1rem;
    align-items: flex-start;

    > h1 {
      color: ${theme['base-title']};

      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
    }

    > p {
      align-self: stretch;
      color: ${theme['base-subtitle']};
      font-size: 1.25rem;
      margin-bottom: 4.13rem;
    }
  `}
`

export const FindPerfectCoffee = styled.div``

export const Apresentation = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.88rem 0 0 0;
`

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.4375rem;
  height: 5.25rem;
  flex-shrink: 0;
`

export const BenefitsGroup = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1.25rem;
`

export const Benefit = styled.span`
  ${({ theme }) => css`
    display: flex;
    width: 14.4375rem;
    align-items: center;
    gap: 0.75rem;

    flex: 1 0 0;
    /* 
    color: var(--base-text, #574F4D);


    font-family: Roboto;
    font-size: 1rem;
    font-style: normal; 
    font-weight: 400;
    line-height: 130%; */
  `}
`

export const BenefitCircle = styled.span<BenefitCircleProps>`
  ${({ theme, circleColor }) => css`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 62.5rem;
    background: ${theme[BENEFIT_CIRCLE_COLORS[circleColor]]};

    > svg {
      fill: ${theme.background};
    }
  `}
`
