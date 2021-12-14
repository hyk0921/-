function backTop(){
    var back = document.querySelector(".back")
    var timeAll = 1000
    var stepAll = 20
    var timer
    window.onscroll = function(){
        if (document.documentElement.scrollTop >0) {
            back.style.opacity = "1"
        } else {
            back.style.opacity = "0"
        }
    }
    back.onclick = function(){
        var stp = document.documentElement.scrollTop
        var step = stp /(timeAll/stepAll)
        timer = setInterval(function(){
             stp -= step
            if(stp <= 0) {
                stp = 0
                clearInterval(timer)
            }
            document.documentElement.scrollTop = stp
        },stepAll)  
    }
     
}
backTop()
function tab(){
   var h2Nodes = document.querySelectorAll(".w3 .w3-1 h2") 
   var itemLists = document.querySelectorAll(".w3 .w3-1 .item")
   var h2Nodes2 = document.querySelectorAll(".w3 .w3-2 h2") 
   var itemLists2 = document.querySelectorAll(".w3 .w3-2 .item")
   var h2Nodes3 = document.querySelectorAll(".w5 h2") 
   var itemLists3 = document.querySelectorAll(".w5 .item")
   var h2Nodes4 = document.querySelectorAll(".w6 h2") 
   var itemLists4 = document.querySelectorAll(".w6 .item")
   function tabIn(node1,node2){
        for(var i = 0;i < node1.length;i++){
            node1[i].index = i
            node1[i].onclick = function(){
                for(var j = 0;j < node1.length;j++){
                    node2[j].style.display = "none"
                    node1[j].classList.remove("active")
                }
                node2[this.index].style.display = "block"
                this.classList.add("active")
            }
        }
   }
   tabIn(h2Nodes,itemLists)
   tabIn(h2Nodes2,itemLists2)
   tabIn(h2Nodes3,itemLists3)
   tabIn(h2Nodes4,itemLists4)
}
tab()
function smallSlide (){
    var w2 = document.querySelector(".w2")
    var box = document.querySelector('.w2 .banner');
    var left = document.querySelector('.w2 .left');
    var right = document.querySelector('.w2 .right');
    var bannerList = document.querySelector('.w2 .bannerList');
    var lis = box.querySelectorAll("li")
    var isMove = false
    var timer = null
    var timeAll = 600
    var timeStep = 20
    bannerList.style.left = -box.offsetWidth + "px"
    w2.onmouseenter = function(){
        left.style.opacity = 1;
        right.style.opacity = 1;
        
    };
    w2.onmouseleave = function(){
        left.style.opacity = 0;
        right.style.opacity = 0;
    }
    right.onclick = function(){
        move(true);
    }
    
    
    left.onclick = function(){
        move(false);
    }
    function move(flag){
        if(isMove){
            return
        }
        isMove = true
        setTimeout(function(){
            isMove = false
        },920)
            if(flag){
                var dis = -box.offsetWidth
            }else{
                var dis = box.offsetWidth
            }
        
        var lastDis = bannerList.offsetLeft + dis
        var step = dis / (timeAll/timeStep)
        timer = setInterval(function(){
            var left = bannerList.offsetLeft + step
            if(step<0){
                if(left <= lastDis) left = lastDis
            }else{
                if(left >= lastDis) left = lastDis
            }
            if(left == lastDis){
                clearInterval(timer)
                if(left == -box.offsetWidth*(lis.length-1)){
                    left = -box.offsetWidth
                }else if(left == 0){
                    left = -box.offsetWidth*(lis.length-2)
                }
            }
            
            bannerList.style.left = left + "px"
        },timeStep)
        
    }
}
smallSlide ()
function secMenu() {
var liNodes = document.querySelectorAll(".menu>ul>li")
var ulInNodes = document.querySelectorAll(".menu>ul>li .inner")
    for(var i = 0;i < liNodes.length;i++){
        liNodes[i].index = i
        liNodes[i].onmouseenter = function(){
            for(var j = 0;j < liNodes.length;j++){
                liNodes[j].classList.remove("active")
                ulInNodes[j].style.display = "none"
            }
            liNodes[this.index].classList.add("active")
            ulInNodes[this.index].style.display = "block"
        }
        liNodes[i].onmouseleave = function(){
            this.classList.remove("active")
            ulInNodes[this.index].style.display = "none"
        }
    }
}
secMenu()
function search(){
    var input = document.querySelector("main .search input")
    var beef = document.querySelector("main .search .beef")
    var beefP = beef.querySelector("p")
    input.onfocus = function(){
        beef.style.display = "block"
        beef.onmouseenter =function(){
            input.value = beefP.innerText
        }
        beef.onmouseleave =function(){
                // input.value = ""
        }
    
    }
    beefP.onclick = function(){
            input.value = "牛肉"
            beef.style.display = "none"
            
        }
    input.onblur = function (){
                beef.style.display = "none"
        }
    }
