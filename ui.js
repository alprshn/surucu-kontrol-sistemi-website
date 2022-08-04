function UI(){

}

UI.prototype.addSurucuUI = function(newSurucu){


const surucuList= document.getElementById("newsurucuadd");
surucuList.innerHTML +=`

<ul class="suruculer-list" >
                <li style="width: 80px; height: 80px; background-color: #ffde00 ;" id="profilPhoto" class="suruculer-list-li">
                    <img style="width: 80px; src="${newSurucu.recentImageDataUrl}" height: 80px; position: absolute; margin-left: 0px; border-radius: 8px; z-index: 96;" id="imgPreview" alt="">
                </li>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex; ">
                <i style="  margin-top: 8px; margin-left: 6px; font-size: 22px; ;" class="fa-solid fa-user"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1"  id="suruculer-ad">${newSurucu.getAdi}</h1>
                </li>
            </div>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-user"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1" id="suruculer-soyad">${newSurucu.getSoyadi}</h1>
                </li>
            </div>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-id-card"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1" id="suruculer-kimlikNo">${newSurucu.getKimlik}</h1>
                </li>
            </div>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-phone"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1" id="suruculer-tlfNumber">${newSurucu.getTlfNumber}</h1>
               </li>
            </div>   

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-at"></i>
               <li class="suruculer-list-li">
                <h1  class="suruculerListH1" id="suruculer-eposta">${newSurucu.getEposta}</h1>
                </li>
           </div>

           <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-calendar-days"></i>
               <li class="suruculer-list-li">
                <h1 class="suruculerListH1" id="suruculer-dogumTarihi">${newSurucu.getDogumDate}</h1>
           </li>
        </div>

               <li>
               <button style=" margin-left:-25px ;  background-color: black; border-radius: 50%; width: 30px ; height: 30px; cursor: pointer; "  type="submit" >
                <i style="color: #ffde00;" id="delete" class="fa-solid fa-trash"></i>
               </button>

            </li>
           </ul> 




`;

}

UI.prototype.loadAllSuruculer = function(suruculer){
    const surucuList= document.getElementById("newsurucuadd");
    suruculer.forEach(function(surucu){
        surucuList.innerHTML += `

        <ul class="suruculer-list" >
                        <li style="width: 80px; height: 80px; background-color: #ffde00 ;" id="profilPhoto" class="suruculer-list-li">
                            <img style="width: 80px; src="${surucu.recentImageDataUrl}" height: 80px; position: absolute; margin-left: 0px; border-radius: 8px; z-index: 96;" id="imgPreview" alt="">
                        </li>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex; ">
                        <i style="  margin-top: 8px; margin-left: 6px; font-size: 22px; ;" class="fa-solid fa-user"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1"  id="suruculer-ad">${surucu.getAdi}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-user"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1" id="suruculer-soyad">${surucu.getSoyadi}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-id-card"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1" id="suruculer-kimlikNo">${surucu.getKimlik}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-phone"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1" id="suruculer-tlfNumber">${surucu.getTlfNumber}</h1>
                       </li>
                    </div>   
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-at"></i>
                       <li class="suruculer-list-li">
                        <h1 class="suruculerListH1" id="suruculer-eposta">${surucu.getEposta}</h1>
                        </li>
                   </div>
        
                   <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-calendar-days"></i>
                       <li class="suruculer-list-li">
                        <h1 class="suruculerListH1" id="suruculer-dogumTarihi">${surucu.getDogumDate}</h1>
                   </li>
                </div>
        
                       <li>
                       <button style=" margin-left:-25px ;  background-color: black; border-radius: 50%; width: 30px ; height: 30px; cursor: pointer; "  type="submit" >
                        <i style="color: #ffde00;" id="delete" class="fa-solid fa-trash"></i>
                       </button>
        
                    </li>
                   </ul> 
        
        
        
        
        `;

    });

}

UI.prototype.deleteSurucuFromUI = function(element){
    element.parentElement.parentElement.parentElement.remove();
}

