# Tag
标签
## How to use

```jsx
import { Tag } from 'my-awesome-library';
<Tag>HelloTag</Tag>;
```

## Props
> 除开下面的属性，您可以给Tag添加任意元素能识别的属性，包括任意事件。

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| className | string   |              | no         |
| size | string   |     'large','medium','small'         | no         |
| mark | bool   |              | no         |
| plain | bool   |              | no         |
| round | bool   |              | no         |
| type | 'primary','success','warning','danger'   |     'primary'         | no         |
| style | object   |      -      | no         |
| ...others | NativeProps | - | no |