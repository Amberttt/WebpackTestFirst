//main.js 
/*const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());*/

// 使用ES6的模块定义和渲染Greet模块
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));