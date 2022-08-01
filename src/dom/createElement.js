export default function createElement( vnode){

  let domNode = document.createElement( vnode.sel);
// 没有子节点
  if( vnode.children == undefined){
    domNode.innerText = vnode.text
  }else if(Array.isArray(vnode.children)){
    // 说明有子节点，需要递归创建节点
    console.log(vnode.children)
    for(let child of vnode.children){
      let childDom = createElement(child);
      domNode.appendChild(childDom)
    }
  }

  vnode.elm = domNode;
  return domNode;
}