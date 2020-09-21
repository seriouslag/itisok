const isProd = process.env.NODE_ENV === 'production';
/**
 * @type {String[]}
 */
const plugins = [];

module.exports = {
  plugins,
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  comments: !isProd,
};
