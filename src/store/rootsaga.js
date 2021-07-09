import loadProducts from './product/saga'


export default function* rootSaga() { 
    yield loadProducts
}

// export default function* rootSaga() {
//     yield all([
//       helloSaga(),w
//       watchIncrementAsync()
//     ])
//     // code after all-effect
//   }