import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import Quill from "quill";
import QuillCursors from "quill-cursors";
import { WebsocketProvider } from "y-websocket";
import "quill/dist/quill.snow.css"; // 使用了 snow 主题色
import { useEffect } from "react";

// 使用 cursors 插件
Quill.register("modules/cursors", QuillCursors);

function YQuill() {
  useEffect(() => {
    const quill = new Quill(document.getElementById("y-quill")!, {
      modules: {
        cursors: true,
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
        history: {
          userOnly: true,
        },
      },
      placeholder: "协同富文本...",
      theme: "snow",
    });
    const ydoc = new Y.Doc(); // y 文档对象，保存需要共享的数据
    const ytext = ydoc.getText("quill"); // 创建名为 quill 的 Text 对象
    // 连接到 websocket 服务端
    const provider = new WebsocketProvider(
      "ws://localhost:1234",
      "quill-demo-room",
      ydoc
    );
    // 数据模型绑定，再绑上光标对象
    const binding = new QuillBinding(ytext, quill, provider.awareness);
    console.log("binding", binding);
  }, []);
  return <div id="y-quill">YQuill</div>;
}

export default YQuill;
