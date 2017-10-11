var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);

var func1 = require('../application/get&post.js');

describe('post and get', function() {
    it('sampleget should return what is sent ', function(done) {
        var msg = "this is get!";
        chai.request('http://localhost:8080')
            .get('/sampleget?msg=' + msg)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                expect(res.body.err).to.equal(0);
                expect(res.body.msg).to.equal(msg);
                done(); //异步函数中我们必须通过done来标记程序执行完成
            });
    });
    it('samplepost should return what is sent ', function(done) {
        chai.request('http://localhost:8080')
            .post('/samplepost')
            .send({
                "SUCCESS": {
                    "__v": 0,
                    "name": "Java",
                    "lastName": "Script",
                    "_id": "1"
                }
            })
            .end(function(err, res) {
                //chai语法实例
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.have.property('SUCCESS');
                res.body.msg.SUCCESS.should.be.a('object');
                res.body.msg.SUCCESS.should.have.property('name');
                res.body.msg.SUCCESS.should.have.property('lastName');
                res.body.msg.SUCCESS.should.have.property('_id');
                res.body.msg.SUCCESS.name.should.equal('Java');
                res.body.msg.SUCCESS.lastName.should.equal('Script');
                expect(res.body.err).to.equal(0);
                done();
            });
    });
});
