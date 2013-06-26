/**
 * @fileoverview 请修改组件描述
 * @author hanwen.sah<kissy-team@gmail.com>
 * @module anti-ie6
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
     * @class Anti-ie6
     * @constructor
     * @extends Base
     */
    function Anti-ie6(comConfig) {
        var self = this;
        //调用父类构造函数
        Anti-ie6.superclass.constructor.call(self, comConfig);
    }
    S.extend(Anti-ie6, Base, /** @lends Anti-ie6.prototype*/{

    }, {ATTRS : /** @lends Anti-ie6*/{

    }});
    return Anti-ie6;
}, {requires:['node', 'base']});



