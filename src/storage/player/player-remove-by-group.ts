import AsyncStorage from '@react-native-async-storage/async-storage'

import { getPlayerCollectionName } from '../storage-config'
import { playerListByGroup } from './player-list-by-group'

export async function playerRemoveByGroup(
  playerName: string,
  group: string
): Promise<void> {
  const collectionName = getPlayerCollectionName(group)

  const storedPlayers = await playerListByGroup(group)

  const filteredPlayers = storedPlayers.filter(
    (player) => player.name !== playerName
  )

  const storageValue = JSON.stringify(filteredPlayers)

  await AsyncStorage.setItem(collectionName, storageValue)
}
