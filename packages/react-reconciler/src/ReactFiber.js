// 导入React中的一些工作标签和标记
import { HostRoot} from "./ReactWorkTags";
import { NoFlags } from "./ReactFiberFlags";

/**
 * 构造函数，用于创建一个新的Fiber节点
 * @param {number} tag - fiber的类型，如函数组件、类组件、原生组件、根元素等
 * @param {*} pendingProps - 新属性，等待处理或者说生效的属性
 * @param {*} key - 唯一标识
 */
export function FiberNode(tag, pendingProps, key) {
  this.tag = tag;
  this.key = key;
  this.type = null; 
  this.stateNode = null; 
  this.return = null; 
  this.child = null;
  this.sibling = null;
  this.pendingProps = pendingProps; 
  this.memoizedProps = null; 
  this.memoizedState = null;
  this.updateQueue = null;
  this.flags = NoFlags; 
  this.subtreeFlags = NoFlags;
  this.alternate = null;
  this.index = 0;
}

/**
 * 用于创建新的Fiber节点
 * @param {number} tag - fiber的类型
 * @param {*} pendingProps - 新属性
 * @param {*} key - 唯一标识
 * @returns {FiberNode} 新的Fiber节点
 */
export function createFiber(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}

/**
 * 创建新的HostRoot类型的Fiber节点
 * @returns {FiberNode} 新的HostRoot类型的Fiber节点
 */
export function createHostRootFiber() {
  return createFiber(HostRoot, null, null);
}
