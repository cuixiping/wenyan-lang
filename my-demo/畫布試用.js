/*___wenyan_module_畫布經_start___*/
var 畫布經 = new function () {
  /*___wenyan_module_洋話經_start___*/
  var 洋話經 = new function () {
    /*"此乃洋話經"*/
    var 虛無 = this.虛無 = null;
    var 未定義 = this.未定義 = undefined;
    var 虛空 = this.虛空 = "";
    var 空格 = this.空格 = " ";
    var 斜線 = this.斜線 = "\/";
    var 百分號 = this.百分號 = "%";
    var 單引號 = "\'";
    var 雙引號 = "\"";
    var 磅 = this.磅 = "pt";
    var 像素 = this.像素 = "px";
    var 無襯線 = this.無襯線 = "sans-serif";
    var 平常 = this.平常 = "normal";
    var 文檔 = this.文檔 = "document";
    var 取元素于名 = this.取元素于名 = "getElementById";
    var 填充式樣 = this.填充式樣 = "fillStyle";
    var 描繪式樣 = this.描繪式樣 = "strokeStyle";
    var 線寬 = this.線寬 = "lineWidth";
    var 描繪 = this.描繪 = "stroke";
    var 填充 = this.填充 = "fill";
    var 起筆 = this.起筆 = "beginPath";
    var 封口 = this.封口 = "closePath";
    var 移筆 = this.移筆 = "moveTo";
    var 直行 = this.直行 = "lineTo";
    var 曲行 = this.曲行 = "bezierCurveTo";
    var 矩形 = this.矩形 = "rect";
    var 題字 = this.題字 = "fillText";
    var 字體 = this.字體 = "font";
    var 監聽 = this.監聽 = "addEventListener";
    var 推敲 = this.推敲 = "click";
    var 奔走 = this.奔走 = "mousemove";
    var 按下 = this.按下 = "mousedown";
    var 抬起 = this.抬起 = "mouseup";
    var 客户端橫 = this.客户端橫 = "clientX";
    var 客户端縱 = this.客户端縱 = "clientY";
    var 種類 = this.種類 = "type";
    var 按鈕 = this.按鈕 = "button";
    var 取所圍矩形 = this.取所圍矩形 = "getBoundingClientRect";
    var 左 = this.左 = "left";
    var 上 = this.上 = "top";
    var 取上下文 = this.取上下文 = "getContext";
    var 二維 = this.二維 = "2d";
  }; /*___wenyan_module_洋話經_end___*/ /*"此乃畫布經"*/
  var 奔走 = "mousemove";
  var 推敲 = "click";
  var 按下 = "mousedown";
  var 抬起 = "mouseup";
  var 空格 = " ";
  var 斜線 = "\/";
  var 單引號 = "\'";
  var 雙引號 = "\"";
  var 上下文 = 0;
  var 畫布元素 = 0;
  var 得一元素 = () => 0;
  得一元素 = function (元素之名) {
    var _ans1 = document.getElementById(元素之名);
    return _ans1;
  };
  var 設填充之色 = () => 0;
  設填充之色 = function (顏色) {
    上下文.fillStyle = 顏色;
  };
  var 設輪廓之色 = () => 0;
  設輪廓之色 = function (顏色) {
    上下文.strokeStyle = 顏色;
  };
  var 設輪廓粗細 = () => 0;
  設輪廓粗細 = function (粗細) {
    上下文.lineWidth = 粗細;
  };
  var 描其輪廓 = () => 0;
  描其輪廓 = function () {
    var _ans2 = 上下文.stroke();
  };
  var 填充其內 = () => 0;
  填充其內 = function () {
    var _ans3 = 上下文.fill();
  };
  var 起筆 = () => 0;
  起筆 = function () {
    var _ans4 = 上下文.beginPath();
  };
  var 封口 = () => 0;
  封口 = function () {
    var _ans5 = 上下文.closePath();
  };
  var 移筆 = () => 0;
  移筆 = function (橫) {
    return function (縱) {
      var _ans6 = 上下文.moveTo(橫, 縱);
    };
  };
  var 直行 = () => 0;
  直行 = function (橫) {
    return function (縱) {
      var _ans7 = 上下文.lineTo(橫, 縱);
    };
  };
  var 曲行 = () => 0;
  曲行 = function (橫甲) {
    return function (縱甲) {
      return function (橫乙) {
        return function (縱乙) {
          return function (橫終) {
            return function (縱終) {
              var _ans8 = 上下文.bezierCurveTo(橫甲, 縱甲, 橫乙, 縱乙, 橫終, 縱終);
            };
          };
        };
      };
    };
  };
  var 矩形 = () => 0;
  矩形 = function (橫) {
    return function (縱) {
      return function (寬) {
        return function (高) {
          var _ans9 = 上下文.rect(橫, 縱, 寬, 高);
        };
      };
    };
  };
  var 題字 = () => 0;
  題字 = function (字句) {
    return function (橫) {
      return function (縱) {
        var _ans10 = 上下文.fillText(字句, 橫, 縱);
      };
    };
  };
  var 字尺寸 = "12pt";
  var 字行高 = "120%";
  var 字體 = "sans-serif";
  var 字重 = "normal";
  var 刷新字之式樣 = () => 0;
  刷新字之式樣 = function () {
    var 字體2 = 字體.replace(/\"/g, '\\\'');
    var _ans11 = 字重 + 空格;
    var _ans12 = _ans11 + 字尺寸;
    var _ans13 = _ans12 + 斜線;
    var _ans14 = _ans13 + 字行高;
    var _ans15 = _ans14 + 空格;
    var _ans16 = _ans15 + 雙引號;
    var _ans17 = _ans16 + 字體2;
    var _ans18 = _ans17 + 雙引號;
    var 式樣 = _ans18;
    上下文["font"] = 式樣;
  };
  var 設字尺寸 = () => 0;
  設字尺寸 = function (尺寸) {
    字尺寸 = 尺寸;
    var _ans19 = 刷新字之式樣();
  };
  var 設字行高 = () => 0;
  設字行高 = function (行高) {
    字行高 = 行高;
    var _ans20 = 刷新字之式樣();
  };
  var 設字體 = () => 0;
  設字體 = function (名號) {
    字體 = 名號;
    var _ans21 = 刷新字之式樣();
  };
  var 設字重 = () => 0;
  設字重 = function (新字重) {
    字重 = 新字重;
    var _ans22 = 刷新字之式樣();
  };
  var 監聽術 = () => 0;
  監聽術 = function (物) {
    return function (所為) {
      return function (探子) {
        var _ans23 = 物.addEventListener(所為, 探子);
      };
    };
  };
  var 解鼠 = () => 0;
  解鼠 = function (鼠) {
    var _ans24 = 鼠["clientX"];
    var 橫 = _ans24;
    var _ans25 = 鼠["clientY"];
    var 縱 = _ans25;
    var _ans26 = 鼠["type"];
    var 所為 = _ans26;
    var _ans27 = 鼠["button"];
    var 所按 = _ans27;
    var _ans28 = 畫布元素.getBoundingClientRect();
    var 畫布方位 = _ans28;
    var _ans29 = 橫 - 畫布方位.left;
    橫 = _ans29;
    var _ans30 = 縱 - 畫布方位.top;
    縱 = _ans30;
    var 報 = {};
    報 = {
      "橫": 橫,
      "縱": 縱,
      "奔走乎": false,
      "推敲乎": false,
      "按下乎": false,
      "抬起乎": false,
      "左鍵乎": false,
      "中鍵乎": false,
      "右鍵乎": false,
    };
    if (所為 == 奔走) {
      報["奔走乎"] = true;
      return 報;
    };
    if (所為 == 推敲) {
      報["推敲乎"] = true;
    };
    if (所為 == 按下) {
      報["按下乎"] = true;
    };
    if (所為 == 抬起) {
      報["抬起乎"] = true;
    };
    if (所按 == 0) {
      報["左鍵乎"] = true;
    };
    if (所按 == 1) {
      報["中鍵乎"] = true;
    };
    if (所按 == 2) {
      報["右鍵乎"] = true;
    };
    return 報;
  };
  var 捕鼠 = () => 0;
  捕鼠 = function (捕鼠者) {
    if (捕鼠者) {} else {
      return;
    };
    var 可為 = [];
    可為.push(奔走, 推敲, 按下, 抬起);
    for (var 為 of 可為) {
      var _ans31 = 監聽術(畫布元素)(為)(捕鼠者);
    };
  };
  var 無術 = () => 0;
  var 得一畫布 = this.得一畫布 = () => 0;
  得一畫布 = this.得一畫布 = function (畫布之名) {
    var _ans32 = 得一元素(畫布之名);
    畫布元素 = _ans32;
    if (畫布元素 == null) {
      var _rand1 = new Error();
      _rand1.name = "無此畫布";
      throw _rand1;
    };
    var _ans33 = 畫布元素.getContext("2d");
    上下文 = _ans33;
    var _ans34 = 設字尺寸(四號);
    var 畫布 = {};
    畫布 = {
      "元素": 畫布元素,
      "上下文": 上下文,
      "設填充之色": 設填充之色,
      "設輪廓之色": 設輪廓之色,
      "設輪廓粗細": 設輪廓粗細,
      "描其輪廓": 描其輪廓,
      "填充其內": 填充其內,
      "起筆": 起筆,
      "封口": 封口,
      "移筆": 移筆,
      "直行": 直行,
      "曲行": 曲行,
      "矩形": 矩形,
      "題字": 題字,
      "設字尺寸": 設字尺寸,
      "設字行高": 設字行高,
      "設字體": 設字體,
      "設字重": 設字重,
      "捕鼠者": 無術,
    };
    var 捕鼠者 = () => 0;
    捕鼠者 = function (鼠) {
      if (畫布["捕鼠者"] == 無術) {
        return;
      };
      var _ans35 = 畫布["捕鼠者"];
      var 真捕鼠者 = _ans35;
      if (真捕鼠者) {
        var _ans36 = 解鼠(鼠);
        var 鼠況 = _ans36;
        var _ans37 = 鼠.preventDefault();
        var _ans38 = 真捕鼠者(鼠況);
      };
    };
    var _ans39 = 捕鼠(捕鼠者);
    return 畫布;
  };
  var 字號 = this.字號 = {};
  字號 = this.字號 = {
    "一號": "28pt",
    "小一號": "24pt",
    "二號": "21pt",
    "小二號": "18pt",
    "三號": "16pt",
    "小三號": "15pt",
    "四號": "14pt",
    "小四號": "12pt",
    "五號": "10.5pt",
    "小五號": "9pt",
  };
  var 一號 = this.一號 = "28pt";
  var 四號 = this.四號 = "14pt";
  var 加粗 = this.加粗 = "bold";
}; /*___wenyan_module_畫布經_end___*/ /*___wenyan_module_色彩經_start___*/
var 色彩經 = new function () {
  /*"https://www.cnblogs.com/remember-forget/p/8134849.html"*/
  var 純白色 = this.純白色 = "#FFFFFF";
  var 淺灰色 = this.淺灰色 = "#D3D3D3";
  var 深灰色 = this.深灰色 = "#A9A9A9";
  var 暗灰色 = this.暗灰色 = "#696969";
  var 純黑色 = this.純黑色 = "#000000";
  var 白煙色 = this.白煙色 = "#F5F5F5";
  var 纯蓝色 = this.纯蓝色 = "#0000FF";
  var 纯绿色 = this.纯绿色 = "#008000";
  var 纯红色 = this.纯红色 = "#FF0000";
  var 海军蓝 = this.海军蓝 = "#000080";
  var 深红色 = this.深红色 = "#8B0000";
  var 深青色 = this.深青色 = "#008B8B";
  var 深黑色 = this.深黑色 = "#333333";
  var 猩红色 = this.猩红色 = "#DC143C";
}; /*___wenyan_module_色彩經_end___*/ /*"此乃畫布經試用一例。"*/
var 畫布經試用 = () => 0;
畫布經試用 = function () {
  var 純白色 = 色彩經.純白色;
  var 白煙色 = 色彩經.白煙色;
  var 淺灰色 = 色彩經.淺灰色;
  var 深灰色 = 色彩經.深灰色;
  var 暗灰色 = 色彩經.暗灰色;
  var 純黑色 = 色彩經.純黑色;
  var 猩红色 = 色彩經.猩红色;
  var 纯蓝色 = 色彩經.纯蓝色;
  var 纯绿色 = 色彩經.纯绿色;
  var 纯红色 = 色彩經.纯红色;
  var 海军蓝 = 色彩經.海军蓝;
  var 深红色 = 色彩經.深红色;
  var 深青色 = 色彩經.深青色;
  var 深黑色 = 色彩經.深黑色;
  var 得一畫布 = 畫布經.得一畫布;
  var 字號 = 畫布經.字號;
  var 加粗 = 畫布經.加粗;
  var 正負 = () => 0;
  正負 = function (甲) {
    if (甲 > 0) {
      return 1;
    };
    if (甲 < 0) {
      return -1;
    };
    return 甲;
  };
  var 取底 = () => 0;
  取底 = function (甲) {
    var _ans1 = 正負(甲);
    var 符 = _ans1;
    var _ans2 = 甲 * 符;
    var 乙 = _ans2;
    var _ans3 = 乙 % 1;
    var 丙 = _ans3;
    if (丙 > 0) {
      var _ans4 = 乙 - 丙;
      var _ans5 = _ans4 * 符;
      var 丁 = _ans5;
      if (符 < 0) {
        var _ans6 = 丁 - 1;
        return _ans6;
      } else {
        return 丁;
      };
    } else {
      return 甲;
    };
  };
  var _ans7 = 得一畫布("畫布之一");
  var 畫布 = _ans7;
  var _ans8 = 畫布.設字尺寸(字號.四號);
  var _ans9 = 畫布.設輪廓之色(深灰色);
  var _ans10 = 畫布.設填充之色(淺灰色);
  var _ans11 = 畫布.設輪廓粗細(2);
  var _ans12 = 畫布.設字重(加粗);
  var _ans13 = 畫布.設字體("微软雅黑");
  var 左 = 10;
  var 上 = 10;
  var 右 = 310;
  var 下 = 430;
  var 一格 = 30;
  var 格棧 = [];
  var 製一棋盤 = () => 0;
  製一棋盤 = function () {
    var 橫 = 左;
    var 縱 = 上; /*"昔之「橫」者。今十是矣。"*/ /*"昔之「縱」者。今十是矣。"*/
    for (var _rand1 = 0; _rand1 < 15; _rand1++) {
      var _ans14 = 畫布.移筆(橫)(縱);
      var _ans15 = 畫布.直行(右)(縱);
      var _ans16 = 縱 + 一格;
      縱 = _ans16;
    };
    橫 = 10;
    縱 = 10;
    for (var _rand2 = 0; _rand2 < 13; _rand2++) {
      var _ans17 = 畫布.移筆(橫)(縱);
      var _ans18 = 畫布.直行(橫)(下);
      var _ans19 = 橫 + 一格;
      橫 = _ans19;
    };
    var _ans20 = 畫布.描其輪廓();
  };
  var 製一小格 = () => 0;
  製一小格 = function (列序) {
    return function (行序) {
      var _ans21 = 列序 * 一格;
      var _ans22 = _ans21 + 左;
      var 橫 = _ans22;
      var _ans23 = 行序 * 一格;
      var _ans24 = _ans23 + 上;
      var 縱 = _ans24;
      var _ans25 = 畫布.起筆();
      var _ans26 = 畫布.矩形(橫)(縱)(一格)(一格);
      var _ans27 = 畫布.填充其內();
      var _ans28 = 畫布.描其輪廓();
    };
  };
  var 數文列 = [];
  數文列.push("一", "二", "三", "四", "五", "六", "七", "八");
  var 數彩列 = [];
  數彩列.push(纯蓝色, 纯绿色, 纯红色, 海军蓝, 深红色, 深青色, 深黑色, 暗灰色);
  var 格內題數 = () => 0;
  格內題數 = function (數) {
    return function (列序) {
      return function (行序) {
        var _ans29 = 數文列[數 - 1];
        var 文 = _ans29;
        var _ans30 = 數彩列[數 - 1];
        var 彩 = _ans30;
        var _ans31 = 列序 * 一格;
        var _ans32 = _ans31 + 左;
        var _ans33 = _ans32 + 5;
        var 橫 = _ans33;
        var _ans34 = 行序 * 一格;
        var _ans35 = _ans34 + 上;
        var _ans36 = _ans35 + 21;
        var 縱 = _ans36;
        var _ans37 = 畫布.設填充之色(彩);
        var _ans38 = 畫布.題字(文)(橫)(縱);
        if (數 <= 3) {
          var _ans39 = 縱 + 1;
          縱 = _ans39;
          var _ans40 = 畫布.題字(文)(橫)(縱);
        };
      };
    };
  };
  var 製矩形一開格 = () => 0;
  製矩形一開格 = function (列序) {
    return function (行序) {
      var _ans41 = 列序 * 一格;
      var _ans42 = _ans41 + 左;
      var _ans43 = _ans42 + 0.5;
      var 橫 = _ans43;
      var _ans44 = 行序 * 一格;
      var _ans45 = _ans44 + 上;
      var _ans46 = _ans45 + 0.5;
      var 縱 = _ans46;
      var _ans47 = 畫布.設輪廓粗細(1);
      var _ans48 = 縱 + 一格;
      var _ans49 = _ans48 - 1;
      縱 = _ans49;
      var _ans50 = 畫布.設輪廓之色(暗灰色);
      var _ans51 = 畫布.起筆();
      var _ans52 = 畫布.移筆(橫)(縱);
      var _ans53 = 縱 - 一格;
      var _ans54 = _ans53 + 1;
      縱 = _ans54;
      var _ans55 = 畫布.直行(橫)(縱);
      var _ans56 = 橫 + 一格;
      var _ans57 = _ans56 - 1;
      橫 = _ans57;
      var _ans58 = 畫布.直行(橫)(縱);
      var _ans59 = 畫布.描其輪廓();
      var _ans60 = 畫布.設輪廓之色(純白色);
      var _ans61 = 畫布.起筆();
      var _ans62 = 畫布.移筆(橫)(縱);
      var _ans63 = 縱 + 一格;
      var _ans64 = _ans63 - 1;
      縱 = _ans64;
      var _ans65 = 畫布.直行(橫)(縱);
      var _ans66 = 橫 - 一格;
      var _ans67 = _ans66 + 1;
      橫 = _ans67;
      var _ans68 = 畫布.直行(橫)(縱);
      var _ans69 = 畫布.描其輪廓();
      var _ans70 = 縱 - 一格;
      var _ans71 = _ans70 + 1.5;
      縱 = _ans71;
      var _ans72 = 橫 + 0.5;
      橫 = _ans72;
      var _ans73 = 畫布.起筆();
      var _ans74 = 一格 - 2.5;
      var 一內格 = _ans74;
      var _ans75 = 畫布.矩形(橫)(縱)(一內格)(一內格);
      var _ans76 = 畫布.設填充之色(純白色);
      var _ans77 = 畫布.填充其內();
    };
  };
  var 新製一棋盤 = () => 0;
  新製一棋盤 = function () {
    var 橫 = 左;
    var 縱 = 上; /*"昔之「橫」者。今十是矣。"*/ /*"昔之「縱」者。今十是矣。"*/
    for (var _rand3 = 0; _rand3 < 14; _rand3++) {
      橫 = 左;
      for (var _rand4 = 0; _rand4 < 10; _rand4++) {
        var _ans78 = 畫布.矩形(橫)(縱)(一格)(一格);
        var _ans79 = 橫 + 一格;
        橫 = _ans79;
        格棧.push(0);
      };
      var _ans80 = 縱 + 一格;
      縱 = _ans80;
    };
    var _ans81 = 畫布.填充其內();
    var _ans82 = 畫布.描其輪廓();
  };
  var 捕鼠者 = () => 0;
  捕鼠者 = function (鼠) {
    var _ans83 = 鼠["橫"];
    var _ans84 = _ans83 - 左;
    var _ans85 = _ans84 / 一格;
    var _ans86 = 取底(_ans85);
    var 列序 = _ans86;
    var _ans87 = 鼠["縱"];
    var _ans88 = _ans87 - 上;
    var _ans89 = _ans88 / 一格;
    var _ans90 = 取底(_ans89);
    var 行序 = _ans90;
    if (舊行序 > -1) {
      var _ans91 = 畫布.起筆();
      var _ans92 = 畫布.設輪廓之色(深灰色);
      var _ans93 = 畫布.設填充之色(淺灰色);
      var _ans94 = 畫布.設輪廓粗細(2);
      var _ans95 = 製一小格(舊列序)(舊行序);
    };
    if (行序 < 0) {
      return;
    };
    if (行序 > 13) {
      return;
    };
    if (列序 < 0) {
      return;
    };
    if (列序 > 9) {
      return;
    };
    var _ans96 = 行序 * 10;
    var _ans97 = _ans96 + 列序;
    var _ans98 = _ans97 + 1;
    var 棧序 = _ans98;
    var _ans99 = 格棧[棧序 - 1];
    var 棧值 = _ans99;
    if (棧值 > 0) {
      return;
    };
    if (鼠["奔走乎"]) {
      var _ans100 = 畫布.起筆();
      var _ans101 = 畫布.設輪廓之色(深灰色);
      var _ans102 = 畫布.設填充之色(白煙色);
      var _ans103 = 畫布.設輪廓粗細(2);
      var _ans104 = 製一小格(列序)(行序);
      舊行序 = 行序;
      舊列序 = 列序;
      return;
    };
    if (鼠["推敲乎"]) {
      var _ans105 = 製矩形一開格(列序)(行序);
      var _ans106 = 格內題數(臨時之數)(列序)(行序);
      var _ans107 = 臨時之數 + 1;
      臨時之數 = _ans107;
      if (臨時之數 > 8) {
        臨時之數 = 1;
      };
      格棧[棧序 - 1] = 1;
      舊行序 = -1;
      舊列序 = -1;
      return;
    };
  };
  var 舊行序 = -1;
  var 舊列序 = -1;
  var 臨時之數 = 1;
  var _ans108 = 新製一棋盤();
  畫布["捕鼠者"] = 捕鼠者;
  var _ans109 = 畫布.設填充之色(纯蓝色);
  var _ans110 = 畫布.題字("掃  雷")(135)(460);
};
var _ans111 = 畫布經試用();