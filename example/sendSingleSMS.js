var AliMnsSms = require('../');

var mnsConfig = {
    accessKeyId: '**accessKeyId**',
    secretAccessKey: '**secretAccessKey**',
    endpoint: '**endpoint**', // http://********.mns.cn-hangzhou.aliyuncs.com/
};

var aliMnsSms = new AliMnsSms(mnsConfig);

var sendSmsParam = {
    smsParams: {
        verifyCode: '123456' // 短信参数
    },
    templateCode: 'E123456', // 模板ID
    freeSignName: 'TestSMS', // 短信签名
    receiver: '13888888888' // 接受者手机号
};

aliMnsSms.sendSingleSMS(sendSmsParam);