$(document).ready(function(){function e(){for(i=1;i<=n-1;i++)$("#step-"+i+"-next").click({num:i},function(e){e.preventDefault();var t=$("#questions-form");if(t.validate(),t.valid()){var s=e.data.num;if($("#step-"+s).fadeOut(function(){$("#step-"+(s+1)).fadeIn(),$("#step-"+(s+1)+"-nav").addClass("complete"),$("#step-"+(s+1)+"-nav").removeClass("disabled")}),$("html, body").animate({scrollTop:0},"slow"),a()){var n=s+1;history.pushState({step:n},null,"?step-"+n)}}})}function t(){for(i=2;i<=n;i++)$("#step-"+i+"-back").click({num:i},function(e){(e.preventDefault(),a())?history.back():s(e.data.num)})}function s(e){$("#step-"+e).fadeOut(function(){$("#step-"+e+" .form .form-group").removeClass("has-error"),$("#step-"+(e-1)).fadeIn(),$("#step-"+e+"-nav").addClass("disabled"),$("#step-"+e+"-nav").removeClass("complete"),$("#step-"+(e-1)+"-nav").addClass("complete")}),$("html, body").animate({scrollTop:0},"slow")}function a(){return!(!window.history||!history.pushState)}var n=3;e(),t(),$("#questions-form").validate({errorElement:"small",errorPlacement:function(e,t){e.addClass("form-text"),e.insertAfter(t)},highlight:function(e){$(e).parents(".form-group").addClass("has-error").removeClass("has-success")},unhighlight:function(e){$(e).parents(".form-group").addClass("has-success").removeClass("has-error")}}),a()&&(window.addEventListener("popstate",function(e){s(e.state.step+1)}),history.pushState({step:1},null,"?step-1"))});