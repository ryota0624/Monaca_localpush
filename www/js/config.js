var currentUser;
var config = {
  id: "cc7f31f8b18d64b8a26d88e24f8efd6c599de0c78eb8638d99f792e337f90079",
  pass: "6bf289f879ba2d8ac2d7c139c8949264df6e281a1a3e4c27bc5bfb23a60bb232"
};
NCMB.initialize(config.id, config.pass);
var User = NCMB.Object.extend("User");

var opts = {
  lines: 13, //線の数
  length: 33, //線の長さ
  width: 11, //線の幅
  radius: 16, //スピナーの内側の広さ
  corners: 1, //角の丸み
  rotate: 74, //向き(あんまり意味が無い・・)
  direction: 1, //1：時計回り -1：反時計回り
  color: '#000', // 色
  speed: 1.5, // 一秒間に回転する回数
  trail: 71, //残像の長さ
  shadow: true, // 影
  hwaccel: true, // ？
  className: 'spinner', // クラス名
  zIndex: 2e9, // Z-index
  top: '50%', // relative TOP
  left: '30%', // relative LEFT
  opacity: .25, //透明度
  fps: 20 //fps
};
//描画先の親要素
var spin_target = document.getElementById('spin');
//スピナーオブジェクト
var spinner = new Spinner(opts);
spinner.spin(spin_target);
//スピナー描画
//もう一度spinを呼ぶとスピナー停止
//spinner.spin();