module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': `./assets`,
          '@components': './src/components',
          '@store': './src/store',
        },
      },
    ],
  ],
};
