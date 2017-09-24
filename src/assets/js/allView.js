var marque = function() {
  var speed = 80;
  var demo = document.getElementById("demo");
  var demo1 = document.getElementById("demo1");
  var demo2 = document.getElementById("demo2");
  var MyMar = setInterval(move, speed);

  // 拷贝demo1的内容,实现无缝接合
  demo2.innerHTML = demo1.innerHTML;
  demo.onmouseover = function() {
    clearInterval(MyMar);
  };
  demo.onmouseout = function() {
    MyMar = setInterval(move, speed);
  };

  function move(){
    // 当demo1滚动完时
    if(demo2.offsetTop - demo.scrollTop <= 0){
      // demo跳到最顶端
     demo.scrollTop -= demo1.offsetHeight;
    }else{
      // 实现自动向上滚动
     demo.scrollTop++;
    }
  }
}

module.exports = {
  marque
}
