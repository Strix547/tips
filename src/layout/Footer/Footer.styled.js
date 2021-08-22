import styled from 'styled-components'

import { Wrapper, Text } from 'styled'
import { FormField } from 'ui/FormField/FormField.styled'
import { Button } from 'ui/Button/Button.styled'

export { Wrapper, Text }

export const Footer = styled.footer`
  background: var(--color-gray-600);
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 40px;
`

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  address {
    margin-top: 30px;
    line-height: 22px;
    color: var(--color-gray-500);
  }
`

export const PhoneLink = styled.a`
  margin-top: 10px;
  font-weight: 500;
  color: var(--color-blue-100);
  line-height: 22px;
`

export const EmailLink = styled.a`
  margin-top: 10px;
  color: var(--color-primary-200);
  line-height: 22px;
`

export const NavList = styled.ul`
  li {
    line-height: 22px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`

export const TopRight = styled.div`
  width: 269px;
`

export const Consultation = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 40px 15px 30px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  box-sizing: border-box;

  svg {
    flex-shrink: 0;
  }
`

export const ConsultationRight = styled.div`
  margin-left: 10px;

  ${Text} {
    font-size: var(--font-size-sm);
    line-height: 20px;

    &:nth-child(1) {
      font-weight: 500;
      color: #1b1d1f;
    }

    &:nth-child(2) {
      color: var(--color-gray-500);
    }
  }
`

export const SubscriptionForm = styled.form`
  position: relative;
  margin-top: 20px;

  ${FormField} .form-field-input-root {
    width: 100%;
    height: 50px;
    padding-right: 50px;
    background: #fff;
    border: 1px solid var(--color-gray-400);
    border-radius: 36px;
  }

  ${Button} {
    position: absolute;
    right: 5px;
    bottom: 5px;
    min-width: 40px;
    padding: 0;
    height: 40px;
    border-radius: 50%;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #dedee2;
`

export const Copyright = styled.p`
  font-size: var(--font-size-sm);
`

export const PaymentServices = styled.div`
  display: flex;
  align-items: center;

  ${Text} {
    font-size: var(--font-size-sm);
    color: var(--color-gray-300);
  }

  ul {
    display: flex;
    margin-left: 20px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      height: 36px;

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`

export const NetworkList = styled.ul`
  display: flex;

  li {
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    transition: 0.3s;

    svg,
    svg path {
      transition: 0.3s;
    }

    &:hover {
      background: #e5f4ed;
      transition: 0.3s;

      svg {
        fill: var(--color-primary-200);
        transition: 0.3s;

        path {
          fill: var(--color-primary-200);
          transition: 0.3s;
        }
      }
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`
