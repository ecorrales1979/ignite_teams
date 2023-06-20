import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '../storage-config';

export async function groupList(): Promise<string[]> {
  try {
    const storageValue = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = storageValue ? JSON.parse(storageValue) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
