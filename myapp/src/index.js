import React from "react";
import ReactDom from "react-dom";
const Index = () => {
  return (
    <div>
      .htmlファイルをどう処理するかをWebpackに指示するために、
      html-webpack-pluginをinstallする。
    </div>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));
