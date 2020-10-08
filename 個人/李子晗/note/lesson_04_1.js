// 1.0 包与npm                apw网站wwww.npmjs.com
// 1.1 package												
//      文件夹												
//  	包结构											
//  	  package.josn					描述文件				(必须）
//  	  bin				        	可执行二进制文件				
//  	  lib				        	js代码				
//  	  doc				        	文档				
//  	  test			        		单元测试				
// 1.2 模块的安装
//   npm install 包名 (--save)
//   引入模块
// 2.0 npm命令
//  npm -v
//  npm install                     // 下载全部依赖
//  npm uninstall
//  npm info + packageName          // 查看版本
//  npm list
//  npm install +packageName@version // 指定版本安装
//  npm init                        // 生成package.json
//  npm init --yes                  // 强制生成package.json
// 2.1 依赖设置 
//  npm info + packageName --save         // 保为dependencies
//  npm info + packagename --save-dev     // 保为package.json的devdependencies
