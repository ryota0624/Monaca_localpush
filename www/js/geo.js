// This is a JavaScript file
var geo = {
  startGet: function(){
    function startGetSpot(){
      alert("ok")
      var option = {
        timeout: 60000  
      };
      navigator.geolocation.getCurrentPosition(onSuccess, onError, option);
    }
    var CurrentPoint = function () {
      geopoint = null;  
      distance = 0;     
    }
    function onSuccess(position) {
      var PicData = NCMB.Object.extend("PicData");
      var current;
      current = new CurrentPoint();
      current.distance = CurrentPoint.distance;   //検索範囲の半径を保持する    
      current.geopoint = position.coords;         //位置情報を保存する
      var geoPoint = new NCMB.GeoPoint(current.geopoint.latitude, current.geopoint.longitude);
      var pos = geoPoint.latitude + "," + geoPoint.longitude;
      var picData = new PicData();
      picData.set("geo", geoPoint);
      picData.save(null, {
        success: function (data) {
          camera.snapPicture(data);
        },
        error: function (data, error) {
          console.log(JSON.stringify(error));
          console.log(JSON.stringify(data));
        }
      });
    };
    function onError(error) {
      console.log("現在位置を取得できませんでした");
    };
    return startGetSpot;
  }
}
document.addEventListener ("deviceready", geo.startGet(), false);