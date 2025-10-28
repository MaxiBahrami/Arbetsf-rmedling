//==========================================
//Date created: 15-12-2010
//Created by Dean Jak.
//Description: In this js file are holded all functions that are used for "Facebook like" popup
//==========================================

function startContentOverlay(requestUrl, publicBaseUrl) {
    var sendQueueId = null;
    var subscriberId = null;
    var isNewsletterTracked = null;
    var arrayRequest = new Array();
    //Splits the input request string
    arrayRequest = requestUrl.split("/");
    //Initialize the first parameter (last in the array list)
    sendQueueId = arrayRequest[arrayRequest.length - 3];
    //Initialize the second parameter (before last in the array list)
    subscriberId = arrayRequest[arrayRequest.length - 2];
    isNewsletterTracked = arrayRequest[arrayRequest.length - 1];

    var trackImageUrl = publicBaseUrl + "public/FacebookLikeClick.ashx?sendQueueId=" + sendQueueId + "&subscriberId=" + subscriberId + "&random=" + Math.random() + "&isNewsletterTracked=" + isNewsletterTracked;
    
    require(['common/widgets'], function(widgets) {
        widgets.popup({
            title: window._facebookPopupTitle,
            buttons: {},
            html: createHtml(requestUrl, trackImageUrl)
        });
    });
}

function createHtml(requestUrl, trackImageUrl) {
    // return facebook like plugin with invisible image for tracking newsletter
    return '<iframe src="https://www.facebook.com/plugins/like.php?href=' + requestUrl + '&amp;layout=button_count&amp;show_faces=false&amp;width=450&amp;action=like&amp;colorscheme=light"scrolling="no" frameborder="0" width="400" allowtransparency="true" style="border: none;overflow: hidden;"></iframe><img style="width:1px; height:1px" src="' + trackImageUrl + '"/>';
}