# Tag
标签
## How to use

```jsx
import { Tag } from 'my-awesome-library';
<Tag>HelloTag</Tag>;
```

## Props
> 除开下面的属性，您可以给Tag添加任意元素能识别的属性，包括任意事件。

| propName  | propType | defaultValue | isRequired | desc |
| --------- | -------- | ------------ | ---------- | -----|
| size | 'large','medium','small' |    'medium'   | no         | 尺寸 |
| mark | bool   |              | no         | 是否仅右端圆角 |
| plain | bool   |              | no         | 是否空心 |
| round | bool   |              | no         | 是否圆角 |
| type | 'primary','success','warning','danger'   |     'primary'         | no         | tag的类型 |
| className | string   |              | no         |  - |
| style | object   |      -      | no         | - |
| ...others | NativeProps | - | no |