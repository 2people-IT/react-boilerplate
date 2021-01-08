import React, { useCallback, useEffect } from 'react';

import BasicButton from 'components/buttons/BasicButton';
import useReddit from 'hooks/api/useReddit';
import styles from './style.module.scss';

const HomeScreen = () => {
  const { redditPosts, getReddit, redditIsFetching } = useReddit();
  const getReactReddit = useCallback(() => {
    console.log('smthg');
    getReddit({ redditName: 'reactjs' });
  }, [getReddit]);

  useEffect(() => {
    getReactReddit();
  }, []);

  const postStyle: React.CSSProperties = {
    padding: '15px 0',
  };

  const buttonStyle: React.CSSProperties = {
    maxWidth: 100,
  };

  console.log('rerender');

  return (
    <div className={styles.homeScreen}>
      <BasicButton text="Click me" onClick={getReactReddit} style={buttonStyle} isLoading={redditIsFetching} />
      {redditPosts.map((post) => (
        <div key={post.id} style={postStyle}>
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
