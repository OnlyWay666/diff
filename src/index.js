import h from "./dom/h";
import patch from "./dom/patch";

let container = document.getElementById("container");
// 虚拟节点
let vnode1 = h("div", {}, "你好呀");

let vnode2 = h("div", {}, [
  h("div", {}, "a"),
  h("div", {}, "b"),
  h("div", {}, "c"),
]);

patch(container, vnode2);
