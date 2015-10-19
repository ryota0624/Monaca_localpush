
var camera = {
  snapPicture: function snapPicture (picData) {
    navigator.camera.getPicture (successTake, onError,
        { quality: 50, destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA}
    );
    
     function successTake (imageData) {
        var canvas = document.createElement('canvas');
        //var byteCharacters = makeSmall(imageData)//toBlob(imageData);
        var BlobFile = toBlob(imageData);
        var fileName = picData.id;
        var File = new NCMB.File(fileName, BlobFile, "image/png");
        File.save().then(
          function(){alert("ok")},
          function(error){console.log(error)})
      }
      
      function toBlob(base64) {
        var bin = atob(base64.replace(/^.*,/, ''));
        var buffer = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
          buffer[i] = bin.charCodeAt(i);
        }
    // Blobを作成
          try{
            var blob = new Blob([buffer.buffer], {type: 'image/png'});
          }catch (e){
            return false;
          }
        return blob;
      }
    var onError = function(error){
      console.log("現在位置を取得できませんでした");
    }
  }
  }