    const deleteButton = document.getElementById("newsurucuadd");
    const addSurucuButton = document.getElementById("addSurucuButton");
    const ui = new UI();
    const stroage = new Storage();


    eventListeners();


    function eventListeners(){

        addSurucuButton.addEventListener("click",addSurucu);
        document.addEventListener("DOMContentLoaded",function(){

            let suruculer = stroage.getSuruculerFromStroage();  
            ui.loadAllSuruculer(suruculer);

        });
        
        deleteButton.addEventListener("click",deleteSurucu);



    }


    function addSurucu(e){

            var getAdi = localStorage.getItem("adi");
            var getSoyadi =localStorage.getItem("soyadi");
            var getKimlik =localStorage.getItem("kimlik");
            var getTlfNumber = localStorage.getItem("tlfnumber");
            var getEposta = localStorage.getItem("eposta");
            var getDogumDate = localStorage.getItem("dogumdate");
            const recentImageDataUrl = localStorage.getItem("image");
        
            document.addEventListener("DOMContentLoaded",() =>{
                if (recentImageDataUrl) {
                    var imageEnd = document.querySelector("#imgPreview").setAttribute("src",recentImageDataUrl);
                }
            })
        
        
            const newSurucu = new Surucu(getAdi,getSoyadi,getKimlik,getTlfNumber,getEposta,getDogumDate,recentImageDataUrl);
            ui.addSurucuUI(newSurucu); //Arayüze sürücü ekleme
            stroage.addSurucuStorage(newSurucu);
        
    
        e.preventDefault();     
        };

function deleteSurucu(e){
        if(e.target.id === "delete"){
            ui.deleteSurucuFromUI(e.target);
            stroage.deleteSurucuFromStorage(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

        }
}