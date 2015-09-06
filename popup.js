
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    
	var urls=new Array();
	urls= response.farewell;//接收contentscript的响应
		for(var i=0;i<urls.length;i++)
		{
			if(urls[i].indexOf("imgsrc.baidu.com")!=-1)//如果是正常图片的话（广告是tb1.bdstatic.com）
			{
				urls[i]=urls[i].replace(/http.+\//,'http://imgsrc.baidu.com/forum/pic/item/');//替换url
				var regex=new RegExp(".jpg");
				if(regex.test(urls[i]))
				{
					chrome.downloads.download({url: urls[i]},null);//下载
				}
			}
		};
  });
});


/*
var urls=new Array();
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
		urls= request.greeting;
		for(var i=0;i<urls.length;i++){
	 chrome.downloads.download({url: urls[i]},null);
};
      sendResponse({farewell: "goodbye"});
  });
*/

