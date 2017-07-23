var Promise = require('promise');

function readApplicationContentFileCallback(req, res) {
    try {
        // res = ConfigureResponse(req, res);
        ReadApplicationContentFile().then(function (data) {
            console.log('Data Sent :' + data);
            console.log(new Date().toLocaleString());
            // res.send(data);
            res.status(200).json(data);
        }, function (error) {
            console.log(new Date().toLocaleString());
            console.error('Failed : ' + error)
            res.status(200).json({ 'error': error });
        });
    }
    catch (exception) {
        console.error("Error at ReadApplicationContentFile - " + exception)
        res.status(200).json({ 'error': exceptionk });
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
            var data = fs.readFileSync('../Contents/StaticContents/ApplicationPageContent.xml');
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
        console.log('started notify');
        console.log(req.body);
        res = ConfigureResponse(req, res);
        NotifyCustomer().then(function (data) {
            console.log('Data Sent :' + data);
            console.log(new Date().toLocaleString());
            res.send(data);
        }, function (error) {
            console.log(new Date().toLocaleString());
            console.error('Failed : ' + error)
            res.send('Failed : ' + error);
        });

    }
    catch (exception) {
        console.error("Error at ReadApplicationContentFile - " + exception)
    }
}

function NotifyCustomer(req) {
    var NotifyResponse = {};
    NotifyResponse.MailResponse = {};
    var promiseObject = new Promise(function (resolve, reject) {
        try {

            if (req !== null) {
            }
            req = {};
            req.Mail = true;
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
                        NotifyResponse.MailResponse.Data = error;
                        NotifyResponse.MailResponse.Status = {};
                        NotifyResponse.MailResponse.Status.StatusCode = '001';
                        NotifyResponse.MailResponse.Status.StatusDesc = 'Failed';
                    }
                    else {
                        NotifyResponse.MailResponse.Data = response;
                        NotifyResponse.MailResponse.Status = {};
                        NotifyResponse.MailResponse.Status.StatusCode = '000';
                        NotifyResponse.MailResponse.Status.StatusDesc = 'Success';
                    }
                    smtpTransport.close();
                })
            }
            if (req.Message) {
                NotifyResponse.MessageResponse = {};
                var https = require('https');
                https.get("https://control.msg91.com/api/sendhttp.php?authkey=145593ArGVeQsElLKz58f83ef4&mobiles=919980836494&message=Hi%20Hemanth%2C%20Thank%20you%20for%20choosing%20Payana%20for%20your%20travel.%20Will%20reach%20you%20soon&sender=HEMSNG&route=4&country=91&response=json", function (res) {
                    var body = "";
                    res.on('data', function (data) {
                        body += data;
                    });
                    res.on('end', function () {
                        var response = JSON.parse(body);
                        NotifyResponse.MessageResponse.Data = response;
                        NotifyResponse.MessageResponse.Status = {};
                        NotifyResponse.MessageResponse.Status.StatusCode = '000';
                        NotifyResponse.MessageResponse.Status.StatusDesc = 'Success';
                        if (NotifyResponse.MailResponse.Status !== undefined || NotifyResponse.MessageResponse.Status !== undefined) {
                            resolve(NotifyResponse);
                        }
                    })
                })
                    .on('error', function (error) {
                        NotifyResponse.MessageResponse.Data = error;
                        NotifyResponse.MessageResponse.Status = {};
                        NotifyResponse.MessageResponse.Status.StatusCode = '001';
                        NotifyResponse.MessageResponse.Status.StatusDesc = 'Failed';
                        if (NotifyResponse.MailResponse.Status !== undefined || NotifyResponse.MessageResponse.Status !== undefined) {
                            resolve(NotifyResponse);
                        }
                    })
            }

        }
        catch (exception) {
            NotifyResponse.Data = exception;
            NotifyResponse.Status = {};
            NotifyResponse.Status.StatusCode = '001';
            NotifyResponse.Status.StatusDesc = 'Failed';
            if (NotifyResponse.MailResponse.Status !== undefined || NotifyResponse.MessageResponse.Status !== undefined) {
                resolve(NotifyResponse);
            }
        }
    })
    return promiseObject;

}

module.exports = {
    notifyCustomerCallback, readApplicationContentFileCallback
}