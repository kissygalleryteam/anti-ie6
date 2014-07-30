/**
 * @fileoverview
 * @author
 * @module anti-ie6
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class AntiIe6
     * @constructor
     * @extends Base
     */
    function AntiIe6(comConfig) {
        var self = this;
        //调用父类构造函数
        AntiIe6.superclass.constructor.call(self, comConfig);
    }
    S.extend(AntiIe6, Base, /** @lends AntiIe6.prototype*/{

    }, {ATTRS : /** @lends AntiIe6*/{

    }});
    return AntiIe6;
}, {requires:['node', 'base']});



