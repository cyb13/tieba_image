	
	chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")//接收请求
	var images=document.getElementsByClassName("BDE_Image");//得到所有楼层中的图片对象（包括广告图片会被admuncher过滤掉）
	var urls=new Array();
	for(var i=0;i<images.length;i++){
		urls[i]=images[i].getAttribute("src");//所有楼层中图片对象的地址
	};
      sendResponse({farewell: urls});//发回去
  });
	
	
	
	
	
	/*
	var images=document.getElementsByTagName("img");
	var urls=new Array();
	for(var i=0;i<images.length;i++){
		urls[i]=images[i].getAttribute("src");
	};
chrome.runtime.sendMessage({greeting: urls}, function(response) {
  console.log(response.farewell);
});
*/