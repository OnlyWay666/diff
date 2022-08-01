import vnode from "./vnode";
import createElement from "./createElement";

export default function( oldVnode, newVnode){
  // 如果sel不存在，则是非虚拟节点（真实dom）,转化成虚拟节点 
  if(oldVnode.sel == undefined){
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(), 
      {},
      [],
      undefined,
      oldVnode
    )

      // 判断新旧节点是不是同一个节点
    if ( oldVnode.sel === newVnode.sel ){
    }else{
      // 不是同一节点，那么就删除旧节点，创建插入心得节点
      // 把新的虚拟节点，创建为dom节点
      let newVnodeElm = createElement(newVnode);
      console.log(newVnodeElm)
      // 获取旧的虚拟节点对应的真实节点 .elm就是真实节点

      let oldVnodeElm = oldVnode.elm;
      // 创建新节点
      if(newVnodeElm){
        oldVnodeElm.parentNode.insertBefore(newVnodeElm,oldVnodeElm)
      }
      // 删除旧节点
      oldVnodeElm.parentNode.removeChild(oldVnodeElm)

    }
  }
}