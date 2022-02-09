module.exports = {
  extends: [
    '@releaseband/eslint-config-typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
