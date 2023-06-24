import AsyncStorage from '@react-native-async-storage/async-storage'

import { groupList } from './group-list'

import {
  GROUP_COLLECTION,
  getPlayerCollectionName
} from '@/storage/storage-config'

export async function groupDelete(groupToDelete: string): Promise<void> {
  const storedGroups = await groupList()

  const groups = storedGroups.filter((group) => group !== groupToDelete)

  await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))

  const collectionName = getPlayerCollectionName(groupToDelete)

  await AsyncStorage.removeItem(collectionName)
}
