import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupList } from './group-list';
import { GROUP_COLLECTION } from '../storage-config';

export async function groupCreate(groupName: string): Promise<void> {
  try {
    const storedGroups = await groupList();

    const storageValue = JSON.stringify([...storedGroups, groupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storageValue);
  } catch (error) {
    throw error;
  }
}
