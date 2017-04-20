const MNS = require('aliyun-mns');

class AliMnsSms {
    constructor(options) {
        var mnsConfig = {
            accessKeyId: options.accessKeyId,
            secretAccessKey: options.secretAccessKey,
            endpoint: options.endpoint,
            apiVersion: '2015-06-06' // 调用MNS接口的版本号，当前版本为2015-06-06 
        };

        this._mns = new MNS(mnsConfig);
        this._topic = this._mns.topic('sms.topic-cn-hangzhou');
        this._message = this._topic.message();
    }

    /**
     * Send single sms via ali mns
     * @param {*} options 
     */
    sendSingleSMS(options, callback) {
        var param = {
            SmsParams: JSON.stringify(options.smsParams),
            TemplateCode: options.templateCode,
            Type: 'singleContent',
            FreeSignName: options.freeSignName,
            Receiver: options.receiver
        };

        this._message.publish({
                MessageBody: 'message',
                MessageAttributes: {
                    DirectSMS: JSON.stringify(param)
                }
            })
            .then(res => {
                console.log('Sussess:', res)
                if (callback) {
                    callback(res);
                }
            })
            .catch(res => {
                console.error('Failed:', res)
                if (callback) {
                    callback(res);
                }
            });
    }
}

module.exports = AliMnsSms;