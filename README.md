Redux:
  参考地址:
    https://www.redux.org.cn/index.html
    http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
  基础知识:
    React中,状态数据,state
    组件与组件之间可以传递数据:props、回传事件
    兄弟之间组件传递数据:共同的子元素或者共同的父元素(大量的组件需要视同同一条数据)
  
  redux和react-redux的区别
    redux: js的状态管理 createStore
    react-redux: 为了在react中容易的使用: connect provider
  1.安装
    npm install --save-dev redux
##Redux
  1.store
    - 管理state
    - 管理reducer
  2.reducer
    - 负责修改state状态值
    - 数据源需要action提供
  3.action
    - 本质：{type:修改state的方式,data:参与修改state的数据}
    - 定义：函数，目的是动态给action设置data
  4.dispatch
    - 作用：分发action
    - 到底做什么了:
      - 传递action对象
      - 间接导致store去reducer调用
  5.获取state
    - store.getState();
  6.监听state变化
    - store.subscribe(callback)