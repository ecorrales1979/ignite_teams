import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '../storage-config'

export async function groupList(): Promise<string[]> {
  const storageValue = await AsyncStorage.getItem(GROUP_COLLECTION)

  if (storageValue === null || storageValue === '') return []

  return JSON.parse(storageValue)
}
