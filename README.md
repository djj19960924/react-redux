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
    - 管理state，唯一的数据源：action
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

##redux处理异步任务
  1.redux本身不能处理异步任务
  2.需要使用中间件：redux-thunk
  3.npm install redux-thunk
  4.在创建store对象的时候声明使用中间件：const store = createStore(counterReducer,applyMiddleware(thunk));
##同步action和异步action定义方法
  1.同步action：直接定义方法返回对应的action对象
  2.异步action：核心思想：异步action返回值还是一个函数，redux会自动将dispatch注入，什么时候分发action使用者说了算
    export const asyncIncrementAction = function(number) {
      return dispatch => {
        //在分发之前处理异步行为:发送ajax请求，开启定时器
        setTimeout(()=>{
          dispatch(incrementAction(number));
        },2000);
      }
    }
