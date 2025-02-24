# 项目指北

- Yjs 一个集成 CRDT 算法的同步库
- quill 一个富文本编辑器
- y-quill 一个集成了 Yjs 的 quill 插件
- y-websocket 一个集成了 Yjs 的 websocket 插件
- quill-cursors 一个 quill 的光标插件，用于显示多个用户的光标


## DEMO 之 Yjs + quill

```shell
HOST=localhost PORT=1234 npx y-websocket // 开启 websocket 服务

yarn dev // 开启 quill 编辑器
```