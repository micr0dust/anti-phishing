console.log("%c都直接看程式碼，沒人要跟你玩了拉!", "color:red;font-weight:bold;font-size:50px;");

let bot = true;
var customCheck2 = document.getElementById('customCheck2');
var mcustomCheck2 = document.getElementById('mcustomCheck2');

customCheck2.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('warning').style.display = 'block';
    } else {
        document.getElementById('warning').style.display = 'none';
    }
});

mcustomCheck2.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('mwarning').style.display = 'block';
    } else {
        document.getElementById('mwarning').style.display = 'none';
    }
});

function recaptcha() {
    document.getElementById('recaptcha1').style.display = 'none';
    document.getElementById('recaptcha2').style.display = 'block';
    setTimeout(() => {
        document.getElementById('recaptcha2').style.display = 'none';
        document.getElementById('recaptcha3').style.display = 'block';
        bot = false;
    }, 1100);
}

function mrecaptcha() {
    document.getElementById('mrecaptcha1').style.display = 'none';
    document.getElementById('mrecaptcha2').style.display = 'block';
    setTimeout(() => {
        document.getElementById('mrecaptcha2').style.display = 'none';
        document.getElementById('mrecaptcha3').style.display = 'block';
        bot = false;
    }, 1100);
}

function fnAccount() {

}

function fnPassword() {
    if (!(document.getElementById('account').value) && !(document.getElementById('maccount').value)) {
        document.getElementById('password').value = "";
        document.getElementById('mpassword').value = "";
        swal.fire({
            title: '哪有人跳關直接輸入密碼的!',
            preConfirm: () => {
                swal.fire({
                    title: '先去輸入帳號啦!'
                });
            }
        });
    } else if ((document.getElementById('password').value.length > 2) || (document.getElementById('mpassword').value.length > 2)) {
        document.getElementById('password').value = "";
        document.getElementById('mpassword').value = "";
        swal.fire({
            title: '又釣到一個帳號了?',
            preConfirm: () => {
                swal.fire({
                    title: '你要感謝這不是真釣魚網站~',
                    preConfirm: () => {
                        swal.fire({
                            title: '不然你就要跟你的帳號說再見了!',
                            preConfirm: () => {
                                swal.fire({
                                    title: '下次點進陌生連結請注意一下網址',
                                    preConfirm: () => {
                                        swal.fire({
                                            title: '或者啟用兩步驟驗證來保護你的帳號'
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}

function crack(num) {
    if (num === 0) {
        if ((document.getElementById('password').value) || (document.getElementById('mpassword').value)) {
            if (bot) {
                swal.fire({
                    title: '死機器人走開!'
                });
            } else {
                swal.fire({
                    title: '最好密碼字數這麼少啦!'
                });
            }
        } else {
            swal.fire({
                title: '請輸入帳號/密碼'
            });
        }
    }

    if (num === 1) {
        if (bot) {
            swal.fire({
                title: '好啦去創你的新帳號啦!',
                preConfirm: () => {
                    swal.fire({
                        title: '等你不是Lv1勇者再過來',
                        preConfirm: () => {
                            setTimeout(() => {
                                window.location.href = "https://user.gamer.com.tw/regS1.php";
                            }, 1000);
                            swal.fire({
                                title: '慢走不送!'
                            });
                        }
                    });
                }
            });
        } else {
            swal.fire({
                title: '哦!你要創新帳號是要給我GP嗎?',
                preConfirm: () => {
                    swal.fire({
                        title: '來~我幫你導往正確的方向',
                        preConfirm: () => {
                            setTimeout(() => {
                                window.location.href = "https://user.gamer.com.tw/regS1.php";
                            }, 1000);
                            swal.fire({
                                title: '不用謝!'
                            });
                        }
                    });
                }
            });
        }
    }
    if (num === 2) {
        swal.fire({
            title: '誰會按這個按鈕啊',
            preConfirm: () => {
                swal.fire({
                    title: '你的意思是雖然不想登入，但想回我的小屋嗎?',
                    preConfirm: () => {
                        setTimeout(() => {
                            window.location.href = "https://home.gamer.com.tw/homeindex.php";
                        }, 1000);
                        swal.fire({
                            title: '好，我幫你!'
                        });
                    }
                });
            }
        });
    }
}