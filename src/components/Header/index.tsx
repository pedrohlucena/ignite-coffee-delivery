import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import shoopingCart from '../../assets/shopping-cart.svg'
import { MapPin } from '@phosphor-icons/react'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
      </NavLink>

      <S.Actions>
        <S.LocationButton>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </S.LocationButton>

        <NavLink to="/checkout" title="Carrinho">
          <S.CartButton>
            <img src={shoopingCart} alt="Carrinho de compras" />
          </S.CartButton>
        </NavLink>
      </S.Actions>
    </S.HeaderContainer>
  )
}
