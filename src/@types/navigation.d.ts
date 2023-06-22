import { type ParamListBase } from '@react-navigation/native'

export interface PlayersRouteParams {
  group: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      groups: undefined
      new: undefined
      players: PlayersRouteParams
    }
  }
}
