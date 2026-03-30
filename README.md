# 字卡对话 (Card Chat)

一个轻量级的字卡伪对话系统，支持创建角色、管理字卡模式、模拟聊天对话。

## 功能

- **字卡对话** — 创建角色，配置字卡（卡片+关键词），模拟聊天
- **多种回复模式** — 自动回应 / 攒回复 / 随机冒泡
- **跨风格回复** — 基于关键词匹配的跨模式智能选卡
- **伪群聊** — 多角色对话，每个角色有独立卡片池和气泡颜色
- **壁纸装扮** — 自定义壁纸、渐变背景、毛玻璃顶栏、夜间模式
- **全局字卡管理** — 跨对话搜索、批量操作、模板库
- **消息截图** — 多选消息生成截图，支持壁纸背景
- **User 角色系统** — 多身份切换、头像裁剪、气泡颜色
- **导入/导出** — JSON 字卡包导入导出

## 使用

直接用浏览器打开 `index.html` 即可使用。数据保存在浏览器 localStorage 中。

也可以用任意 HTTP 服务器托管：

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

## 文件结构

```
index.html          主页面
css/style.css       样式
js/app.js           运行时（数据层 + 屏幕切换 + Toast）
js/card_chat.js     字卡对话系统完整逻辑
presets/default.json 默认字卡包
```

## APK 打包

可使用 Android WebView 壳或 Capacitor/Cordova 等方案将本项目打包为 APK。

## License

MIT
