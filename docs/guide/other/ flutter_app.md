# flutter 开发中的常见问题

## flutter ios下设置web view允许访问http

ios默认会阻止http请求

1. 
```xml
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
```