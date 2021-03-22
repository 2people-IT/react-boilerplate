import React, { useCallback, useEffect } from 'react';

import { createUseStyles } from 'react-jss';
import useReddit from 'hooks/api/useReddit';

const useStyles = createUseStyles({
  screen: {
    background: 'aliceblue',
    padding: 10,
    '@media (max-width: 1280px)': {
      background: 'green',
    },
  },
  post: {
    padding: '15px 0',
  },
});

const HomeScreen = () => {
  const { redditPosts, getReddit, getRedditIsFetching } = useReddit();
  const getReactReddit = useCallback(() => {
    console.log('smthg');
    getReddit({ redditName: 'reactjs' });
  }, [getReddit]);

  useEffect(() => {
    getReactReddit();
  }, []);
  const styles = useStyles();

  console.log('rerender');

  return (
    <div className={styles.screen}>
      <button onClick={getReactReddit}>{getRedditIsFetching ? 'loading' : 'Click me'}</button>
      {redditPosts.map((post) => (
        <div key={post.data.id} className={styles.post}>
          {post.data.title}
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
