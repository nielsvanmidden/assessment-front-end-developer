/* eslint no-undef: 0 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
        loose: true,
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
    },
  },
};
