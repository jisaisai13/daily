/*
author: gongxian
date: 2020/9/22
mail: xianweb@qq.com
*/

+function(doc){

  var defaults = {
    type: null,
    size: 100,
    unit: '',
    prec: 0,
    change: function(){}
  };

  function Range(selector, options){

    options = Object.assign( {}, defaults, options);
    
    var ranges = doc.querySelectorAll(selector);  

    ranges.forEach(function(range){
      
      range.classList.add(options.type);

      range.querySelector('i').onmousedown = function(ev){

        var startX = ev.clientX;
        var i = this;
        var b = i.nextElementSibling;
        var startLeft = i.offsetLeft;
        var iWidth = i.offsetWidth;
        var maxLeft = range.clientWidth - iWidth;

        doc.onmousemove = function(ev){
          var left = startLeft + (ev.clientX - startX);
          if(left <= 0 ) left = 0;
          if(left >= maxLeft ) left = maxLeft;
          i.style.left = left + 'px';
          b.style.width = left + iWidth + 'px';
          var ratio = left/maxLeft ;
          var pct = (ratio * options.size).toFixed(options.prec);
          b.innerText = pct + options.unit;

          options.change(pct); //对外输出滑块当前的值

        };

        doc.onmouseup = function(){
          doc.onmousemove = null;
        }

      }

    })

   
  }

  window.Range = Range; //暴露到全局作用域

}(document);