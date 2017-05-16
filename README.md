# ali-mns-sms
Ali sms via mns service
var AliMnsSms = require('ali-mns-sms');
var aliMnsSms = this.getInstance();
var sendSmsParam = {
    smsParams: {
        verifyCode: code + '' // 短信参数
    },
    templateCode: 'XXXXX', // 模板ID
    freeSignName: 'xxxx', // 短信签名
    receiver: 13888888888 // 接受者手机号
};

aliMnsSms.sendSingleSMS(sendSmsParam, function(res) {
});
