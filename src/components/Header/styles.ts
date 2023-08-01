import { css, styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    background: ${theme['purple-light']};
    color: ${theme['purple-dark']};

    font-size: 0.875rem;

    gap: 0.25rem;

    cursor: pointer;

    > svg {
      fill: ${theme.purple};
    }
  `}
`

export const CartButton = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      padding: 0.5rem;

      border-radius: 0.375rem;
      background: ${theme['yellow-light']};

      cursor: pointer;

      > img {
        width: 1.375rem;
        height: 1.375rem;
      }

      &:after {
        content: '3';

        display: flex;
        width: 1.25rem;
        height: 1.25rem;
        justify-content: center;
        align-items: center;

        position: absolute;
        margin-left: 1rem;
        margin-top: -1rem;

        border-radius: 1000px;
        background: ${theme['yellow-dark']};

        flex-shrink: 0;

        color: ${theme.white};
        text-align: center;

        font-size: 0.75rem;
        font-weight: 700;
      }
    `
  }}
`
