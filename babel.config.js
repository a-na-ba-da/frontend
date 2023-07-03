module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : []
};
