window.onload = () => {
  const data = {};
  const $ = window.document.querySelector.bind(window.document);
    const undefined = () => {
    let data = this.props.data && this.props.data.$data || {};
    let $attr = this.props.data && this.props.data.$attr || {};
    let $theme = this.props.data && this.props.data.$theme || {};
    return {
      data,
      $attr,
      $theme,
    };
  };
  changeBannerH();
};

// 改变长宽
$(window).resize(changeBannerH);
function changeBannerH(){
  var index = document.getElementById('indexTop');
  var indexBg = document.getElementById('indexBg');
  var indexContainer = document.getElementById('indexContainer');
  var htmlH = $(window).height();
  index.style.height = htmlH+"px";
  indexBg.style.height = htmlH+'px';
  indexContainer.style.height = htmlH+'px';
};   

//首屏下滑
$("#indexArrow").click(function(){ //点击事件触发
    var top = $("#about").offset().top; //获取某个元素距顶部的距离
    $("body,html").animate({scrollTop:(top)+"px"},1000);//页面滚动到指定高度
})

//标签页标题
document.addEventListener('visibilitychange', function() {
  var isHidden = document.hidden;
  if (isHidden) {
    document.title = '快来快来看呀！';
  } else {
    document.title = '首页 欢迎光临！';
  }
});

$(function(){
  var about = $("#about").offset().top;
  $(window).scroll(function(){
      var this_scrollTop = $(this).scrollTop();
      if(this_scrollTop>about){
          // $("#about").fadeIn("fast");
      }
  });
}); 

