import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebPackPlugin from "html-webpack-plugin";
import WebpackDevServer from "webpack-dev-server";

/** Override fixes a conflict with the newer version of tsnode */
interface Configuration extends webpack.Configuration {
  devServer?: devServer | undefined;
}
interface devServer extends WebpackDevServer.Configuration {
  static?: boolean | string | string[] | number | undefined;
}

const config: Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3000,
    static: path.join(__dirname, "./"),
  },
};

export default config;
