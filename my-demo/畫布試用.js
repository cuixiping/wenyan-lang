/*___wenyan_module_畫布經_start___*/ var 畫布經 = new (function() {
  /*"此乃畫布經"*/ var 上下文 = 0
  var 畫布元素 = 0
  var 得一元素 = () => 0
  得一元素 = function(元素之名) {
    var _ans1 = document.getElementById(元素之名)
    return _ans1
  }
  var 設填充之色 = () => 0
  設填充之色 = function(顏色) {
    上下文.fillStyle = 顏色
  }
  var 設輪廓之色 = () => 0
  設輪廓之色 = function(顏色) {
    上下文.strokeStyle = 顏色
  }
  var 設輪廓粗細 = () => 0
  設輪廓粗細 = function(粗細) {
    上下文.lineWidth = 粗細
  }
  var 描其輪廓 = () => 0
  描其輪廓 = function() {
    var _ans2 = 上下文.stroke()
  }
  var 填充其內 = () => 0
  填充其內 = function() {
    var _ans3 = 上下文.fill()
  }
  var 起筆 = () => 0
  起筆 = function() {
    var _ans4 = 上下文.beginPath()
  }
  var 封口 = () => 0
  封口 = function() {
    var _ans5 = 上下文.closePath()
  }
  var 移筆 = () => 0
  移筆 = function(橫) {
    return function(縱) {
      var _ans6 = 上下文.moveTo(橫, 縱)
    }
  }
  var 直行 = () => 0
  直行 = function(橫) {
    return function(縱) {
      var _ans7 = 上下文.lineTo(橫, 縱)
    }
  }
  var 曲行 = () => 0
  曲行 = function(橫甲) {
    return function(縱甲) {
      return function(橫乙) {
        return function(縱乙) {
          return function(橫終) {
            return function(縱終) {
              var _ans8 = 上下文.bezierCurveTo(
                橫甲,
                縱甲,
                橫乙,
                縱乙,
                橫終,
                縱終
              )
            }
          }
        }
      }
    }
  }
  var 矩形 = () => 0
  矩形 = function(橫) {
    return function(縱) {
      return function(寬) {
        return function(高) {
          var _ans9 = 上下文.rect(橫, 縱, 寬, 高)
        }
      }
    }
  }
  var 題字 = () => 0
  題字 = function(字句) {
    return function(橫) {
      return function(縱) {
        var _ans10 = 上下文.fillText(字句, 橫, 縱)
      }
    }
  }
  var 字尺寸 = "12pt"
  var 字行高 = "120%"
  var 字體 = "sans-serif"
  var 設字尺寸 = () => 0
  設字尺寸 = function(尺寸) {
    字尺寸 = 尺寸
    var _ans11 = 字尺寸 + "/"
    var _ans12 = _ans11 + 字行高
    var _ans13 = _ans12 + " "
    var _ans14 = _ans13 + 字體
    var 式樣 = _ans14
    上下文["font"] = 式樣
  }
  var 設字行高 = () => 0
  設字行高 = function(行高) {
    字行高 = 行高
    var _ans15 = 字尺寸 + "/"
    var _ans16 = _ans15 + 字行高
    var _ans17 = _ans16 + " "
    var _ans18 = _ans17 + 字體
    var 式樣 = _ans18
    上下文["font"] = 式樣
  }
  var 設字體 = () => 0
  設字體 = function(名號) {
    字體 = 名號
    var _ans19 = 字尺寸 + "/"
    var _ans20 = _ans19 + 字行高
    var _ans21 = _ans20 + " "
    var _ans22 = _ans21 + 字體
    var 式樣 = _ans22
    上下文["font"] = 式樣
  }
  var 打探鼠標 = () => 0
  打探鼠標 = function(探子) {
    var _ans23 = 畫布元素.addEventListener(奔走, 探子)
    var _ans24 = 畫布元素.addEventListener(推敲, 探子)
  }
  var 得一畫布 = (this.得一畫布 = () => 0)
  得一畫布 = this.得一畫布 = function(畫布之名) {
    var _ans25 = 得一元素(畫布之名)
    畫布元素 = _ans25
    if (畫布元素 == null) {
      var _rand1 = new Error()
      _rand1.name = "無此畫布"
      throw _rand1
      return
    }
    var _ans26 = 畫布元素.getContext("2d")
    上下文 = _ans26
    var _ans27 = 設字尺寸(四號)
    var 畫布 = {}
    畫布 = {
      元素: 畫布元素,
      上下文: 上下文,
      設填充之色: 設填充之色,
      設輪廓之色: 設輪廓之色,
      設輪廓粗細: 設輪廓粗細,
      描其輪廓: 描其輪廓,
      填充其內: 填充其內,
      起筆: 起筆,
      封口: 封口,
      移筆: 移筆,
      直行: 直行,
      曲行: 曲行,
      矩形: 矩形,
      題字: 題字,
      設字尺寸: 設字尺寸,
      設字行高: 設字行高,
      設字體: 設字體,
      打探鼠標: 打探鼠標
    }
    return 畫布
  }
  var 字號 = (this.字號 = {})
  字號 = this.字號 = {
    一號: "28pt",
    小一號: "24pt",
    二號: "21pt",
    小二號: "18pt",
    三號: "16pt",
    小三號: "15pt",
    四號: "14pt",
    小四號: "12pt",
    五號: "10.5pt",
    小五號: "9pt"
  }
  var 一號 = (this.一號 = "28pt")
  var 四號 = (this.四號 = "14pt")
  var 奔走 = (this.奔走 = "mousemove")
  var 推敲 = (this.推敲 = "click")
})()
/*___wenyan_module_畫布經_end___*/ /*___wenyan_module_色彩經_start___*/ var 色彩經 = new (function() {
  /*"https://www.cnblogs.com/remember-forget/p/8134849.html"*/ var 純白色 = (this.純白色 =
    "#FFFFFF")
  var 淺灰色 = (this.淺灰色 = "#D3D3D3")
  var 深灰色 = (this.深灰色 = "#A9A9A9")
  var 暗灰色 = (this.暗灰色 = "#696969")
  var 純黑色 = (this.純黑色 = "#000000")
  var 白煙色 = (this.白煙色 = "#F5F5F5")
  var 纯蓝色 = (this.纯蓝色 = "#0000FF")
  var 纯绿色 = (this.纯绿色 = "#008000")
  var 纯红色 = (this.纯红色 = "#FF0000")
  var 海军蓝 = (this.海军蓝 = "#000080")
  var 深红色 = (this.深红色 = "#8B0000")
  var 深青色 = (this.深青色 = "#008B8B")
  var 深黑色 = (this.深黑色 = "#333333")
  var 猩红色 = (this.猩红色 = "#DC143C")
})()
/*___wenyan_module_色彩經_end___*/ /*"此乃畫布經試用。"*/ var 純白色 =
  色彩經.純白色
