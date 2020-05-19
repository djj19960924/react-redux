import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store'
import { Provider } from 'react-redux' 

//用了Provider，就不需要在使用store.subscribe监听state对象发生变化了
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//监听store对象发生变化
// store.subscribe(()=>{
//   ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   );
// })
