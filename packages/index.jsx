import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'))
let element = <div>
    <div>createRoot 代码演示，入口文件</div>
    <div>李洛克</div>
    <div>电子书：<a style={{ color: 'blue' }} href="https://www.yangyitao.com/react18">https://www.yangyitao.com/react18</a></div>
</div>
root.render(element)
console.log("index.jsx", element);