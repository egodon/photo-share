export const getTitleFromSlug = (slug: string) => {
  return slug.split('-')[0];
};

export const getIdFromSlug = (slug: string) => {
  return slug.split('-').pop();
};

export const makeUrlFriendly = (str: string) => str.replace(/\s/g, '-').toLowerCase();

export const makeUserFriendly = (str: string) => str.replace(/-/g, ' ');

export const createSlug = (entity: { _id: string; title: string }) => {
  const { _id, title } = entity;

  return `${_id}/${makeUrlFriendly(title)}`;
};
