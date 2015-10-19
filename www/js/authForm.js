var user = {
  
  submitSignIn: function submitSignIn() {
    var name = document.getElementById("nameForm").value;
    var pass = document.getElementById("passwordForm").value;
    this.signIn(name, pass);
  },
  signIn: function signIn(name, password) {
    var query = new NCMB.Query(User);
    query.equalTo("name",name);
    query.equalTo("password",password);
    query.find({
      success: function(data){
        if(data.length !== 0) {
          spinner.spin(spin_target);
          this.saveLocal(data[0]);
          console.log("ローカルに保存 signIn")
        } else if (data.length === 0){
          alert("passwordもしくはuserIdが間違っています")
        };
      }.bind(this),
      error: function(){
        alert("なかった")
      }
    });
  },
  signUp: function signUp(name, password) {
    var query = new NCMB.Query(User);
    user = new User();
    user.set("name",name);
    user.set("password",password);
    user.save()
    .then(function (data) {
      console.log(this)
      spinner.spin(spin_target);
      this.saveLocal(data);
    }.bind(this))
  },
  checkName: function checkName() {
    var name = document.getElementById("nameForm").value;
    console.log(name);
    var query = new NCMB.Query(User);
    query.equalTo("name",name);
    query.find({
      success: function(data) {
        var name = document.getElementById("nameForm").value;
        var pass = document.getElementById("passwordForm").value;
        console.log(data.length);
        if (data.length === 0) {
          this.signUp(name, pass);
        }
        else {
          alert("その名前は使われています");
        }
      }.bind(this),
      error: function(error){
        console.log(error)
      }
    });
  },
  saveLocal: function saveLocal(data) {
    //alert("ようこそ");
    currentUser = data;
    //window.localStorage.setItem("user", data.id);
    document.getElementById("form").style.display="none";
    //shoko呼び出し
    },
  autoLogin: function autoLogin() {
    
    document.getElementById("form").style.display="none";
    if (window.localStorage.getItem("user") !== null) {
      var userId = window.localStorage.getItem("user");
      var query = new NCMB.Query(User);
      query.equalTo("objectId",userId);
      query.find({
        success: function(data){
          console.log(this);
          if(data.length !== 0) {
            user.saveLocal(data[0]);
            console.log("ローカルに保存")
          } else {
            document.getElementById("form").style.display="block";
          };
        }.bind(this),
        error: function(){
          alert("なかった")
        }
      });
    } else {
      document.getElementById("form").style.display="block";
      spinner.stop();
    }
  }
}
window.onload = user.autoLogin;