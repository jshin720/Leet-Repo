/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, level = 0, levels = []) {
    const isBaseCase = root === null;
    if (isBaseCase) return levels;

    const isLastNode = level === levels.length;
    if (isLastNode) levels.push([]);

    levels[level].push(root.val);

    return dfs(root, level, levels); // Time O(N) | Space O(H)
}

const dfs = (root, level, levels) => {
    if (root.left) levelOrder(root.left, (level + 1), levels);
    if (root.right) levelOrder(root.right, (level + 1), levels);

    return levels;
}