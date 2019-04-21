window.onload = function() {
    var menus = document.getElementById("menu").getElementsByTagName("li");
    var atext = document.getElementById("text");
    var arrText = [
        '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
        '例如：昌平区育新站龙旗广场2号楼609室',
        '例如：万达影院双人情侣券',
        '例如：东莞出事了，大老虎是谁？',
        '例如：北京初春降雪，天气变幻莫测'
    ];

    for (var i = 0; i < menus.length; i++) {
        menus[i].index = i;
        menus[i].onmousedown = function() {
            for (var i = 0; i < menus.length; i++) {
                menus[i].className = 'gradient';
                atext.value = "";
            }
            this.className = "active";
            atext.value = arrText[this.index];
        }

    }

    var oDiv = document.getElementById("update");
    var oUl = document.getElementById("uull");
    var lis = oUl.getElementsByTagName("li");
    var oBtnUp = document.getElementById("updateUpbtn");
    var oBtnDown = document.getElementById("updateDownbtn");

    var iNow = 0;
    var timer = null;



    // oBtnUp.click(function() { Move(-1); });
    // oBtnDown.click(function() { Move(1); });
    oBtnUp.onclick = Move(-1);
    oBtnDown.onclick = Move(1);
    var iH = 30;

    function clearTimer() { clearInterval(timer); };

    function autoPlay() {
        timer = setInterval(function() { Move(-1); }, 3500);
    }

    oDiv.onmouseenter = clearTimer();
    oDiv.onmouseleave = autoPlay();


    function Move(num) {
        iNow += num;
        if (Math.abs(iNow) > lis.length - 1) {
            iNow = 0;
        }
        // if (iNow > 0) {
        //     iNow = -(lis.length - 1);
        // }
        // oUl.style.top = iH * iNow + 1 + 'px';
        // oUl.style.top = iH * iNow - 2 + 'px';
        oUl.style.top = iH * iNow + 'px';
        // $("#uull").stop().animate({ 'top': iH * iNow }, 2200);
    }
}