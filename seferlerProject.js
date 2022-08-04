const deleteButton = document.getElementById("newsurucuadd");
const addSurucuButton = document.getElementById("addSurucuButton");
const ui = new UI();
const stroage = new Storage();


eventListeners();


function eventListeners(){

    addSurucuButton.addEventListener("click",addSurucu);
    document.addEventListener("DOMContentLoaded",function(){

        let seferler = stroage.getSuruculerFromStroage();  
        ui.loadAllSuruculer(seferler);

    });
    
    deleteButton.addEventListener("click",deleteSurucu);



}


function addSurucu(e){

        var getNereden = localStorage.getItem("nereden");
        var getNereye =localStorage.getItem("nereye");
        var getKalkis =localStorage.getItem("kalkis");
        var getVaris =localStorage.getItem("varis");
        var getKalkisSaati = localStorage.getItem("kalkissaati");
        var getVarisSaati = localStorage.getItem("varissaati");
        var getPlaka = localStorage.getItem("plaka");

    
    
        const newSurucu = new Surucu(getNereden,getNereye,getKalkis,getVaris,getKalkisSaati,getVarisSaati,getPlaka);
        ui.addSurucuUI(newSurucu); //Arayüze sürücü ekleme
        stroage.addSurucuStorage(newSurucu);
    

    e.preventDefault();     
    };

function deleteSurucu(e){
    if(e.target.id === "delete"){
        ui.deleteSurucuFromUI(e.target);
        stroage.deleteSurucuFromStorage(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

    }
}