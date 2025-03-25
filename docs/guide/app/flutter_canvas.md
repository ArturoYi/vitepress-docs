
用过`Flutter`的人都应该知道，`Flutter`是通过`Skia`来自行渲染UI界面的，Skia其实就是一个复杂的`canvas`,点击这里查看[Skia](https://skia.org/docs/user/api/)文档。


我们一般不会直接使用`cancas`,但是`Flutter`提供了`CustomPaint`Widget开方便使用。

```dart
CustomPaint CustomPaint({
  Key? key,
  CustomPainter? painter,
  CustomPainter? foregroundPainter,
  Size size = Size.zero,
  bool isComplex = false,
  bool willChange = false,
  Widget? child,
})
```