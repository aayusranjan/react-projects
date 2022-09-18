## Functionality

- [Refernce](https://reactjs.org/docs/lists-and-keys.html#keys) to better understanind why need keys

- [ ] Add unique id, for every lable or todo's ([Refernce](https://reactjs.org/docs/hooks-reference.html#useid))
- [ ] Adding delete element based on unique id
- [ ] Create Edit element (with more function like update, cancel)
- [ ] Simple UI (Material UI)



## key's functionality

Without key you will get error in console, so we need to add key.

there is three way to add key but we will doing the best way possible so, we cannot face with any error.

After installing react-uuid, we will simple use it like this:

```js
import uuid from 'react-uuid'

const array = ['one', 'two', 'three']

export const LineItem = item => <li key={uuid()}>{item}</li>

export const List = () => array.map(item => <LineItem item={item} />)
```
