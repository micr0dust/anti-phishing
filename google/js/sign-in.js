console.log("%c都直接看程式碼，沒人要跟你玩了拉!", "color:red;font-weight:bold;font-size:50px;");
setTimeout(() => {
    document.getElementById('oprogress').style.display = 'none';
}, 500);
function fnSubmit() {
    var pcEmail = document.getElementById('email');
    var mEmail = document.getElementById('mEmail');
    if (pcEmail.value) {
        window.location.href = './password.html?email=' + pcEmail.value;
    } else if (mEmail.value) {
        window.location.href = './password.html?email=' + mEmail.value;
    } else {
        document.getElementById('warning1').style.display = "inline";
        document.getElementById('warning2').style.display = "inline";
    }
}
function crack(num) {
    if (num === 0) {
        alert("好吧! 你連帳號都不記得我真的服了!");
        alert("你的帳號成功存活了!");
    }
    if (num === 1) {
        alert("居然會有人按這個按鈕");
        alert("你是真的為了我的遊戲要創帳號還是已經識破我的陰謀了?");
        alert("反正你的帳號是成功存活了");
        alert("就算盜到也是剛建立沒價值的帳號");
        alert("恭喜~");
    }
}