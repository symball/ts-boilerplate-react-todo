import { atom, selector } from 'recoil';

import { Post, PostsApi } from '@api';
import { authAtom } from '@store';

const postsApi = new PostsApi();

export const postDetails = atom({
  key: 'postDetails',
  default: null as Post | null,
});

export const postsList = atom({
  key: 'postsList',
  default: [] as Array<Post>,
});

export const postsCursor = atom({
  key: 'postsCursor',
  default: 0,
});

export const postsSearchDirection = atom({
  key: 'postsFetchSearchDirection',
  default: 'asc',
});

export const postsListSelector = selector({
  key: 'postsFetch',
  get: async ({ get }) => {
    const authKey = get(authAtom);
    const cursor = get(postsCursor);
    const direction = get(postsSearchDirection);
    const { data } = await postsApi.postsGet(
      {
        cursor,
        dir: direction,
      },
      { headers: { Authorization: `Bearer ${authKey}` } }
    );
    return data;
  },
});
