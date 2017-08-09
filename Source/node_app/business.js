var Promise = require('promise');

function readApplicationContentFileCallback(req, res) {
    try {
        // res = ConfigureResponse(req, res);
        ReadApplicationContentFile().then(function (data) {
            res.status(200).json(data);
        }, function (error) {
            console.log(new Date().toLocaleString());
            console.error('Error at readApplicationContentFileCallback' + error)
            res.status(200).json({ 'error': error });
        });
    }
    catch (exception) {
        console.error("Exception at readApplicationContentFileCallback - " + exception)
        res.status(200).json({ 'Exception': exception });
    }
}

function ReadApplicationContentFile() {
    var fs = require('fs');
    var parser = require('xml2js');
    var PageContents = {};
    var Response = {};
    Response.Content = {}
    var promiseObject = new Promise(function (resolve, reject) {
        try {
            var data = fs.readFileSync('content/ApplicationPageContent.xml');
            parser.parseString(data, function (err, result) {
                if (err) {
                    reject(err);
                }
                for (var iCount in result.PageContents.Content) {
                    console.log(result.PageContents.Content[iCount]);
                    content = result.PageContents.Content[iCount];
                    PageContents[content.$.ContentID] = content._;
                }
                Response.Content.PageContents = PageContents;
                resolve(Response.Content.PageContents);
            });

        }
        catch (exception) {
            reject(exception);
        }
    });
    return promiseObject;
}
//#endregion



function notifyCustomerCallback(req, res) {
    try {
        NotifyCustomer(req).then(function (data) {
            res.status(200).json(data);
        }, function (error) {
            console.log(new Date().toLocaleString());
            console.error('Error at notifyCustomerCallback' + error)
            res.status(200).json({ 'error': error });
        });

    }
    catch (exception) {
        console.error("Exception at notifyCustomerCallback - " + exception)
        res.status(200).json({ 'Exception': exception });
    }
}

function NotifyCustomer(req) {
    if (req !== undefined && req !== null && req.body !== undefined && req.body !== null) {
        req = req.body;
        console.log(req.body);
    }
    var NotifyResponse = {};
    NotifyResponse.MailResponse = {};
    var promiseObject = new Promise(function (resolve, reject) {
        try {

            if (req === null || req === undefined) {
                configureNotifyResponse('', '', null, resolve);
            }
            req = {};
            req.Mail = false;
            req.Message = false;
            if (req.Mail) {
                var nodemailer = require("nodemailer");
                var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "hemanthyebhi@gmail.com",
                        pass: "yebhi123"
                    }
                });
                var mailOptions = {
                    from: "hemanthyebhi@gmail.com",
                    to: "hemanth.ng612@gmail.com",
                    subject: "test payana",
                    text: "dummy text"
                };
                smtpTransport.sendMail(mailOptions, function (error, response) {
                    if (error) {
                        configureNotifyResponse('Failed', 'Mail', error, resolve);
                    }
                    else {
                        configureNotifyResponse('Success', 'Mail', response, resolve);
                    }
                    smtpTransport.close();
                })
            }

            if (req.Message) {
                NotifyResponse.MessageResponse = {};
                var https = require('https');
                https.get("https://control.msg91.com/api/sendhttp.php?authkey=145593ArGVeQsElLKz58f83ef4&mobiles=919980836494&message=Hi%20Hemanth%2C%20Thank%20you%20for%20choosing%20Dhyan%20Travels%20for%20your%20travel.%20Will%20reach%20you%20soon&sender=HEMSNG&route=4&country=91&response=json", function (res) {
                    var body = "";
                    res.on('data', function (data) {
                        body += data;
                    });
                    res.on('end', function () {
                        var response = JSON.parse(body);
                        configureNotifyResponse('Success', 'Message', response, resolve);

                    })
                })
                    .on('error', function (error) {
                        configureNotifyResponse('Failed', 'Message', error, resolve);
                    })
            }

        }
        catch (exception) {
            configureNotifyResponse('Failed', 'Exception', exception);
        }
    })
    return promiseObject;

    function configureNotifyResponse(status, notificationType, data, resolve) {

        var response = {};
        switch (status) {
            case 'Success':
                response.Data = data;
                response.Status = {};
                response.Status.StatusCode = '000';
                response.Status.StatusDesc = 'Success';
                break;
            case 'Failed':
                response.Data = data;
                response.Status = {};
                response.Status.StatusCode = '001';
                response.Status.StatusDesc = 'Failed';
                break;
            default:
                response.Status = {};
                response.Status.StatusCode = '002';
                response.Status.StatusDesc = 'None of the notifications are configured';
                break;
        }
        if (notificationType === 'Mail') {
            NotifyResponse.MailResponse = response;
            if (!req.Message || NotifyResponse.MessageResponse.Data) {
                resolve(NotifyResponse);
            }
        }
        else if (notificationType === 'Message') {
            NotifyResponse.MessageResponse = response;
            if (!req.Mail || NotifyResponse.MailResponse.Data) {
                resolve(NotifyResponse);
            }
        }
        else {
            NotifyResponse.MailResponse = response;
            NotifyResponse.MessageResponse = response;
            resolve(NotifyResponse);
        }

    }

}

module.exports = {
    notifyCustomerCallback, readApplicationContentFileCallback
}
