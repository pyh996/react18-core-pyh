import {REACT_ELEMENT_TYPE} from "shared/ReactSymbols";
import hasOwnProperty from "shared/hasOwnProperty";

// 定义一些在React元素中保留的属性
const RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
}

// 检查config对象中是否有ref属性
function hasValidRef(config) {
    return config.ref !== undefined;
}

// 检查config对象中是否有key属性
function hasValidKey(config) {
    return config.key !== undefined;
}

// 创建一个React元素（虚拟DOM）
function ReactElement(type, key, ref, props) {
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props
    }
}

// 创建一个React元素的函数，处理key和ref属性，并将其他属性添加到props对象中
export function jsxDEV(type, config, maybeKey) {
    let propName;
    const props = {};
    let key = null;
    let ref = null;

    // 如果maybeKey参数存在，将其赋值给key
    if (typeof maybeKey !== 'undefined') {
        key = maybeKey;
    }

    if (hasValidKey(config)) {
        key = '' + config.key;
    }

    // 如果config对象中有ref属性，将其赋值给ref
    if (hasValidRef(config)) {
        ref = config.ref;
    }

    // 遍历config对象，将非保留属性添加到props对象中
    for (propName in config) {
        if (hasOwnProperty.call(config, propName)
            && !RESERVED_PROPS.hasOwnProperty(propName)
        ) {
            props[propName] = config[propName]
        }
    }

    // 返回一个新的React元素
    return ReactElement(type, key, ref, props);
}