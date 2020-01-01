const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", //処理するベースのhtmlを設定する
  filename: "./index.html" //distに吐き出す時のファイル名を指定します
});

module.exports = {
  entry: "./src/index.js", //src/index.jsがエントリポイントであることを伝えます。
  output: {
    path: path.join(__dirname, "dist"), //distに吐き出します
    filename: "[name].js" //吐き出す時の名前です
  },
  plugins: [htmlPlugin],
  module: {
    /**
     * バンドルされる前のルール
     *  .js,.jsxがにBabelを通過してからバンドル(混ぜる)する
     * */
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/, //scssかcssを見つける
        use: ["style-loader", "css-loader", "sass-loader"] // バンドルする前にこの処理をする。
      },
      {
        test: /\.(png|svg|jpg|gif)$/, //画像を読み込めるようにする
        loader: "file-loader",
        options: { name: "/static/[name].[ext]" }
      }
    ]
  }
};
