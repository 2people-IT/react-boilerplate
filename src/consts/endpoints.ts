const host: string = 'https://www.reddit.com/r';

export default {
  getRedditUrl: ({ redditName = 'reactjs' } = {}) => `${host}/${redditName}.json`,
};
