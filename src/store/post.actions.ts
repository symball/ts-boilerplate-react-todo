import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PostsApi } from '@api';

import { authAtom, postDetails } from '.';

export { useBuildingsActions };

function useBuildingsActions() {
  const postsApi = new PostsApi();
  const auth = useRecoilValue(authAtom);
  const setPost = useSetRecoilState(postDetails);

  return {
    get,
  };
  function get(postId: number) {
    return postsApi
      .postsPostIdGet({ postId: postId }, { headers: { Authorization: `Bearer ${auth}` } })
      .then(({ data }) => {
        setPost(data);
      });
  }
}
