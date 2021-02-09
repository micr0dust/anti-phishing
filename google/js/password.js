console.log("%c都直接看程式碼，沒人要跟你玩了拉!", "color:red;font-weight:bold;font-size:50px;");
var pcEmail = document.getElementById('pcEmail');
var mEmail = document.getElementById('mEmail');
var pcPassword = document.getElementById('pcPassword');
var mPassword = document.getElementById('mPassword');
var url = location.href;

setTimeout(() => {
    document.getElementById('oprogress').style.display = 'none';
}, 1000);

if (url.indexOf('?') != -1) {
    var phase1 = url.split('?');
    var phase2 = phase1[1].split('&');
    var resule = phase2[0].split('=');
    pcEmail.innerText = resule[1];
    mEmail.innerText = resule[1];
}
function fnSubmit() {
    if (pcPassword.value.length <= 2 || mPassword.value.length <= 2) {
        document.getElementById('warning1').style.display = "inline";
        document.getElementById('warning2').style.display = "inline";
    }
}
function hack() {
    if (pcPassword.value.length > 2 || mPassword.value.length > 2) {
        pcPassword.value = "";
        mPassword.value = "";
        alert("欸! 你不覺得網址怪怪的嗎?");
        alert("還好我沒有要盜你帳號");
        alert("不然如果是真的釣魚網站你就完蛋了");
        alert("下次登入前先看一下網址是不是對的");
        alert("如果你有用密碼記憶功能，登入google也通常不用自己打帳密");
        alert("如果你有google兩步驟驗證的話可能還沒事");
        alert("如果沒有，你可能要跟帳號說再見了!");
    }
}
function crack(num) {
    if (num === 0) {
        alert("都來到這了怎麼會想切帳號呢?");
        alert("可惡! 居然沒有被騙到");
        alert("你的帳號成功存活了!");
    }
    if (num === 1) {
        alert("記性差也是有好處的!");
        alert("是不是平常都靠自動輸入不記密碼?");
        alert("反正你的帳號是成功存活了");
    }
}