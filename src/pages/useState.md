
# useState

`https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js#L99`

useState实际上调用了resolveDispatcher

`https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js#L26`

看起来resolveDispatcher获取了ReactCurrentDispatcher的实例

`https://github.com/facebook/react/blob/main/packages/react/src/ReactCurrentDispatcher.js#L15`

看了一下，这个地方貌似只是存储一下实例，得去找找在哪创建

查了好久，最后确定了是在这里的逻辑 `https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L551`

他根据不一样的Hook用法，区分了

```ts
// https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L2896
// 每种调度器都会区分开发和非开发状态
let HooksDispatcherOnMountInDEV: Dispatcher | null = null; // 在mount生命周期里的
let HooksDispatcherOnMountWithHookTypesInDEV: Dispatcher | null = null; // 
let HooksDispatcherOnUpdateInDEV: Dispatcher | null = null; // 在update生命周期里的
let HooksDispatcherOnRerenderInDEV: Dispatcher | null = null; // 重渲染的生命周期
let InvalidNestedHooksDispatcherOnMountInDEV: Dispatcher | null = null; // 无效的嵌套钩子
let InvalidNestedHooksDispatcherOnUpdateInDEV: Dispatcher | null = null;
let InvalidNestedHooksDispatcherOnRerenderInDEV: Dispatcher | null = null
```

#### ContextOnlyDispatcher

阅读源码后，发现这个一个用于抛出具体错误的dispather

#### HooksDispatcherOnRerenderInDEV和HooksDispatcherOnRerender

> 重渲染的调度器

这是用来执行另一个渲染传递。它用于在呈现期间调用setState，以及在开发期间在严格模式下双重调用组件。

`https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L3479`

发现这里实际上使用了rerenderState `https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L1854`

```ts
function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

// 这里本质上是这个东西
rerenderReducer(basicStateReducer, (initialState: any));

```


而rerenderState复用了rerenderReducer `https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L1229`

这里很清晰的可以看出，`[state, dispatch]`是`[hook.memoizedState, hook.queue.dispatch]`（起码一开始是）

而`hook`是使用函数updateWorkInProgressHook获取的`https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L841`

此函数用于更新和由渲染阶段更新触发的重新渲染。它假设有一个我们可以克隆的当前钩子，或者一个我们可以用作基础的来自前一个渲染传递的正在进行中的钩子。

####  HooksDispatcherOnMountInDEV和HooksDispatcherOnMount

> 这是在mount生命周期下使用的调度器

与上面的情况类似，此调度器下的useState返回了一个hook，使用函数mountWorkInProgressHook获取`https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L820`

#### HooksDispatcherOnUpdateInDEV

> update的生命周期的调度器