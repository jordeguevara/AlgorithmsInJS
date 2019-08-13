var rangeSumBST = function(root, L, R) {
    if(!root)
        return 0;
    let arr = inOrder(root,[]);
   return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    
 function inOrder(root,arr){
     if(root === null)
         return;
     inOrder(root.left,arr);
     if(root.val >= L && root.val <= R){
      arr.push(root.val);
     }
     inOrder(root.right,arr);
     return arr;
 }
};ß