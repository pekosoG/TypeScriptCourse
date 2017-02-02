/// <reference path="typings/knockout-2.2.d.ts" />
var demo_02_04;
(function (demo_02_04) {
    var name = ko.observable('Pekoso');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(demo_02_04 || (demo_02_04 = {}));
//# sourceMappingURL=02-04-ambient-declarations.js.map