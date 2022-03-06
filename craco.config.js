const webpack = require("webpack");
module.exports = {
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: { env: {} },
        }),
      ],
    },
  },
};