var 白煙色 = 色彩經.白煙色
var 淺灰色 = 色彩經.淺灰色
var 深灰色 = 色彩經.深灰色
var 暗灰色 = 色彩經.暗灰色
var 純黑色 = 色彩經.純黑色
var 猩红色 = 色彩經.猩红色
var 纯蓝色 = 色彩經.纯蓝色
var 纯绿色 = 色彩經.纯绿色
var 纯红色 = 色彩經.纯红色
var 海军蓝 = 色彩經.海军蓝
var 深红色 = 色彩經.深红色
var 深青色 = 色彩經.深青色
var 深黑色 = 色彩經.深黑色
var 奔走 = 畫布經.奔走
var 推敲 = 畫布經.推敲
var 得一畫布 = 畫布經.得一畫布
var 字號 = 畫布經.字號
var 正負 = (this.正負 = () => 0)
正負 = this.正負 = function(甲) {
  if (甲 > 0) {
    return 1
  }
  if (甲 < 0) {
    return -1
  }
  return 甲
}
var 取底 = (this.取底 = () => 0)
取底 = this.取底 = function(甲) {
  var _ans1 = 正負(甲)
  var 符 = _ans1
  var _ans2 = 甲 * 符
  var 乙 = _ans2
  /*"JavaScript者。除負以正。所餘負也。Python者。除負以正。所餘正也。"*/ var _ans3 =
    乙 % 1
  var 丙 = _ans3
  if (丙 > 0) {
    var _ans4 = 乙 - 丙
    var _ans5 = _ans4 * 符
    var 丁 = _ans5
    if (符 < 0) {
      var _ans6 = 丁 - 1
      return _ans6
    } else {
      return 丁
    }
  } else {
    return 甲
  }
}
var _ans7 = 得一畫布("畫布之一")
var 畫布 = _ans7
var _ans8 = 畫布.設字尺寸(字號.四號)
var _ans9 = 畫布.設輪廓之色(深灰色)
var _ans10 = 畫布.設填充之色(淺灰色)
var _ans11 = 畫布.設輪廓粗細(2)
/*畫布.移筆*/ /*畫布.直行*/ /*畫布.直行*/ /*畫布.直行*/ /*畫布.曲行*/ /*畫布.描其輪廓*/ /*左*/ /*上*/ var 左 = 10
var 上 = 10
var 右 = 310
var 下 = 430
var 一格 = 30
var 格棧 = []
var 製一棋盤 = () => 0
製一棋盤 = function() {
  var 橫 = 左
  var 縱 = 上
  /*橫*/ /*縱*/ for (var _rand1 = 0; _rand1 < 15; _rand1++) {
    var _ans12 = 畫布.移筆(橫)(縱)
    var _ans13 = 畫布.直行(右)(縱)
    var _ans14 = 縱 + 一格
    縱 = _ans14
  }
  橫 = 10
  縱 = 10
  for (var _rand2 = 0; _rand2 < 13; _rand2++) {
    var _ans15 = 畫布.移筆(橫)(縱)
    var _ans16 = 畫布.直行(橫)(下)
    var _ans17 = 橫 + 一格
    橫 = _ans17
  }
  var _ans18 = 畫布.描其輪廓()
}
var 製一小格 = () => 0
製一小格 = function(列序) {
  return function(行序) {
    var _ans19 = 列序 * 一格
    var _ans20 = _ans19 + 左
    var 橫 = _ans20
    var _ans21 = 行序 * 一格
    var _ans22 = _ans21 + 上
    var 縱 = _ans22
    var _ans23 = 畫布.起筆()
    var _ans24 = 畫布.矩形(橫)(縱)(一格)(一格)
    var _ans25 = 畫布.填充其內()
    var _ans26 = 畫布.描其輪廓()
  }
}
var 數文列 = []
數文列.push("一", "二", "三", "四", "五", "六", "七", "八")
var 數彩列 = []
數彩列.push(纯蓝色, 纯绿色, 纯红色, 海军蓝, 深红色, 深青色, 深黑色, 暗灰色)
var 格內題數 = () => 0
格內題數 = function(數) {
  return function(列序) {
    return function(行序) {
      var _ans27 = 數文列[數 - 1]
      var 文 = _ans27
      var 彩 = 數彩列[數 - 1]
      var _ans29 = 列序 * 一格
      var _ans30 = _ans29 + 左
      var _ans31 = _ans30 + 5
      var 橫 = _ans31
      var _ans32 = 行序 * 一格
      var _ans33 = _ans32 + 上
      var _ans34 = _ans33 + 21
      var 縱 = _ans34
      var _ans35 = 畫布.設填充之色(彩)
      var _ans36 = 畫布.題字(文)(橫)(縱)
    }
  }
}
var 製矩形一開格 = () => 0
製矩形一開格 = function(列序) {
  return function(行序) {
    var _ans37 = 列序 * 一格
    var _ans38 = _ans37 + 左
    var _ans39 = _ans38 + 0.5
    var 橫 = _ans39
    var _ans40 = 行序 * 一格
    var _ans41 = _ans40 + 上
    var _ans42 = _ans41 + 0.5
    var 縱 = _ans42
    var _ans43 = 畫布.設輪廓粗細(1)
    var _ans44 = 縱 + 一格
    var _ans45 = _ans44 - 1
    縱 = _ans45
    var _ans46 = 畫布.設輪廓之色(暗灰色)
    var _ans47 = 畫布.起筆()
    var _ans48 = 畫布.移筆(橫)(縱)
    var _ans49 = 縱 - 一格
    var _ans50 = _ans49 + 1
    縱 = _ans50
    var _ans51 = 畫布.直行(橫)(縱)
    var _ans52 = 橫 + 一格
    var _ans53 = _ans52 - 1
    橫 = _ans53
    var _ans54 = 畫布.直行(橫)(縱)
    var _ans55 = 畫布.描其輪廓()
    var _ans56 = 畫布.設輪廓之色(純白色)
    var _ans57 = 畫布.起筆()
    var _ans58 = 畫布.移筆(橫)(縱)
    var _ans59 = 縱 + 一格
    var _ans60 = _ans59 - 1
    縱 = _ans60
    var _ans61 = 畫布.直行(橫)(縱)
    var _ans62 = 橫 - 一格
    var _ans63 = _ans62 + 1
    橫 = _ans63
    var _ans64 = 畫布.直行(橫)(縱)
    var _ans65 = 畫布.描其輪廓()
    var _ans66 = 縱 - 一格
    var _ans67 = _ans66 + 1.5
    縱 = _ans67
    橫 = 橫 + 0.5
    var _ans69 = 畫布.起筆()
    var 一內格 = 一格 - 2.5
    var _ans71 = 畫布.矩形(橫)(縱)(一內格)(一內格)
    var _ans72 = 畫布.設填充之色(純白色)
    var _ans73 = 畫布.填充其內()
  }
}
var 新製一棋盤 = () => 0
新製一棋盤 = function() {
  var 橫 = 左
  var 縱 = 上
  /*橫*/ /*縱*/ for (var _rand3 = 0; _rand3 < 14; _rand3++) {
    橫 = 左
    for (var _rand4 = 0; _rand4 < 10; _rand4++) {
      var _ans74 = 畫布.矩形(橫)(縱)(一格)(一格)
      橫 = 橫 + 一格
      格棧.push(0)
    }
    縱 = 縱 + 一格
  }
  var _ans77 = 畫布.填充其內()
  var _ans78 = 畫布.描其輪廓()
}
var 探聽鼠標 = () => 0
探聽鼠標 = function(情報) {
  var 大橫 = 情報["clientX"]
  var 大縱 = 情報["clientY"]
  var 事之種類 = 情報["type"]
  var 畫布方位 = 畫布.元素.getBoundingClientRect()
  大橫 = 大橫 - 畫布方位.left
  大縱 = 大縱 - 畫布方位.top
  var _ans85 = 大橫
  var _ans86 = _ans85 - 左
  var _ans87 = _ans86 / 一格
  var 列序 = _ans87
  var _ans88 = 大縱
  var _ans89 = _ans88 - 上
  var _ans90 = _ans89 / 一格
  var 行序 = _ans90
  行序 = 取底(行序)
  列序 = 取底(列序)
  if (舊行序 > -1) {
    var _ans93 = 畫布.起筆()
    var _ans94 = 畫布.設輪廓之色(深灰色)
    var _ans95 = 畫布.設填充之色(淺灰色)
    var _ans96 = 畫布.設輪廓粗細(2)
    var _ans97 = 製一小格(舊列序)(舊行序)
  }
  if (行序 < 0) {
    return
  }
  if (行序 > 13) {
    return
  }
  if (列序 < 0) {
    return
  }
  if (列序 > 9) {
    return
  }
  var _ans98 = 行序 * 10
  var _ans99 = _ans98 + 列序
  var _ans100 = _ans99 + 1
  var 棧序 = _ans100
  var 棧值 = 格棧[棧序 - 1]
  if (棧值 > 0) {
    return
  }
  if (事之種類 == 奔走) {
    var _ans102 = 畫布.起筆()
    var _ans103 = 畫布.設輪廓之色(深灰色)
    var _ans104 = 畫布.設填充之色(白煙色)
    var _ans105 = 畫布.設輪廓粗細(2)
    var _ans106 = 製一小格(列序)(行序)
    舊行序 = 行序
    舊列序 = 列序
    return
  }
  if (事之種類 == 推敲) {
    var _ans107 = 製矩形一開格(列序)(行序)
    var _ans108 = 格內題數(臨時之數)(列序)(行序)
    臨時之數 = 臨時之數 + 1
    if (臨時之數 > 8) {
      臨時之數 = 1
    }
    格棧[棧序 - 1] = 1
    舊行序 = -1
    舊列序 = -1
    return
  }
}
var _ans110 = 新製一棋盤()
var 舊行序 = -1
var 舊列序 = -1
var _ans111 = 畫布.打探鼠標(探聽鼠標)
var 臨時之數 = 1
