import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header/index.jsx";
import "./styles.scss";

const Index = () => {
  return (
    <div className="content">
      <Header title="作成中" />
      <main>
        .htmlファイルをどう処理するかをWebpackに指示するために、
        html-webpack-pluginをinstallする。
      </main>
    </div>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));
