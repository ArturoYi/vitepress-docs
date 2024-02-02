# flutter 开发中的常见问题

## flutter ios下设置web view允许访问http

ios默认会阻止http请求,	下可以让app允许http请求，但是官方是不建议的

1. 
```xml
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
```

## ios权限申请plit

```xml
<!-- 相册 -->
<key>NSPhotoLibraryUsageDescription</key>
<string>读取相册</string>
<!-- 使用相机 -->
<key>NSCameraUsageDescription</key>
<string>使用相机</string>
<!-- 添加图片到相册 -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>添加图片到相册</string>
<!-- 使用麦克风 -->
<key>NSMicrophoneUsageDescription</key>
<string>使用麦克风</string>
<!-- 使用蓝牙 -->
<key>NSBluetoothPeripheralUsageDescription</key>
<string>使用蓝牙</string>
<!-- 持续定位 -->
<key>NSLocationAlwaysUsageDescription</key>
<string>持续定位</string>
<!-- 使用时定位 -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>使用时定位</string>
```

## ios更改app名称和包名

## ios最低部署目标为11的报错问题

## 监听用户的截屏和录屏行为

参考package，监听API