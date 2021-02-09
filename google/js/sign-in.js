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
        swal.fire({
            title: '好吧! 你連帳號都不記得我真的服了',
            preConfirm: () => {
                swal.fire({
                    title: '恭喜你的帳號存活了!'
                });
            }
        });
    }
    if (num === 1) {
        swal.fire({
            title: '居然會有人按這個按鈕',
            preConfirm: () => {
                swal.fire({
                    title: '你是真的為了我的遊戲要創帳號還是已經識破我的陰謀了?',
                    preConfirm: () => {
                        swal.fire({
                            title: '反正你的帳號是成功存活了',
                            preConfirm: () => {
                                swal.fire({
                                    title: '就算盜到也是剛建立沒價值的帳號',
                                    preConfirm: () => {
                                        swal.fire({
                                            title: '恭喜~'
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