import AsyncStorage from '@react-native-async-storage/async-storage'

import { type PlayerDTO } from './player-dto'
import { getPlayerCollectionName } from '../storage-config'

export async function playerListByGroup(group: string): Promise<PlayerDTO[]> {
  const collectionName = getPlayerCollectionName(group)

  const storageValue = await AsyncStorage.getItem(collectionName)

  if (storageValue === null || storageValue === '') return []

  return JSON.parse(storageValue)
}
