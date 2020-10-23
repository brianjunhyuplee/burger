var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateONE: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, conditino, function(res){
            cb(res);
        })
    }
    
};

module.exports = burger;