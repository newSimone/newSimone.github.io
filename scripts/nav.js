// 导航
function nav(){
    //导航的效果
    var indexNavOne = $(".indexNavOne")[0];
    var indexNavTwo = $(".indexNavTwo")[0];
    var indexNavThree = $(".indexNavThree")[0];
    var indexNavFour = $(".indexNavFour")[0];
    changeColorOW(indexNavOne);
    changeColorOW(indexNavTwo);
    changeColorTF(indexNavThree);
    changeColorTF(indexNavFour);
    // changeColorOW(indexNavThree);
    // changeColorOW(indexNavFour);
    function changeColorOW(indexNavOT){
      indexNavOT.onmouseenter=function(){
        //随机颜色
        var colors = ['#2950cf','#59255c','#debb15','#1b8534','#e72222','#ff9c33','#debb15'];
        var end = Math.floor(Math.random()*colors.length);
        //改变颜色
        this.style.background=colors[end];
        //改变p标签颜色
        var indexNavP = this.children;
        $.each(indexNavP,function(n){
            this.style.color = '#fff';
            var a =this.getElementsByTagName("a");
            if(a[0]){
              a[0].style.color = "#fff";
            }
            // this.parentElement.children[0].style.color = "#fff";
            if(this.children[1]){
              this.children[1].src = "images/indexAdd.png";
            }
          this.ii = n;
          this.onmouseenter=function(){
            // ecah是从1开始计数，标题栏触摸不变色，所以跳过1
            if(this.ii != 1){
              switch(this.ii){
            //根据栏目不同修改颜色
              case 2:
                // 红色
                  this.parentElement.style.background = "#e72222";
                  break;
              case 3:
                // 橙色
                  this.parentElement.style.background = "#ff9c33";
                  break;
              case 4:
                // 黄色
                  this.parentElement.style.background = "#debb15";
                  break;
              // default:
              //     this.parentElement.style.textColor = "#fff";
              }
            }
          }
        });
        }
        indexNavOT.onmouseleave=function(){
          this.style.background="#fff";
          var indexNavP = this.children;
            $.each(indexNavP,function(n){
              this.style.color = 'rgb(96, 96, 96)';
              var a =this.getElementsByTagName("a");
              if(a[0]){
                a[0].style.color = "rgb(96, 96, 96)";
              }
              // this.parentElement.children[0].style.color = "rgb(96, 96, 96)";
              if(this.children[1]){
                this.children[1].src = "images/indexAddH.png";
              }
            });
        }
      }
    function changeColorTF(indexNavTF){
      indexNavTF.onmouseenter=function(){
        //随机颜色
        var colors = ['#2950cf','#59255c','#debb15','#1b8534','#e72222','#ff9c33','#debb15'];
        var end = Math.floor(Math.random()*colors.length);
        //改变颜色
        this.style.background=colors[end];
        //改变p标签颜色
        var indexNavP = this.children;
        $.each(indexNavP,function(n){
            this.style.color = '#fff';
  
            var a =this.getElementsByTagName("a");
            if(a[0]){
              a[0].style.color = "#fff";
            }
            // this.parentElement.children[0].style.color = "#fff";
            if(this.children[1]){
              this.children[1].src = "images/indexAdd.png";
            }
          this.ii = n;
          this.onmouseenter=function(){
            // ecah是从1开始计数，标题栏触摸不变色，所以跳过1
            if(this.ii != 1){
              switch(this.ii){
            //根据栏目不同修改颜色
                case 2:
                    this.parentElement.style.background = "#debb15";//黄  
                    if(this.innerText == "留言板   "){
                      this.parentElement.style.background = "#59255c";
                      break;
                  }
                    break;
                case 3:
                    this.parentElement.style.background = "#1b8534";
                    break;
                case 4:
                    this.parentElement.style.background = "#2950cf";
                    break;
                case 5:
                    this.parentElement.style.background = "#59255c";//留言板
              // default:
              //     this.parentElement.style.textColor = "#fff";
              }
            }
          }
        });
      }
      // 还原默认
      indexNavTF.onmouseleave=function(){
        this.style.background="#fff";
        var indexNavP = this.children;
          $.each(indexNavP,function(n){
            this.style.color = 'rgb(96, 96, 96)';
            // this.parentElement.children[0].style.color = "rgb(96, 96, 96)";
            var a =this.getElementsByTagName("a");
            if(a[0]){
              a[0].style.color = "rgb(96, 96, 96)";
            }
            // this.parentElement.children[0].style.color = "rgb(96, 96, 96)";
            if(this.children[1]){
              this.children[1].src = "images/indexAddH.png";
            }
          });
          
      }
    }
    $(".indexNaxX").click(
        function(){
          //如果是最后一个 则关闭全部
            if(this.className == "indexNaxX q"){
            // this.parentElement.parentElement.style.display = 'none';
            // this.parentElement.parentElement.style.display = 'none';
            $(this).parent("div").parent("div").slideUp(1000);
            }
            //否则关闭当前导航栏
            // $(this).slideUp(5000) ; //滑动消失
            $(this).parent("div").slideUp(1000);
            // this.parentElement.style.visibility = 'hidden';
        }
    );
    //显示导航
    var indexNav = $("#indexNav");
    var indexTop = $("#indexTop")[0];
    indexNav.click(function(){
      //显示导航
      // $(".indexNavs")[0].style.display = "block";
      $(".indexNavs").fadeIn(500);
      //将导航的定位设置为3
      $(".indexNavs")[0].style.zIndex = "9999";
      //将所有导航元素显示出来
      $.each( $(".indexNaxX"),function(n){
        // this.parentElement.style.visibility = "";
        $(this).parent("div").fadeIn(500) ;
      });
    });
  }
  nav();
  //回到顶部
  $(function () {
    var  backTop=["<div class=\"backTop\" id=\"backTop\">",
                "    <img src=\"images/up.png\" alt=\"\">",
                "</div>",
            ].join("");
    $('body').append(backTop);
    var backButton=$('#backTop');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    }
    backButton.on('click', backToTop);
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn("fast");
        else
            backButton.fadeOut("fast");
    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
  });