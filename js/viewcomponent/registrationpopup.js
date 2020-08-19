var signupArray=null;var windowsignupArray=null;var Request=null;var PhoneCode=null;var PhoneNumber=null;var WindowRequest=null;var WindowPhoneCode=null;var WindowPhoneNumber=null;var CountryID=null;var LoginRequest=null;var LoginPhoneCode=null;var LoginPhoneNumber=null;var LoginCountryID=null;var AstrologerId=null;var _verifyButtonText=null;var _verifyLoginButtonText=null;var _loginbuttontext=null;var seconds=60;var timer;var logintimer;$(document).ready(function()
{appendSignupUtmParamOp.init();ActiveStatus()
if($('#ListCount').val()<=0)
{$(".load_more").hide();$('#countspan').hide();}
localStorage.removeItem("flagval");var t=window.location.pathname
var UsreNotificationPath=t.substring(0,23)
if(UsreNotificationPath=="/view-all-notification"||UsreNotificationPath=="/view-all-notification/")
{$('#UserNotification').hide();var url=new URL(window.location.href);var getval=url.searchParams.get("offerid");$("#notify"+getval).removeClass("activeYellow");ActiveStatus()
$(window).scroll(function(event){onScrollingPageLoad()});}
else
{ActiveStatus()}
var count=0;var checkstatus;checkstatus=localStorage.getItem("NotificationToken");if(checkstatus>0)
{$('#countspan').hide();}
if(checkstatus=="-1")
{var unreadcount=localStorage.getItem("LatestUnreadcount");$('#countspan').html(parseInt(unreadcount));$('#countspan').show();return;}
var currentCount=$('#TotalCount').val();var precount=localStorage.getItem("keyName");if(precount==null)
{precount=0;}
if(precount!=undefined||precount!=null)
{if(parseInt(precount)<parseInt(currentCount))
{var LatestCount=currentCount-precount;localStorage.setItem("keyName",currentCount);localStorage.setItem("LatestUnreadcount",LatestCount);$('#LatestCount').val(parseInt(LatestCount));$('#countspan').html(LatestCount);$('#countspan').show();localStorage.setItem("NotificationToken",-1);}
else{if(currentCount==0)
{$('#countspan').hide();return false;}
localStorage.setItem("keyName",currentCount)
$('#countspan').html(currentCount);}}
var myString=$("#IPValue").val();if(myString==null||myString==""||myString==''||myString=='undefined')
{$("#WindowPhoneCode").val("91 (IN)");$("#PopUpPhoneCode").val("91 (IN)");$("#ForgetPhoneCode").val("91 (IN)");}
else
{var result=contained(myString,countries);$("#WindowPhoneCode").val(result);$("#PopUpPhoneCode").val(result);$("#ForgetPhoneCode").val(result);}
var t=window.location.pathname
var UsreNotificationPath=t.substring(0,23)
if(UsreNotificationPath=="/view-all-notification"||UsreNotificationPath=="/view-all-notification/")
{$('#UserNotification').hide();moreAndLess()
var url=new URL(window.location.href);var getval=url.searchParams.get("offerid");$("#notify"+getval).removeClass("activeYellow");ActiveStatus()
$(window).scroll(function(event){onScrollingPageLoad()});}
else
{ActiveStatus()}
if(window.location.pathname=="/")
{var x=getCookie("Username");if(x!=""){$('#divAppBanner').hide();}
else
{setTimeout(function(){$('#divAppBanner').slideDown(2000);},10000);}}
ActiveStatus()});var newCount=1;function onScrollingPageLoad(){var scroll=$(window).scrollTop();var one=$('#counter').position().top;var lastdivpostion=parseInt(one)-500;var totalpagesize=$('#PageCount').val();if(scroll>lastdivpostion){newCount=newCount+1;if(newCount<=totalpagesize){$.ajax({type:'get',url:'/auto_scrolling_data_request/'+newCount+'',dataType:'json',success:function(result){var last=localStorage.getItem("lastdivid");var lastid=parseInt(last)+1;var discriptionurl;var description;var createdDate;var obj=result.userNotificationListModel;if(obj!=null)
{for(var key in obj)
{if(obj[key].isActive=="true")
{var notificationid;var Descriptionmsgid;var preid;var nextid;if(obj[key].notificationId!=null||obj[key].notificationId!=undefined)
{notificationid='notification_'+obj[key].notificationId;descriptionid='notify'+obj[key].notificationId;Descriptionmsgid='descriptionmsg'+obj[key].notificationId;preid='prev'+lastid;nextid='next'+lastid;}
var title=obj[key].title;if(obj[key].descriptionUrl!=null||obj[key].descriptionUrl!=undefined)
{discriptionurl=obj[key].descriptionUrl;}
else{discriptionurl="#"}
if(obj[key].description!=null||obj[key].description!=undefined)
{description=obj[key].description;}
else
{description="No Data Found";}
if(obj[key].SubTitle!=null||obj[key].SubTitle!=undefined)
{subtitle=obj[key].SubTitle;}
else{subtitle="No Data Found";}
if(obj[key].createdDate!=null||obj[key].createdDate!=undefined)
{var datepaert=obj[key].createdDate;var date=moment(datepaert).format("DD-MMM-YYYY HH:mm");createdDate=date;}
else{createdDate="";}
var newdiv;if(description.length>200)
{newdiv="<a href='"+discriptionurl+"' title='Click here to read more' id='"+notificationid+"' class='anchartag' target='_blank' style='text-decoration:none !important;'>"+
"<div  id='"+descriptionid+"' class='notificationTop20 activeYellow'>"+
"<div class='col-xs-3 col-md-2  text-center'><span class='NameFirstltr'>"+title.substring(0,1)+"</span></div>"+
" <div class='col-xs-9 col-md-10 notification_font'> <span class='notification_text'>"+title+"</span>"+
"<div class='clearfix'></div>"+
"<span class='notification_msg GrayColor'>"+subtitle+"</span>"+
"<div class='clearfix'></div>"+
"<span class='notification_msg description' name="+Descriptionmsgid+" id="+Descriptionmsgid+">"+
"<div class='notificationReadMore' style='display: block' id="+preid+">"+
description+"<a class='moredata' style='cursor:pointer' id="+lastid+">Read more</a>"+
"</div>"+
"<div style='display: none;' id="+nextid+">"+
description+"<a class='next' style='cursor:pointer' id="+lastid+">Read less</a>"+
"</div>"+
"</span>"+
"<span class='notification_date pull-right'><img src='//images.astroyogi.com/astroyogi2017/common/clock-outline.png' width='12' height='12' alt=''/>"+createdDate+"</span> </div>"+
"<div class='clearfix'></div>"+
"</div>"+
" <div class='clearfix'></div>"+
" </a>"+
"<hr class='notification_hr'>";}
else{newdiv="<a href='"+discriptionurl+"' id='"+notificationid+"' class='anchartag' target='_blank' style='text-decoration:none !important;'>"+
"<div  id='"+descriptionid+"' class='notificationTop20 activeYellow'>"+
"<div class='col-xs-3 col-md-2  text-center'><span class='NameFirstltr'>"+title.substring(0,1)+"</span></div>"+
" <div class='col-xs-9 col-md-10 notification_font'> <span class='notification_text'>"+title+"</span>"+
"<div class='clearfix'></div>"+
"<span class='notification_msg GrayColor'>"+subtitle+"</span>"+
"<div class='clearfix'></div>"+
"<span class='notification_msg description' name="+Descriptionmsgid+" id="+Descriptionmsgid+">"+description+
"</span>"+
"<span class='notification_date pull-right'><img src='//images.astroyogi.com/astroyogi2017/common/clock-outline.png' width='12' height='12' alt=''/>"+createdDate+"</span> </div>"+
"<div class='clearfix'></div>"+
"</div>"+
" <div class='clearfix'></div>"+
" </a>"+
"<hr class='notification_hr'>";}
$('.Notifications_inner_main').append(newdiv);lastid++;}}
localStorage.setItem("lastdivid",lastid);}
ActiveStatus()
$(".moredata").click(function(){var mordataid=$(this).attr('id');$('#prev'+mordataid).hide();$('#next'+mordataid).show();var parentid=$(this).closest('.notificationTop20').attr('id');var id=parentid.substring(6);var test=localStorage.getItem("test");var obj=[];if(test){obj=JSON.parse(test);}
var index=obj.map(function(o){return o;}).indexOf(id);if(index<0)
{obj.push(id);localStorage.setItem("test",JSON.stringify(obj));}
ActiveStatus()
return false;});$(".next").click(function(){var mordataid=$(this).attr('id');$('#prev'+mordataid).show();$('#next'+mordataid).hide();return false;});}});};};}
function moreAndLess()
{var maxLength=50;var removedStr;var showChar=200;var ellipsestext="...";var moretext="more";var lesstext="less";var i=1001;$(".description").each(function(){var myStr=$(this).text();var content=$(this).html();if(content.length>showChar){var c=content.substr(0,showChar);var html='<div class="notificationReadMore" style="display:block" id='+'prev'+i+' >'+content+'<a class="moredata" style="cursor:pointer"  id='+i+' >Read more</a></div>'+'<div style ="display:none" id='+"next"+i+'>'+content+'<a class="next" style="cursor:pointer" id='+i+'>Read less</a></div>'
$(this).html(html);}
i++;});localStorage.setItem("lastdivid",i);$(".moredata").click(function(){var mordataid=$(this).attr('id');$('#prev'+mordataid).hide();$('#next'+mordataid).show();return false;});$(".next").click(function(){var mordataid=$(this).attr('id');$('#prev'+mordataid).show();$('#next'+mordataid).hide();return false;});}
$(".moredata").click(function(){var mordataid=$(this).attr('id');$('#prev'+mordataid).hide();$('#next'+mordataid).show();return false;});$(".next").click(function(){var mordataid=$(this).attr('id');$('#prev'+mordataid).show();$('#next'+mordataid).hide();return false;});$('#notification_link').click(function(){var flagvalue=localStorage.getItem("flagval");if(flagvalue==null)
{flagvalue=-1;}
if(flagvalue<0)
{$('#notificationContainner').toggle();$('#notificationContainner').show();$('#countspan').hide();localStorage.setItem("NotificationToken",1);localStorage.setItem("flagval",1);return false;}})
$('html').click(function(){var myflag=localStorage.getItem("flagval");if(myflag==null)
{flagval=1;}
if(myflag>0)
{$('#notificationContainner').hide();localStorage.setItem("flagval",-1);}})
$('.Notifications_inner_main').on("click",".anchartag",function(event)
{var ancharid=$(this).attr('id');var id=ancharid.substring(13,15);var test=localStorage.getItem("test");var obj=[];if(test){obj=JSON.parse(test);}
var index=obj.map(function(o){return o;}).indexOf(id);if(index<0)
{obj.push(id);localStorage.setItem("test",JSON.stringify(obj));}
ActiveStatus()
if($(this).attr('href')!=undefined)
{var Commingurl=$(this).attr('href');if(Commingurl.includes("https://")==true)
{window.open(Commingurl,'_blank');return false;}
else
{return false;}}});function formatDate(date){var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];var day=date.getDate();var monthIndex=date.getMonth();var year=date.getFullYear();return day+' '+monthNames[monthIndex]+' '+year;}
$('.userdata').click(function(){var id=$(this).attr('id');var discriptionid=id.substring(6,7);var test=localStorage.getItem("test");var obj=[];if(test){obj=JSON.parse(test);}
var index=obj.map(function(o){return o;}).indexOf(id);if(index<0)
{obj.push($(this).attr('id'));localStorage.setItem("test",JSON.stringify(obj));}
ActiveStatus()})
$('.frontnotification').click(function(){var descriptionUrl=$(this).attr('name');var ids=$(this).attr('id');var id=ids.substring(13,15);var test=localStorage.getItem("test");var obj=[];if(test){obj=JSON.parse(test);}
var index=obj.map(function(o){return o;}).indexOf(id);if(index<0)
{obj.push(id);localStorage.setItem("test",JSON.stringify(obj));}
ActiveStatus()
if(descriptionUrl!=null&&descriptionUrl!=undefined)
{if(descriptionUrl.includes('https://')==true)
{window.open(descriptionUrl,'_blank');return false;}
else
{window.location.href='/view-all-notification/?offerid='+id+'';return false;}}
else
{window.location.href='/view-all-notification/?offerid='+id+'';return false;}})
function ActiveStatus()
{var test=JSON.parse(localStorage.getItem("test"));var orignalUrl=window.location.pathname
var SubUrl=orignalUrl.substring(0,23)
if(SubUrl=="/view-all-notification"||SubUrl=="/view-all-notification/")
{if(localStorage.getItem("test")!=null)
{for(let i=0;i<test.length;i++){let childArray=test[i];$("#notification_"+childArray).removeClass("activeYellow");$("#notify"+childArray).removeClass("activeYellow");}}}
else{if(localStorage.getItem("test")!=null)
{for(let i=0;i<test.length;i++){let childArray=test[i];$("#"+childArray).removeClass("activeYellow");}}}}
function fncCloseAppDownloadBanner()
{$("#divAppBanner").hide();var _bannercookie=getCookie("Username");if(_bannercookie=="")
{var user="close";setCookie("Username",user,15)}}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+"; "+expires;}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return "";}
function showforgetpassword()
{$("#loginPopupModal").modal("hide");$("#ttaforgetpassword").modal("show");}
function OpenSignupModal(){sendGAEvent('Homepage_HeaderMenu','Click on Signup');appendSignupUtmParamOp.init();$("#loginPopupModal").modal("hide");$("#registrationPopupModal").modal("show");var myString=$("#IPValue").val();if(myString==null||myString==""||myString==''||myString=='undefined')
{$("#PopUpPhoneCode").val("91 (IN)");}
else
{var result=contained(myString,countries);$("#PopUpPhoneCode").val(result);}
$("#bannerimage").addClass("b-lazy b-loaded");$("#verifyOTPForm").hide();$("#registrationForm").show();}
function contained(myString,myArray){var value=null;$.each(myArray,function(i,val){if(val.indexOf(myString)>=0){value=val;return false;}});return value;}
function ShowPasswordDiv()
{$("#divloginWihtOTP").hide();$("#divloginWithPassword").show();}
function OpenLogin()
{sendGAEvent('Homepage_HeaderMenu','Click on Login');$("#registrationPopupModal").modal("hide");$("#loginPopupModal").modal("show");$("#loginbannerimage").addClass("b-lazy b-loaded");$("#lblMsg").hide();$("#verifyOTPLoginForm").hide();$("#divloginWithPassword").hide();$("#divloginWihtOTP").show();}
function SendOTPLogin()
{$.ajax({type:'GET',url:'/talktoastrologer/account/sendsigninotptextasync',data:{_phoneCode:LoginPhoneCode,_phoneNumber:LoginPhoneNumber},success:function(result){if(result.success==true){$('#LoginMobileError').hide();$("#loginresendTimer").hide();$("#loginotpSummary").show().text("You will receive an SMS shortly.");$("#loginresendbySMSlink").hide();$("#loginresendlink").hide();$(".combine").first().focus();$(".combine").val('');setTimeout(function(){$("#loginotpSummary").hide();$("#loginresendbySMSlink").show();$("#loginresendlink").show();},20000);}
else{$('#LoginMobileError').show();$('#LoginMobileError').html(result.message);}}});}
function SendOTP()
{$.ajax({type:'GET',url:'/talktoastrologer/account/TTASendOtp',data:{_phoneCode:signupArray.PhoneCode,_phoneNumber:signupArray.PhoneNumber},success:function(result){if(result.success){$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text('');Request=result.data.hdnOTP;PhoneCode=result.data.hdnPhoneCode;PhoneNumber=result.data.hdnPhoneNumber;$("#otpSummary").show().text("You will receive an SMS shortly.");$("#resendOTPlink").hide();$("#resendlink").hide();$(".combine").first().focus();setTimeout(function(){$("#otpSummary").hide();$("#resendOTPlink").show();$("#resendlink").show();},20000);$('.combine').val('');$("#mobileNumber").text("+"+signupArray.PhoneCode+signupArray.PhoneNumber);}
else
{$('#MobileError').show();$('#MobileError').html(result.message);}}});}
function LoginOTP()
{_loginbuttontext=$("#btnLogin").text();$("#btnLogin").text("Please Wait...").attr("disabled",true);var _loginphoneNumber=$("#PopUpLoginPhoneNumber").val();LoginPhoneNumber=_loginphoneNumber;$.ajax({type:'GET',url:'/talktoastrologer/account/sendsigninotpasync',data:{_phoneCode:null,_phoneNumber:LoginPhoneNumber},success:function(result){if(result.success==true){$('#LoginMobileError').hide();LoginRequest=result.data.otp;$("#divloginWihtOTP").hide();$("#divloginWithPassword").hide();$("#verifyOTPLoginForm").show();$("#loginresendTimer").hide();$("#loginresendlink").hide();$("#loginresendbySMSlink").hide();setTimeout(function(){$("#loginotpSummary").hide();$("#loginresendlink").show();$("#loginresendbySMSlink").show();},20000);$("#resendTimer").hide();$("#loginmobileNumber").text(LoginPhoneNumber);$(".combine").val("");$("#divloginOTP :input[type='number']:first").focus();}
else{$("#btnLogin").text(_loginbuttontext).attr("disabled",false);$('#LoginMobileError').show();$('#LoginMobileError').html(result.message);}}});}
function toggleLogin()
{$("#divloginWihtOTP").show();$("#divloginWithPassword").hide();$("#verifyOTPLoginForm").hide();$("#loginresendTimer").hide();}
function ResendLoginOTP(){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('#errormsg').hide();$("#RequiredFieldOTP").hide();$('#successMsg').hide();$("#BtnResend").attr('disabled',true);var _PhoneCode=LoginPhoneCode;var _phoneNumber=LoginPhoneNumber;PageURL="";$.ajax({type:'POST',url:'/talktoastrologer/account/sendsigninotpvoiceasync',data:{_phoneCode:_PhoneCode,_phoneNumber:_phoneNumber,_pageUrl:PageURL},success:function(response){if(response){if(response.success){$("#loginresendTimer").hide();$("#loginresendbySMSlink").hide();$("#loginresendlink").hide();$("#loginotpSummary").show().text("You will receive an call shortly.");$(".combine").first().focus();setTimeout(function(){$("#loginotpSummary").hide();$("#loginresendbySMSlink").show();$("#loginresendlink").show();},20000);}else{$('.otpresponseerrormsg').text(response.message);}
$("#BtnResend").removeAttr("disabled");}},error:function(response){$('#VerifyPhoneNumber').show();$('#MessageBox').hide();$('#successMsg').hide();$('#errormsg').show();$('#errormsg').text(response.message);$("#BtnResend").removeAttr("disabled");}});return false;}
$("#PopUpLoginPhoneNumber").keyup(function(e){if($(this).val()!=''){$("#LoginMobileError").hide();$("#btnLogin").removeAttr("disabled");$("#btnLogin").removeClass("sign_up_default");$("#btnLogin").addClass("sign_up_warning");}else{$("#LoginMobileError").hide();$("#btnLogin").attr('disabled','disabled');$("#btnLogin").removeClass("sign_up_warning");$("#btnLogin").addClass("sign_up_default");}});$("#PopUpPhoneNumber").keyup(function(e){$("#MobileError").hide();if($(this).val()!=''){$("#btnSubmit").removeAttr("disabled");$("#btnSubmit").removeClass("sign_up_default");$("#btnSubmit").addClass("sign_up_warning");}else{$("#btnSubmit").attr('disabled','disabled');$("#btnSubmit").removeClass("sign_up_warning");$("#btnSubmit").addClass("sign_up_default");}});$("#frmRegistrationpopup").submit(function(e){if($("#MobileError").hide(),$("#popupSignUpValidationSummary").hide(),$(this).valid()){e.preventDefault();var t=$("#frmRegistrationpopup"),o=$('input[name="__RequestVerificationToken"]',t).val();var CountryId=null;signupArray={PhoneCode:$("#PopUpPhoneCode").val(),PhoneNumber:$("#PopUpPhoneNumber").val(),UtmCampaign:$("#PopUpUtmCampaign").val(),UtmSource:$("#PopUpUtmSource").val(),UtmContent:$("#PopUpUtmContent").val(),UtmMedium:$("#PopUpUtmMedium").val(),UtmTerm:$("#PopUpUtmTerm").val()};var path=window.location.pathname;if(path=="/")
{signupArray.EncAstroPartnerId="838fbd362ebd78bbbe525d63aa516a21";}
else
{signupArray.EncAstroPartnerId="75514ca379499ecebba86af864e50cb2";}
var checkexistance=countries.includes($("#PopUpPhoneCode").val());if(checkexistance==false)
{$('#MobileError').show();$('#MobileError').html("Enter valid Phone Code");return false;}
var _phoneCode=signupArray.PhoneCode.split('(')[0].trim();CountryID=signupArray.PhoneCode.split('(')[1].trim().replace(')','');signupArray.PhoneCode=_phoneCode;if(CountryID!=""){var pattern=new RegExp("^[0-9]{10}$");var othercountrypattern=new RegExp("^[0-9]");if(CountryID==="IN"||CountryID==="US"||CountryID==="CA"){if(signupArray.PhoneNumber!=null&&pattern.test(signupArray.PhoneNumber)){$('#MobileError').hide();}else{$('#MobileError').show().html("");$('#MobileError').html("Enter your 10 digit mobile number");return false;}}
else{if(signupArray.PhoneNumber.length>3&&signupArray.PhoneNumber.length<17&&othercountrypattern.test(signupArray.PhoneNumber)){$('#MobileError').hide();}
else{$('#MobileError').show();$('#MobileError').html("Enter your valid mobile number");return false;}}}
var a=$("#frmRegistrationpopup").find("[type='submit']").text();$("#frmRegistrationpopup").find("[type='submit']").text("Please wait.."),$("#frmRegistrationpopup").find("[type='submit']").attr("disabled",!0);$.ajax({type:'GET',url:'/talktoastrologer/account/sendsignupotp',data:{_phoneCode:signupArray.PhoneCode,_phoneNumber:signupArray.PhoneNumber},success:function(result){if(result.success){$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text('');Request=result.data.hdnOTP;PhoneCode=result.data.hdnPhoneCode;PhoneNumber=result.data.hdnPhoneNumber;$("#registrationForm").hide();$("#verifyOTPForm").show();$('.combine').val('');$("#resendOTPlink").hide();$("#resendlink").hide();setTimeout(function(){$("#otpSummary").hide();$("#resendOTPlink").show();$("#resendlink").show();},20000);$("#resendTimer").hide();$("#mobileNumber").text("+"+signupArray.PhoneCode+signupArray.PhoneNumber);$(".combine").first().focus();}
else
{$('#MobileError').show();$('#MobileError').html(result.message);$("#frmRegistrationpopup").find("[type='submit']").text("SIGN UP"),$("#frmRegistrationpopup").find("[type='submit']").attr("disabled",0);$("#btnSubmit").prop('disabled',false);}}});}});function Reload()
{location.reload();}
function ResendOTP(){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('#errormsg').hide();$("#RequiredFieldOTP").hide();$('#successMsg').hide();$("#BtnResend").attr('disabled',true);var _PhoneCode=PhoneCode;var _phoneNumber=PhoneNumber;PageURL="";$.ajax({type:'POST',url:'/talktoastrologer/account/resendotp',data:{_phoneCode:_PhoneCode,_phoneNumber:_phoneNumber,_pageUrl:PageURL},success:function(response){if(response){if(response.success){$("#resendTimer").hide();$("#resendOTPlink").hide();$("#resendlink").hide();$("#otpSummary").show().text("You will receive a call shortly.");$(".combine").first().focus();setTimeout(function(){$("#otpSummary").hide();$("#resendOTPlink").show();$("#resendlink").show();},20000);}else{$('.otpresponseerrormsg').text(response.message);}
$("#BtnResend").removeAttr("disabled");}},error:function(response){$('#VerifyPhoneNumber').show();$('#MessageBox').hide();$('#successMsg').hide();$('#errormsg').show();$('#errormsg').text(response.message);$("#BtnResend").removeAttr("disabled");}});return false;}
function VerifyOTP(){_verifyButtonText=$("#btnverifyOTP").text();$("#btnverifyOTP").text("Please Wait...").attr("disabled",true);var _pagelanguage=$("#language").val();$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('#errormsg').hide();$("#RequiredFieldOTP").hide();$('#successMsg').hide();var form=$('.combine');var vals=form.map(function(){var value=$.trim(this.value)
return value?value:undefined;}).get();var completeOTP=vals.join();completeOTP=completeOTP.toString().replace(/,/g,"");if(completeOTP.length!=6){$("#otpresponseerrormsg").show().text("");$("#otpresponseerrormsg").show().text("Invalid OTP");return false;}
var txtotp=completeOTP;var hdnotp=Request;var phoneCode=PhoneCode;var phoneNumber=PhoneNumber;var winlocation;if(txtotp==hdnotp){signupArray={PhoneCode:PhoneCode,PhoneNumber:PhoneNumber,OTP:Request,UtmCampaign:$("#PopUpUtmCampaign").val(),UtmSource:$("#PopUpUtmSource").val(),UtmContent:$("#PopUpUtmContent").val(),UtmMedium:$("#PopUpUtmMedium").val(),UtmTerm:$("#PopUpUtmTerm").val(),CountryId:CountryID};$("#BtnVerify").attr('disabled',true);$.ajax({type:'POST',url:'/talktoastrologer/account/signupwithotp',data:signupArray,success:function(response){if(response.success==true)
{dataLayer.push({'event':'form_submit_otp'});localStorage.setItem('detailpopupHit',null);localStorage.setItem('LoyalitypopupHIt',null);$("#registrationPopupModal").modal("hide");location.reload();}
else{if(response.message.indexOf("This Phone Number is already")!=-1)
{$("#btnverifyOTP").removeClass("sign_up_warning top30");$("#btnverifyOTP").addClass("sign_up_default top30");}
$("#popupSignUpValidationSummary").show().text(response.message);}},failure:function(response){$("#BtnVerify").removeAttr("disabled");}});}else{$("#otpresponseerrormsg").show().text("Invalid OTP");$("#btnverifyOTP").text(_verifyButtonText).attr("disabled",false);}}
function LoginWithPassword()
{_loginbuttontext=$("#btnLoginPass").text();$("#btnLoginPass").text("Please Wait...").attr("disabled",true);var _emailid=$("#EmailAddressLogin").val();var _password=$("#password").val();if(_emailid=='')
{$("#loginemailerror").show().text("Enter email address");$("#btnLoginPass").text(_loginbuttontext).attr("disabled",false);return false;}
else{$("#loginemailerror").hide();}
if(_password=='')
{$("#loginpassworderror").show().text("Enter password");$("#btnLoginPass").text(_loginbuttontext).attr("disabled",false);return false;}
else{$("#loginpassworderror").hide();}
$.ajax({type:'POST',url:'/talktoastrologer/account/signinwithpassword',data:{emailid:_emailid,password:_password},success:function(response){if(response.success==true)
{var pathname=window.location.pathname;window.location=pathname;}
else
{$("#loginValidationSummary").show().text(response.message);$("#btnLoginPass").text(_loginbuttontext).attr("disabled",false);}},failure:function(response){$("#BtnVerify").removeAttr("disabled");}});}
function VerifyLoginOTP(){var _pagelanguage=$("#language").val();_verifyLoginButtonText=$("#btnloginverifyOTP").text();$("#btnloginverifyOTP").text("Please Wait...").attr("disabled",true);$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('#errormsg').hide();$("#RequiredFieldOTP").hide();$('#successMsg').hide();var form=$('.combine');var vals=form.map(function(){var value=$.trim(this.value)
return value?value:undefined;}).get();var completeOTP=vals.join();completeOTP=completeOTP.toString().replace(/,/g,"");if(completeOTP.length!=6){$("#loginotpresponseerrormsg").show().text("");$("#loginotpresponseerrormsg").show().text("Invalid OTP");return false;}
var txtotp=completeOTP;var hdnotp=LoginRequest;var phoneCode=LoginPhoneCode;var phoneNumber=LoginPhoneNumber;var winlocation;if(txtotp==hdnotp){$("#BtnVerify").attr('disabled',true);$.ajax({type:'POST',url:'/talktoastrologer/account/signinwithotp',data:{_phoneNumber:LoginPhoneNumber,_otp:LoginRequest},success:function(response){if(response.success==true)
{var pathname=window.location.pathname;window.location=pathname;}
else
{$("#popupSignUpValidationSummary").show().text(response.message);}},failure:function(response){$("#BtnVerify").removeAttr("disabled");}});}else{$("#btnloginverifyOTP").text(_verifyLoginButtonText).attr("disabled",false);$("#loginotpresponseerrormsg").show().text("Invalid OTP");}}
var container=document.getElementsByClassName("divOTP")[0];container.onkeyup=function(e){var target=e.srcElement||e.target;var maxLength=1;var myLength=target.value.length;if(myLength>=maxLength){var next=target;while(next=next.nextElementSibling){if(next==null)
break;if(next.tagName.toLowerCase()==="input"){next.focus();break;}}}
else if(myLength===0){var previous=target;while(previous=previous.previousElementSibling){if(previous==null)
break;if(previous.tagName.toLowerCase()==="input"){previous.focus();break;}}}
var form=$('.combine');var vals=form.map(function(){var value=$.trim(this.value)
return value?value:undefined;}).get();var completeOTP=vals.join();completeOTP=completeOTP.toString().replace(/,/g,"");if(completeOTP.length==6){$("#btnverifyOTP").removeClass("sign_up_default top30");$("#btnverifyOTP").addClass("sign_up_warning top30");$("#btnverifyOTP").focus();}}
var logincontainer=document.getElementsByClassName("divloginOTP")[0];logincontainer.onkeyup=function(e){var target=e.srcElement||e.target;var maxLength=1;var myLength=target.value.length;if(myLength>=maxLength){var next=target;while(next=next.nextElementSibling){if(next==null)
break;if(next.tagName.toLowerCase()==="input"){next.focus();break;}}}
else if(myLength===0){var previous=target;while(previous=previous.previousElementSibling){if(previous==null)
break;if(previous.tagName.toLowerCase()==="input"){previous.focus();break;}}}}
function myFunction(){if(seconds<60){document.getElementById("timer").innerHTML=seconds;}
if(seconds>0){seconds--;}else{clearInterval(timer);$("#resendlink").show();$("#resendTimer").hide();}}
function startTimer(){if(!timer){timer=window.setInterval(function(){myFunction();},1000);}}
function myFunctionLogin(){if(seconds<60){document.getElementById("logintimer").innerHTML=seconds;}
if(seconds>0){seconds--;}else{clearInterval(logintimer);$("#loginresendlink").show();$("#loginresendTimer").hide();}}
function startTimerLogin(){if(!logintimer){logintimer=window.setInterval(function(){myFunctionLogin();},1000);}}
function EditLoginNumber()
{$("#divloginWihtOTP").show();$("#divloginWithPassword").hide();$("#btnLogin").text(_loginbuttontext).attr("disabled",false);$("#verifyOTPLoginForm").hide();}
function EditNumber()
{$("#registrationForm").show();$("#PopUpPhoneNumber").val(PhoneNumber);var result=contained(PhoneCode,countries);$("#PopUpPhoneCode").val(result);$("#btnSubmit").removeAttr("disabled");$("#btnSubmit").removeClass("sign_up_default");$("#btnSubmit").addClass("sign_up_warning");$("#frmRegistrationpopup").find("[type='submit']").text("Sign Up").removeAttr("disabled");$("#verifyOTPForm").hide();}
$(".combine").on("keyup",function(){if($(this).val()!=""){var form=$('.combine');var vals=form.map(function(){var value=$.trim(this.value)
return value?value:undefined;}).get();var completeOTP=vals.join();completeOTP=completeOTP.toString().replace(/,/g,"");if(completeOTP.length==6){$("#btnverifyOTP").removeClass("sign_up_default top30");$("#btnverifyOTP").addClass("sign_up_warning top30");$("#btnloginverifyOTP").removeClass("sign_up_default top30");$("#btnloginverifyOTP").addClass("sign_up_warning top30");$("#btnloginverifyOTP").focus();}
else
{$("#btnverifyOTP").removeClass("sign_up_warning top30");$("#btnverifyOTP").addClass("sign_up_default top30");$("#btnloginverifyOTP").removeClass("sign_up_warning top30");$("#btnloginverifyOTP").addClass("sign_up_default top30");}}});var appendSignupUtmParamOp={init:function(){$.when(astroyogiUtmParamOps.utmParamSetStat).then(function(){var utmParam=astroyogiUtmParamOps.getUtmParam();if(utmParam==null){return;}
$("#PopUpUtmSource").val(utmParam.utmSource);$("#PopUpUtmCampaign").val(utmParam.utmCampaign);$("#PopUpUtmContent").val(utmParam.utmContent);$("#PopUpUtmMedium").val(utmParam.utmMedium);$("#PopUpUtmTerm").val(utmParam.utmTerm);});}}
function isNumberKey(evt){var charCode=(evt.which)?evt.which:event.keyCode;if((charCode<48||charCode>57))
return false;return true;}
var gender=null;var username=null;var useremail=null;function maleClick()
{$("#maleGender").removeClass("signup-male-light");$("#maleGender").addClass("signup-male-light-active");if($("#femaleGender").hasClass("signup-female-light-active"))
{$("#femaleGender").removeClass("signup-female-light-active");$("#femaleGender").addClass("signup-female-light");}
gender="Male";CheckProfileValues();}
function CheckProfileValues()
{if($("#userName").val()!=''&&$("#userEmail").val()!=''&&gender!=null)
{$("#BtnUserDetailSubmit").removeClass("sign_up_default top27");$("#BtnUserDetailSubmit").addClass("sign_up_warning top27");}}
function femaleClick()
{$("#femaleGender").removeClass("signup-female-light");$("#femaleGender").addClass("signup-female-light-active");if($("#maleGender").hasClass("signup-male-light-active"))
{$("#maleGender").removeClass("signup-male-light-active");$("#maleGender").addClass("signup-male-light");}
gender="Female";CheckProfileValues();}
function isEmail(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email);}
function SetUserDetails()
{username=$("#userName").val();useremail=$("#userEmail").val();var value=isEmail(useremail);if(value==false)
{$("#popupUserProfileValidationSummary").show().text("Please Enter Valid Email Address");return false;}
else{$("#popupUserProfileValidationSummary").hide();}
var _gender=gender;if(username!=''&&useremail!=''&&_gender!=null)
{CheckProfileValues();$.ajax({type:'POST',url:'/talktoastrologer/account/setuserdetails',data:{Name:username,Email:useremail,Gender:_gender},success:function(response){if(response.success==true)
{$("#userDetailPopupModal").modal("hide");var pathname=window.location.pathname;window.location=pathname;}
else{$("#popupSignUpValidationSummary").show().text(response.message);}},failure:function(response){$("#BtnVerify").removeAttr("disabled");}});}
else{$("#popupUserProfileValidationSummary").show().text("Please Enter Complete Details");}}
var socialSignInOps={init:function(){$.ajax({type:'GET',url:'/getfirebasekey/getfirebasekeycredentials',dataType:"json",success:function(result){var config={apiKey:result.firebaseApiKey,authDomain:result.firebaseAuthDomain,databaseURL:result.firebaseDatabaseURL,storageBucket:result.firebaseStorageBucket,messagingSenderId:result.firebaseMessagingSenderId,};firebase.initializeApp(config);},failure:function(response){}});},facebookSignIn:function(){socialSignInOps.init();var provider=new firebase.auth.FacebookAuthProvider();firebase.auth().signInWithPopup(provider).then(function(result){firebase.auth().currentUser.getIdToken(true).then(function(idToken){socialSignInOps.socialSignIn(idToken);}).catch(function(error){});var user=result.user;}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;$("#lblMsg").show();$("#lblMsg").text(errorMessage);var email=error.email;var credential=error.credential;});},googleSignIn:function(){socialSignInOps.init();var provider=new firebase.auth.GoogleAuthProvider();provider.addScope('https://www.googleapis.com/auth/contacts.readonly');firebase.auth().signInWithPopup(provider).then(function(result){var token=result.credential.accessToken;var idtoken=result.credential.idToken;socialSignInOps.socialSignIn(idtoken);var user=result.user;}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;$("#lblMsg").show();$("#lblMsg").text(errorMessage);var email=error.email;var credential=error.credential;});},socialSignIn:function(idToken){$("#hdnToken").val(idToken);$("#btnSocialLogin").click();$.ajax({url:'/talktoastrologer/account/socialsignin',type:'post',data:{fireBaseToken:idToken},success:function(result){if(result.success){var pathname=window.location.pathname;window.location=pathname;}else{$('#loginValidationSummary').show().text(result.message);}}});AstroyogiUiLoaderOperations.showAstroyogiLoaderfn();}}
$("#PopUpLoginPhoneNumber").bind("keypress",function(e){var keyCode=e.which?e.which:e.keyCode
if(!(keyCode>=48&&keyCode<=57)){$("#LoginMobileError").hide();return false;}else{$("#LoginMobileError").hide();}});function CheckSignup(astroid)
{if(astroid!=null)
{AstrologerId=astroid;OpenSignupModal();}
else
{OpenSignupModal();}}
function autocomplete(inp,arr){var currentFocus;inp.addEventListener("input",function(e){var a,b,i,val=this.value;closeAllLists();if(!val){return false;}
currentFocus=-1;a=document.createElement("DIV");a.setAttribute("id",this.id+"autocomplete-list");a.setAttribute("class","autocomplete-items");this.parentNode.appendChild(a);for(i=0;i<arr.length;i++){if(arr[i].substr(0,val.length).toUpperCase()==val.toUpperCase()){b=document.createElement("DIV");b.innerHTML="<strong>"+arr[i].substr(0,val.length)+"</strong>";b.innerHTML+=arr[i].substr(val.length);b.innerHTML+="<input type='hidden' value='"+arr[i]+"'>";b.addEventListener("click",function(e){inp.value=this.getElementsByTagName("input")[0].value;closeAllLists();});a.appendChild(b);}}});inp.addEventListener("keydown",function(e){var x=document.getElementById(this.id+"autocomplete-list");if(x)x=x.getElementsByTagName("div");if(e.keyCode==40){currentFocus++;addActive(x);}else if(e.keyCode==38){currentFocus--;addActive(x);}else if(e.keyCode==13){e.preventDefault();if(currentFocus>-1){if(x)x[currentFocus].click();}}});function addActive(x){if(!x)return false;removeActive(x);if(currentFocus>=x.length)currentFocus=0;if(currentFocus<0)currentFocus=(x.length-1);x[currentFocus].classList.add("autocomplete-active");}
function removeActive(x){for(var i=0;i<x.length;i++){x[i].classList.remove("autocomplete-active");}}
function closeAllLists(elmnt){var x=document.getElementsByClassName("autocomplete-items");for(var i=0;i<x.length;i++){if(elmnt!=x[i]&&elmnt!=inp){x[i].parentNode.removeChild(x[i]);}}}
document.addEventListener("click",function(e){closeAllLists(e.target);});}
var countries=["91 (IN)","1 (US)","1 (CA)","61 (AU)","971 (AE)","44 (GB)","93 (AF)","355 (AL)","213 (DZ)","1684 (AS)","376 (AD)","244 (AO)","1264 (AI)","0 (AQ)","1268 (AG)","54 (AR)","374 (AM)","297 (AW)","43 (AT)","994 (AZ)","1242 (BS)","973 (BH)","880 (BD)","1246 (BB)","375 (BY)","32 (BE)","501 (BZ)","229 (BJ)","1441 (BM)","975 (BT)","591 (BO)","387 (BA)","267 (BW)","0 (BV)","55 (BR)","246 (IO)","673 (BN)","359 (BG)","226 (BF)","257 (BI)","855 (KH)","237 (CM)","238 (CV)","1345 (KY)","236 (CF)","235 (TD)","56 (CL)","86 (CN)","61 (CX)","672 (CC)","57 (CO)","269 (KM)","242 (CG)","242 (CD)","682 (CK)","506 (CR)","225 (CI)","385 (HR)","53 (CU)","357 (CY)","420 (CZ)","45 (DK)","253 (DJ)","1767 (DM)","1809 (DO)","593 (EC)","20 (EG)","503 (SV)","240 (GQ)","291 (ER)","372 (EE)","251 (ET)","500 (FK)","298 (FO)","691 (FM)","679 (FJ)","358 (FI)","33 (FR)","594 (GF)","689 (PF)","0 (TF)","241 (GA)","220 (GM)","995 (GE)","49 (DE)","233 (GH)","350 (GI)","30 (GR)","299 (GL)","1473 (GD)","590 (GP)","1671 (GU)","502 (GT)","224 (GN)","245 (GW)","592 (GY)","509 (HT)","0 (HM)","39 (VA)","504 (HN)","852 (HK)","36 (HU)","354 (IS)","62 (ID)","98 (IR)","964 (IQ)","353 (IE)","972 (IL)","39 (IT)","1876 (JM)","81 (JP)","962 (JO)","7 (KZ)","254 (KE)","686 (KI)","965 (KW)","996 (KG)","856 (LA)","371 (LV)","961 (LB)","266 (LS)","231 (LR)","218 (LY)","423 (LI)","370 (LT)","352 (LU)","853 (MO)","389 (MK)","261 (MG)","265 (MW)","60 (MY)","960 (MV)","223 (ML)","356 (MT)","692 (MH)","596 (MQ)","222 (MR)","230 (MU)","269 (YT)","52 (MX)","373 (MD)","377 (MC)","976 (MN)","1664 (MS)","212 (MA)","258 (MZ)","95 (MM)","264 (NA)","674 (NR)","977 (NP)","31 (NL)","599 (AN)","687 (NC)","64 (NZ)","505 (NI)","227 (NE)","234 (NG)","683 (NU)","672 (NF)","850 (KP)","1670 (MP)","47 (NO)","968 (OM)","92 (PK)","680 (PW)","970 (PS)","507 (PA)","675 (PG)","595 (PY)","51 (PE)","63 (PH)","0 (PN)","48 (PL)","351 (PT)","1787 (PR)","974 (QA)","262 (RE)","40 (RO)","70 (RU)","250 (RW)","290 (SH)","1869 (KN)","1758 (LC)","508 (PM)","1784 (VC)","684 (WS)","378 (SM)","239 (ST)","966 (SA)","221 (SN)","381 (CS)","248 (SC)","232 (SL)","65 (SG)","421 (SK)","386 (SI)","677 (SB)","252 (SO)","27 (ZA)","0 (GS)","82 (KR)","34 (ES)","94 (LK)","249 (SD)","597 (SR)","47 (SJ)","268 (SZ)","46 (SE)","41 (CH)","963 (SY)","886 (TW)","992 (TJ)","255 (TZ)","66 (TH)","670 (TL)","228 (TG)","690 (TK)","676 (TO)","1868 (TT)","216 (TN)","90 (TR)","7370 (TM)","1649 (TC)","688 (TV)","256 (UG)","380 (UA)","1 (UM)","598 (UY)","998 (UZ)","678 (VU)","58 (VE)","84 (VN)","1284 (VG)","1340 (VI)","681 (WF)","212 (EH)","967 (YE)","38 (YO)","260 (ZM)","263 (ZW)"];var el=document.getElementById("PopUpPhoneCode");var wl=document.getElementById("WindowPhoneCode");var fl=document.getElementById("ForgetPhoneCode");if(el)
{autocomplete(document.getElementById("PopUpPhoneCode"),countries);}
if(wl)
{autocomplete(document.getElementById("WindowPhoneCode"),countries);}
if(fl)
{autocomplete(document.getElementById("ForgetPhoneCode"),countries);}
var windowsignbtnText=null;function WindowSignup()
{if($("#WindowPhoneNumber").val()=="")
{$('#WindowMobileError').show().text("Enter valid mobile number");return false;}
else{$("#bannerimage").addClass("b-lazy b-loaded");windowsignupArray={PhoneCode:$("#WindowPhoneCode").val(),PhoneNumber:$("#WindowPhoneNumber").val(),UtmCampaign:$("#UtmCampaign").val(),UtmSource:$("#UtmSource").val(),UtmContent:$("#UtmContent").val(),UtmMedium:$("#UtmMedium").val(),UtmTerm:$("#UtmTerm").val(),EncAstroPartnerId:$("#EncAstroPartnerId").val()};var checkexistance=countries.includes($("#WindowPhoneCode").val());if(checkexistance==false)
{$('#WindowMobileError').show();$('#WindowMobileError').html("Enter valid Phone Code");return false;}
var _phoneCode=windowsignupArray.PhoneCode.split('(')[0].trim();CountryID=windowsignupArray.PhoneCode.split('(')[1].trim().replace(')','');windowsignupArray.PhoneCode=_phoneCode;if(CountryID!=""){var pattern=new RegExp("^[0-9]{10}$");var othercountrypattern=new RegExp("^[0-9]");if(CountryID==="IN"||CountryID==="US"||CountryID==="CA"){if(windowsignupArray.PhoneNumber!=null&&pattern.test(windowsignupArray.PhoneNumber)){$('#WindowMobileError').hide();}else{$('#WindowMobileError').show().html("");$('#WindowMobileError').html("Enter your 10 digit mobile number");return false;}}
else{if(windowsignupArray.PhoneNumber.length>3&&windowsignupArray.PhoneNumber.length<17&&othercountrypattern.test(windowsignupArray.PhoneNumber)){$('#WindowMobileError').hide();}
else{$('#WindowMobileError').show();$('#WindowMobileError').html("Enter your valid mobile number");return false;}}}
var a=$("#frmRegistrationpopup").find("[type='submit']").text();windowsignbtnText=$("#btnWindowSignup").text();$("#btnWindowSignup").text("PLEASE WAIT...").prop('disabled',true);$.ajax({type:'GET',url:'/talktoastrologer/account/sendsignupotp',data:{_phoneCode:windowsignupArray.PhoneCode,_phoneNumber:windowsignupArray.PhoneNumber},success:function(result){if(result.success){$("#registrationPopupModal").modal("show");$("#btnWindowSignup").text(windowsignbtnText);$("#verifyOTPForm").show();$("#registrationForm").hide();$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text('');Request=result.data.hdnOTP;PhoneCode=result.data.hdnPhoneCode;PhoneNumber=result.data.hdnPhoneNumber;$("#registrationForm").hide();$("#verifyOTPForm").show();$('.combine').val('');$("#resendOTPlink").hide();$("#resendlink").hide();setTimeout(function(){$("#otpSummary").hide();$("#resendOTPlink").show();$("#resendlink").show();},20000);$("#resendTimer").hide();$("#mobileNumber").text("+"+windowsignupArray.PhoneCode+windowsignupArray.PhoneNumber);}
else
{$('#WindowMobileError').show();$('#WindowMobileError').html(result.message);$("#btnWindowSignup").text(windowsignbtnText).prop('disabled',false);$("#frmRegistrationpopup").find("[type='submit']").text("SIGN UP"),$("#frmRegistrationpopup").find("[type='submit']").attr("disabled",0);$("#btnSubmit").prop('disabled',false);}}});}}
var forgotPasswordOps={'SubmitButtonDisabled':function(button,validationgroup){button.disabled=true;button.value='Please wait...';forgotPasswordOps.forgotPasswordWithPhoneNumber(validationgroup);},'forgotPasswordWithPhoneNumber':function(validationgroup){var checkexistance=countries.includes($("#ForgetPhoneCode").val());if(checkexistance==false)
{$('#ForgetMobileError').show();$('#ForgetMobileError').html("Enter valid Phone Code");return false;}
else
{var _forgetPhoneCode=$("#ForgetPhoneCode").val();_forgetPhoneCode=_forgetPhoneCode.split(" ")[0];}
var postJson={"EmailAddressOrPhoneNumber":$("#txtEmailAddress").val(),"PhoneCode":_forgetPhoneCode,"PhoneNumber":$("#txtPhoneNumber").val(),"CountryList":null,"CountryId":null,"SelectedOption":validationgroup}
$.ajax({url:'/talktoastrologer/account/forgetpassword',type:'post',data:postJson,success:function(result){if(result.success==true){$('.otpresponseerrormsg').text('');$('.otpresponsesuccessrmsg').text(result.message);setTimeout(function(){afterForgetpassword();},5000)}else{$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').show();$('.otpresponseerrormsg').text(result.message);}
$("#btnForgotPasswordWithEmail").removeAttr("disabled");$("#btnForgotPasswordWithEmail").val('Submit');$("#btnForgotPasswordWithMobile").removeAttr("disabled");$("#btnForgotPasswordWithMobile").val('Submit');},error:function(response){$('#errormsg').show();$('#successMsg').hide();$('#errormsg').text("Error Occurs, please after sometimes.");$("#btnForgotPasswordWithEmail").removeAttr("disabled");$("#btnForgotPasswordWithEmail").val('Submit');$("#btnForgotPasswordWithMobile").removeAttr("disabled");$("#btnForgotPasswordWithMobile").val('Submit');}});return false;}}
$('#btnForgotPasswordWithEmail').click(function(){$('#txtPhoneNumber').val('');$("#ddlPhoneCode").val('Phonecode');forgotPasswordOps.SubmitButtonDisabled(this,'ForgotPasswordEmail');return false;});$('#btnForgotPasswordWithMobile').click(function(){$('txtEmailAddress').val('');forgotPasswordOps.SubmitButtonDisabled(this,'ForgotPasswordMobile');return false;});function afterForgetpassword()
{$('#ttaforgetpassword').modal('hide');$('#loginPopupModal').modal('show');}
$('input[type=radio][name=optionsRadios]').change(function(){$('#successMsg').hide();$('#errormsg').hide();if(this.value==='Email'){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$('.resetpaswordmobile').attr("hidden",true)
$("#DivEmailAddress").show();$("#DivMobileNumber").hide();$('#btnForgotPasswordWithEmail').show();$('#btnForgotPasswordWithMobile').hide();}
else if(this.value==='Mobile'){$('.otpresponsesuccessrmsg').text('');$('.otpresponseerrormsg').text('');$("#DivEmailAddress").hide();$("#DivMobileNumber").show();$('.resetpaswordmobile').attr("hidden",false)
$('#btnForgotPasswordWithEmail').hide();$('#btnForgotPasswordWithMobile').show();}});var input=document.getElementById("WindowPhoneNumber");if(input){input.addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();document.getElementById("btnWindowSignup").click();}});}
var input2=document.getElementById("PopUpLoginPhoneNumber");input2.addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();document.getElementById("btnLogin").click();}});var input3=document.getElementById("password");input3.addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();document.getElementById("btnLoginPass").click();}});var input3=document.getElementById("PopUpPhoneNumber");input3.addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();document.getElementById("btnSubmit").click();}});function closemodal()
{$("#ShowMessage").hide();location.reload();}
$("#WindowPhoneCode").on('focus',function(e){$(this).one('mouseup',function(){$(this).select();return false;}).select();});$("#PopUpPhoneCode").on('focus',function(e){$(this).one('mouseup',function(){$(this).select();return false;}).select();});$("#ForgetPhoneCode").on('focus',function(e){$(this).one('mouseup',function(){$(this).select();return false;}).select();});function CloseModal()
{var el=document.getElementById("btnWindowSignup");if(el)
{if(el.hasAttribute("disabled"))
{$("#btnWindowSignup").removeAttr("disabled").text(windowsignbtnText);}}}