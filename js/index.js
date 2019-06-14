//首页 荣誉 成绩
$(document).ready(function () {
        $(".honor .iconfont").hover(function () {
                $(this).addClass("animated")
        }, function () {
                $(".honor .iconfont:eq(0)").attr("class","iconfont icon-renzheng ")
                $(".honor .iconfont:eq(1)").attr("class","iconfont icon-jishu")
                $(".honor .iconfont:eq(2)").attr("class","iconfont icon-zuanshi")
                $(".honor .iconfont:eq(3)").attr("class","iconfont icon-pingtai")
           
        });
    })

     
         
window.onscroll = function () {
    
    var scrolTop = document.documentElement.scrollTop || document.body.scrollTop;

    var divTop1 = $('.con1')[0].offsetTop;
    
    
        //首页	产品解决效果
    if(scrolTop >= divTop1-100 && scrolTop <= divTop1+$('.con1').height()-100) {
        
                $('.con1 .box:eq(0)').addClass('animated fadeInLeft delay-.6s')
                $('.con1 .box:eq(1)').addClass('animated fadeInLeft delay-.6s')
                $('.con1 .box:eq(2)').addClass('animated fadeInRight delay-.6s')
                $('.con1 .box:eq(3)').addClass('animated fadeInRight delay-.6s')
            }else{
                $('.con1 .box').attr('class','box')
              
            }
}
     
        

          /* 关于我们  点击图片放大观看
     
    	// 开发时将标签ID传入，ID可以循环遍历i加1生成或用数据库主键字段，根据ID获取img标签src属性值
     */
    function zhezhao(id){
    	var _this = $(this);//将当前的img元素作为_this传入函数  
        imgShow("#outerdiv", "#innerdiv", "#bigimg",id);  
    }
    function imgShow(outerdiv, innerdiv, bigimg,id){  
        var src = $("#"+id).attr("src");//根据id获取当前点击的img元素中的src属性  
        $(bigimg).attr("src", src);//设置#bigimg元素的src属性  
        /*获取当前点击图片的真实大小，并显示弹出层及大图*/  
        $("<img/>").attr("src", src).load(function(){  
            var windowW = $(window).width();//获取当前窗口宽度  
            var windowH = $(window).height();//获取当前窗口高度  
            var realWidth = this.width;//获取图片真实宽度  
            var realHeight = this.height;//获取图片真实高度  
            var imgWidth, imgHeight;  
            var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  
              
            if(realHeight>windowH*scale) {//判断图片高度  
                imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放  
                imgWidth = imgHeight/realHeight*realWidth;  //等比例缩放宽度  
                if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度  
                    imgWidth = windowW*scale;//再对宽度进行缩放  
                }  
            } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度  
                imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放  
                imgHeight = imgWidth/realWidth*realHeight; //等比例缩放高度  
            } else {//如果图片真实高度和宽度都符合要求，高宽不变  
                imgWidth = realWidth;  
                imgHeight = realHeight;  
            }  
            $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放  
              
            var w = (windowW-imgWidth)/2; //计算图片与窗口左边距  
            var h = ((windowH-imgHeight)/2); //计算图片与窗口上边距  
            $(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性  
            $(outerdiv).css({"top":"45px"}).fadeIn("fast");//淡入显示#outerdiv及.pimg  
           
        });  
        $(outerdiv).click(function(){//再次点击淡出消失弹出层  
            $(this).fadeOut("fast");  
        });  
    }  
    