import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlayerDTO } from './player-dto';
import { getPlayerCollectionName } from '../storage-config';

export async function playerListByGroup(group: string): Promise<PlayerDTO[]> {
  try {
    const collectionName = getPlayerCollectionName(group);

    const storageValue = await AsyncStorage.getItem(collectionName);

    const players: PlayerDTO[] = storageValue ? JSON.parse(storageValue) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
