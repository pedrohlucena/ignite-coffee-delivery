import coffeeDeliveryCup from '../../assets/coffee-delivery-cup.svg'
import shoppingCart from '../../assets/white-shopping-cart.svg'

import { Coffee, Package, Timer } from '@phosphor-icons/react'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <S.Apresentation>
        <S.FindPerfectCoffee>
          <S.Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </S.Title>

          <S.Benefits>
            <S.BenefitsGroup>
              <S.Benefit>
                <S.BenefitCircle circleColor="orange">
                  <img src={shoppingCart} alt="" />
                </S.BenefitCircle>
                Compra simples e segura
              </S.Benefit>

              <S.Benefit>
                <S.BenefitCircle circleColor="gray">
                  <Package size={16} weight="fill" />
                </S.BenefitCircle>
                Embalagem mantém o café intacto
              </S.Benefit>
            </S.BenefitsGroup>

            <S.BenefitsGroup>
              <S.Benefit>
                <S.BenefitCircle circleColor="yellow">
                  <Timer size={16} weight="fill" />
                </S.BenefitCircle>
                Entrega rápida e rastreada
              </S.Benefit>

              <S.Benefit>
                <S.BenefitCircle circleColor="purple">
                  <Coffee size={16} weight="fill" />
                </S.BenefitCircle>
                O café chega fresquinho até você
              </S.Benefit>
            </S.BenefitsGroup>
          </S.Benefits>
        </S.FindPerfectCoffee>

        <img src={coffeeDeliveryCup} alt="" />
      </S.Apresentation>
      {/* don't forget to apply the smoky blackground */}
    </S.HomeContainer>
  )
}
