import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@/utils/app-error'

import { type PlayerDTO } from './player-dto'
import { getPlayerCollectionName } from '../storage-config'
import { playerListByGroup } from './player-list-by-group'

export async function playerAddByGroup(
  newPlayer: PlayerDTO,
  group: string
): Promise<void> {
  const collectionName = getPlayerCollectionName(group)

  const storedPlayers = await playerListByGroup(group)

  const playerAlreadyExists = storedPlayers.filter(
    (player) => player.name === newPlayer.name
  )

  if (playerAlreadyExists.length > 0) {
    throw new AppError('That player already exists in this group')
  }

  const storageValue = JSON.stringify([...storedPlayers, newPlayer])

  await AsyncStorage.setItem(collectionName, storageValue)
}
