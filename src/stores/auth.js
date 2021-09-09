import { observable, action, makeObservable } from 'mobx'

import * as AuthApi from 'api/auth'

export class AuthStore {
  isAuth = false
  confirmCode = null

  sendCode = async (phone) => {
    const data = await AuthApi.sendCode(phone)
  }

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      sendCode: action.bound
    })
  }
}
