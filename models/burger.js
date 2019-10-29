var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },

    insertOne: function(cols, vals, callBack) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },

    updateOne: function(objColVals, condition, callBack) {
        console.log(objColVals);
        console.log(condition);
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    },
};

module.exports = burgers;