const GROUP_COLLECTION = '@ignite-teams:groups';

const PLAYER_COLLECTION = '@ignite-teams:players';

const getPlayerCollectionName = (group: string): string => {
  return `${PLAYER_COLLECTION}-${group}`;
};

export { GROUP_COLLECTION, PLAYER_COLLECTION, getPlayerCollectionName };