search()
function head(){
    var shows = document.querySelectorAll("#wrap header .show")
    var barBoxs = document.querySelectorAll("#wrap header .show .bar-box")
    var show3 = document.querySelector("#wrap header .show3")
    var show3Img = show3.querySelector("img:last-child")
    shows.forEach(function(item,i){
        item.index = i
        item.onmouseenter = function(){
            barBoxs[this.index].style.display = "block"
        }
        item.onmouseleave = function(){
            barBoxs[this.index].style.display = "none"
        }
    })
    show3.onmouseenter = function(){
        show3Img.style.display = "block"
    }
    show3.onmouseleave = function(){
        show3Img.style.display = "none"
    }
}
head()
function slide(){
    var banner = document.querySelector(".banner")
    var leftBtn = document.querySelector(".banner .left")
    var rightBtn = document.querySelector(".banner .right")
    var bannerList = document.querySelector(".banner .bannerList")
    var iconList = document.querySelectorAll(".iconList li")
    var timeAll = 600
    var timeStep = 20
    var timer = null
    var isMove = false
    var autoTimer = null
    bannerList.style.left = - 990 + "px"
    banner.onmouseover = function () {
        clearInterval(autoTimer)
    }
    banner.onmouseout = function () {
        autoRun()
    }
    rightBtn.onclick = function () {
        move(true)
    }
    leftBtn.onclick = function () {
        move(false)
    }

    function move(flag) {
        if (isMove) {
            return
        }
        isMove = true
        setTimeout(function () {
            isMove = false
        }, 700)
        if (typeof flag == "boolean") {
            if (flag) {
                var dis = -990
            } else {
                var dis = 990
            }
        } else {
            var dis = flag - bannerList.offsetLeft
        }

        var lastDis = bannerList.offsetLeft + dis
        var step = dis / (timeAll / timeStep)
        timer = setInterval(function () {
            var left = bannerList.offsetLeft + step
            if (left == lastDis) {
                clearInterval(timer)
                if (left == -6930) {
                    left = -990
                } else if (left == 0) {
                    left = -5940
                }
            }

            bannerList.style.left = left + "px"
        }, timeStep)

        var index = Math.abs(lastDis / 990) - 1
        if (index < 0) {
            index = 5
        }
        for (var i = 0; i < iconList.length; i++) {
            iconList[i].className = ""
        }
        iconList[index % 6].className = "current"
        autoIndex = index % 6 + 1
    }
    for (var i = 0; i < iconList.length; i++) {
        iconList[i].index = i
        iconList[i].onclick = function () {
            move((this.index + 1) * -990)
            autoIndex = this.index + 1
        }
    }
    var autoIndex = 1
    autoRun()
    function autoRun() {

        autoTimer = setInterval(function () {
            autoIndex++
            move(autoIndex * -990)
            if (autoIndex == 7) {
                autoIndex = 1
            }
        }, 4000)
    }
}
slide()
function jopDetail(){
    var lis = document.querySelectorAll("#wrap .w .content .banner .bannerList li")
    for(var i = 0;i < lis.length;i++){
        lis[i].onclick = function (){
            location.href = `${this.dataset.href}`
        }
    }
}
jopDetail()