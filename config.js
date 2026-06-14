/**
 * 🎛️ 全局主题总控调度中心 (ES6 模块防缓存版)
 */

// 1. 在这里配置你想加载的主题文件路径
const THEME_BASE_PATH = './data_witt.js'; 

// 2. 自动注入动态时间戳，强制浏览器绕过缓存（切勿修改下方代码）
window.CURRENT_THEME_MODULE = `${THEME_BASE_PATH}?t=${new Date().getTime()}`;
