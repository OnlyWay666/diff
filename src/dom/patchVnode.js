import createElement from "./createElement";

export default function patchVnode (oldVnode, newVnode){

    // 判断新节点有没有children
    if( newVnode.children === undefined){
      // 新节点的文本和旧节点的文本内容是不是一样的
      if( newVnode.text !== oldVnode.text){
        oldVnode.elm.innerText = newVnode.text; 
      }
    }else{
      //  新的有，旧的有
      if( oldVnode.children !== undefined && oldVnode.children.length >0){

      }else{
        // 旧节点内容清空 
        oldVnode.elm.text = "";
        //  新的有，旧的没有
        for(let child of newVnode.children){
          let childDom = createElement(child);
          oldVnode.elm.appendChild(childDom)
        }
      }
    }
}