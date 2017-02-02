interface IAlerter{
    name: string;
    showMessage(): void;
}

class Alerter implements IAlerter{
    name='Pekoso';
    showMessage(){
        toastr.info(msg+', '+this.name);
    }

}