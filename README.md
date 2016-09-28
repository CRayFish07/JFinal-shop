****
**更新日志:**  
1. `2016-09-28`新增Maven分支

****


****
**写在前面:**本项目是依据[这里](https://git.oschina.net/hycx227/JFinal-shop)二次开发，为了巩固基础知识，业余时间适当练手。
****

## 练手过程中运用的框架/插件

[`AmazeUI 2.7.1`](http://amazeui.org/)

[`UEditor 1.4.3.3`](http://ueditor.baidu.com/)

[`JFinal 2.2`](http://www.jfinal.com/)

*注明：*原项目已经运用了很多知识，这里列举的知识在二次开发过程中有用到的（也许以后再学习元项目相关技术知识时会补充）

## 开发环境、工具

1. JDK:`1.7.0_72`[下载](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
2. Tomcat:`8.0.35.0`[下载](http://tomcat.apache.org/)
3. Eclipse:`Mars.2 Release (4.5.2)`[下载](http://www.eclipse.org/downloads/)
4. MySQL:`5.7.11 Homebrew`[下载](http://www.mysql.com/downloads/)

## 本地配置项目开发步骤
开发环境的搭建这里就不赘述了。

### 下载源码

* 使用命令git clone下载源码

```Bash
git clone https://github.com/sun-ao/JFinal-shop.git

```
* 如果不会git命令可以直接下载源码zip包[下载](https://github.com/sun-ao/JFinal-shop/archive/master.zip)
* 使用`GitHub Desktop` `SourceTree`等工具clone源码到本地

### 导入Eclipse
这里更形象说法应该是Eclipse新建项目，由于GitHub上托管的源码并没有将相关本机的Project配置文件上传，所以下载下来的源码不能使用`Import...`直接导入。  

* 首先将源码放置到Eclipse工作目录（*例如：`/Users/sunao/EclipseT`,这样项目的根目录为：`/Users/sunao/EclipseT/JFinal-shop`*）  
* 然后Eclipse新建Web Project项目  
![Eclipse new JFinal-shp](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/Eclipse-New-JFinal-shop.gif)
*无法查看图片点[这里](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/Eclipse-New-JFinal-shop.gif)*  
**注意事项：**  
**a.** 项目名称与下载下来的源码的文件夹一致（最好就保持`JFinal-shop`）  
**b.** class文件我习惯放置到`WEB-INF/classes/`文件夹下(*非必须修改*)  
**c.** `Context root`设置为shop，那么我们部署到tomcat后访问的连接为shop,比如：`http://127.0.0.1:8080/shop`  
(*根据自己喜好定义，定义为ROOT应该就可以直接IP+端口访问*)  
**d.** `Context directory`一定要设置为Web**Root** (因为我源码中是此命名目录)   
**e.** 如果项目创建完毕后出现很多html tag错误
![tag-error](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/tag-error.png)
`解决办法：`Eclipse打开菜单Preferences设置Validation中的**HTML Syntax Validator**将Build的勾去掉
![tag-error-solve](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/tag-error-solve.png)
也可以直接设置项目的Validation。（这里建议将所有的Build的勾都去掉）  
**e.** 记得将配置文件目录`resources`添加到项目的Source配置中
![add-resources-folder](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/add-resources-folder.gif)



### 配置数据库
本项目全库脚本在`resources`目录，文件名称为`jfinalshop.sql`  
假设已经建好了数据库jfinalshop

```SQL
create database jfinalshop;
```
是需要在命令行使用以下命令将全库数据导入即可(首先cd切换到`jfinalshop.sql`文件所在的目录)

```Bash
mysql -uroot -p jfinalshop < jfinalshop.sql

然后在输入数据库密码（如果数据库未设置密码，只需将上面的[-p]参数去掉即可）
```

**修改项目的数据库配置参数**  
数据库配置文件在`resources`目录，文件名称为`jdbc.properties`
修改其中相关数据库配置
![database-set](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/database-set.png)

### 部署到Tomcat

以上工作配置完毕直接使用Tomcat运行即可
![tomcat-run](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/tomcat-run.png)

## 浏览器访问

假设首页访问的地址为：`http://127.0.0.1:8080/shop`  
1. 首页（还未在后台管理初始化）
![JFinal-shop-init](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/JFinal-shop-init.png)  
2. 那么后台管理地址为：`http://127.0.0.1:8080/shop/admin`

```
用户名：admin
密码：123456
```
![JFinal-shop-admin](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/JFinal-shop-admin.png)  
3. 登录后访问菜单：**模板管理**→**一键网站更新** 将网站所有的页面根据模板生成
![JFinal-shop-html](https://github.com/sun-ao/Resource-space/raw/master/Repository/JFinal-shop/JFinal-shop-html.png)  
4. 再次访问首页`http://127.0.0.1:8080/shop` 即可开始尽情的玩耍,不排除浏览器有缓存，右键强制刷新，效果更赞！

## 一点说明
首次尝试修改开源项目，很多不完善，很多太杂乱，期待慢慢进步，贵在坚持。  

1. 部署到服务器之后中文乱码的问题，首要体现就是Tomcat的日志中中文乱码，直接导致的bug是在发送邮件时中文均是`???`  
**`解决办法：`**就在Tomcat的启动脚本catalina.sh(*bin目录下*)中JAVA_OPTS变量中添加`"-Dfile.encoding=UTF8 -Dsun.jnu.encoding=UTF8"`  

```Bash
(......)
# Uncomment the following line to make the umask available when using the
# org.apache.catalina.security.SecurityListener
#JAVA_OPTS="$JAVA_OPTS -Dorg.apache.catalina.security.SecurityListener.UMASK=`umask`"
## 添加配置开始
JAVA_OPTS="-Dfile.encoding=UTF8 -Dsun.jnu.encoding=UTF8"</mark>
## 添加配置结束

# ----- Execute The Requested Command -----------------------------------------
(......)
```

2016 &copy; [sun.ao](http://sun-ao.github.io/)
