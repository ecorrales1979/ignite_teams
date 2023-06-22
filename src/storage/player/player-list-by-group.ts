import AsyncStorage from '@react-native-async-storage/async-storage'

import { getPlayerCollectionName } from '../storage-config'
import { type PlayerDTO } from './player-dto'

export async function playerListByGroup(group: string): Promise<PlayerDTO[]> {
  const collectionName = getPlayerCollectionName(group)

  const storageValue = await AsyncStorage.getItem(collectionName)

  if (storageValue === null || storageValue === '') return []

  return JSON.parse(storageValue)
}
