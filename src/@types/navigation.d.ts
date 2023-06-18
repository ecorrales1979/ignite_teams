import { ParamListBase } from '@react-navigation/native';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      };
    }
  }
}
