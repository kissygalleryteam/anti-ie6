KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('anti-ie6', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/anti-ie6/2.0.0/']});