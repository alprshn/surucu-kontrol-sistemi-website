function Storage(){

}

Storage.prototype.addSurucuStorage = function(newSurucu){
    let seferler = this.getSuruculerFromStroage();

    seferler.push(newSurucu);
    localStorage.setItem("seferler",JSON.stringify(seferler));
}

Storage.prototype.getSuruculerFromStroage = function(){
    let seferler;

    if(localStorage.getItem("seferler")== null){
        seferler = [];


    }
    else {
        seferler= JSON.parse(localStorage.getItem("seferler"));

    }
    return seferler;
}
Storage.prototype.deleteSurucuFromStorage = function(seferlergetNereden){
    let seferler = this.getSuruculerFromStroage();
    seferler.forEach(function(surucu,index){

        if(surucu.getNereden === seferlergetNereden){
            seferler.splice(index,1);
        }
    });

    localStorage.setItem("seferler",JSON.stringify(seferler));


}