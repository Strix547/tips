import { action, makeObservable } from 'mobx'

import * as UserApi from 'api/user'

export class UserStore {
  getMyId = async () => {
    const data = await UserApi.getMyId()
  }

  constructor() {
    makeObservable(this, {
      getMyId: action.bound
    })
  }
}
