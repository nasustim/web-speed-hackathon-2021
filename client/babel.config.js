module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: false,
        useBuiltIns: 'usage',
        targets: {
          browsers: [
           'last 1 Chrome version',
          ]
        }
      },
    ],
    [
      '@babel/preset-react',
      {},
    ],
  ],
};
