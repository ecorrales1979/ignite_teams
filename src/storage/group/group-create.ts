import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupList } from './group-list';
import { GROUP_COLLECTION } from '../storage-config';
import { AppError } from '@/utils/app-error';

export async function groupCreate(groupName: string): Promise<void> {
  try {
    const storedGroups = await groupList();

    const groupAlreadyExists = storedGroups.includes(groupName);

    if (groupAlreadyExists) {
      throw new AppError('That group name is already been used');
    }

    const storageValue = JSON.stringify([...storedGroups, groupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storageValue);
  } catch (error) {
    throw error;
  }
}
