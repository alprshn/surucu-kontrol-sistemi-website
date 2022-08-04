function Storage(){

}

Storage.prototype.addSurucuStorage = function(newSurucu){
    let suruculer = this.getSuruculerFromStroage();

    suruculer.push(newSurucu);
    localStorage.setItem("suruculer",JSON.stringify(suruculer));
}

Storage.prototype.getSuruculerFromStroage = function(){
    let suruculer;

    if(localStorage.getItem("suruculer")== null){
        suruculer = [];


    }
    else {
        suruculer= JSON.parse(localStorage.getItem("suruculer"));

    }
    return suruculer;
}
Storage.prototype.deleteSurucuFromStorage = function(surucugetAdi){
    let suruculer = this.getSuruculerFromStroage();
    suruculer.forEach(function(surucu,index){

        if(surucu.getAdi === surucugetAdi){
            suruculer.splice(index,1);
        }
    });

    localStorage.setItem("suruculer",JSON.stringify(suruculer));


}