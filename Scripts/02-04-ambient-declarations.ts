/// <reference path="typings/knockout-2.2.d.ts" />
declare var ko: KnockoutStatic;   

module demo_02_04{ 

    var name = ko.observable('Pekoso');
    var id = ko.observable(1);

    var guy={
        id:id,
        fullName:name
    };

    var value: string = guy.fullName();
    console.log(value);
}