//actions：提供最新的数据的,是store对象唯一的数据源
/**
 * action本质: 对象
 * 定义的时候需要定义成方法
*/

//累加的action
export const incrementAction = (number) => ({type:'increment',data:number});
//累减的action
export const decrementAction = (number) => ({type:'decrement',data:number});

//异步action 换一种写法
export const asyncIncrementAction = function(number) {
  return dispatch => {
    //在分发之前处理异步行为:发送ajax请求，开启定时器
    setTimeout(()=>{
      dispatch(incrementAction(number));
    },2000);
  }
}