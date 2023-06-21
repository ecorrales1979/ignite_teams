import { PlayerDTO } from './player-dto';
import { playerListByGroup } from './player-list-by-group';

export async function playerListByGroupAndTeam(
  group: string,
  team: string
): Promise<PlayerDTO[]> {
  try {
    const playersByGroup = await playerListByGroup(group);

    const players = playersByGroup.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
