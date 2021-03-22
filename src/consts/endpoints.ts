const host: string = 'https://www.reddit.com/r';
// const host: string = 'http://94.26.236.20:8000/';

export default {
  getRedditUrl: ({ redditName = 'reactjs' } = {}) => `${host}/${redditName}.json`,
};
