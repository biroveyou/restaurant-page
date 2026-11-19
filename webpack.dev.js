import { merge } from "webpack-merge";
import webpackCommon from "./webpack.common.js";

export default merge(webpackCommon, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"]
    },
});