function UI(){

}

UI.prototype.addSurucuUI = function(newSurucu){


const surucuList= document.getElementById("newsurucuadd");
surucuList.innerHTML +=`

<ul class="suruculer-list" >
               <div style="background-color: #ffde00; border-radius: 15px; display: flex;  margin-left: -5px; ">
                <i style="  margin-top: 8px; margin-left: 6px; font-size: 22px; ;" class="fa-solid fa-location-dot"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1"  id="suruculer-ad">${newSurucu.getNereden}</h1>
                </li>
            </div> 

            <div style="background-color: #ffde00; border-radius: 15px; display: flex; ">
                <i style="  margin-top: 8px; margin-left: 6px; font-size: 22px; ;" class="fa-solid fa-location-dot"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1"  id="suruculer-ad">${newSurucu.getNereye}</h1>
                </li>
            </div>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-calendar"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1" id="suruculer-soyad">${newSurucu.getKalkis}</h1>
                </li>
            </div>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-calendar"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1" id="suruculer-kimlikNo">${newSurucu.getVaris}</h1>
                </li>
            </div>

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-clock"></i>
                <li class="suruculer-list-li">
                    <h1 class="suruculerListH1" id="suruculer-tlfNumber">${newSurucu.getKalkisSaati}</h1>
               </li>
            </div>   

            <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-clock"></i>
               <li class="suruculer-list-li">
                <h1 class="suruculerListH1" id="suruculer-eposta">${newSurucu.getVarisSaati}</h1>
                </li>
           </div>

           <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-bus-simple"></i>
               <li class="suruculer-list-li">
                <h1 class="suruculerListH1" id="suruculer-dogumTarihi">${newSurucu.getPlaka}</h1>
           </li>
        </div>

               <li style="margin-left: 10px;">
               <button style=" margin-left:-25px ;  background-color: black; border-radius: 50%; width: 30px ; height: 30px; cursor: pointer; "  type="submit" >
                <i style="color: #ffde00;" id="delete" class="fa-solid fa-trash"></i>
               </button>

            </li>
           </ul> 




`;

}

UI.prototype.loadAllSuruculer = function(seferler){
    const surucuList= document.getElementById("newsurucuadd");
    seferler.forEach(function(surucu){
        surucuList.innerHTML += `

        <ul class="suruculer-list" >
                        <div style="background-color: #ffde00; border-radius: 15px; display: flex;  margin-left: -5px; ">
                        <i style="  margin-top: 8px; margin-left: 6px; font-size: 22px; ;" class="fa-solid fa-location-dot"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1"  id="suruculer-ad">${surucu.getNereden}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex; ">
                        <i style="  margin-top: 8px; margin-left: 6px; font-size: 22px; ;" class="fa-solid fa-location-dot"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1"  id="suruculer-ad">${surucu.getNereye}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-calendar"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1" id="suruculer-soyad">${surucu.getKalkis}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-calendar"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1" id="suruculer-kimlikNo">${surucu.getVaris}</h1>
                        </li>
                    </div>
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-clock"></i>
                        <li class="suruculer-list-li">
                            <h1 class="suruculerListH1" id="suruculer-tlfNumber">${surucu.getKalkisSaati}</h1>
                       </li>
                    </div>   
        
                    <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-clock"></i>
                       <li class="suruculer-list-li">
                        <h1 class="suruculerListH1" id="suruculer-eposta">${surucu.getVarisSaati}</h1>
                        </li>
                   </div>
        
                   <div style="background-color: #ffde00; border-radius: 15px; display: flex;">
                        <i style=" margin-top: 8px; margin-left: 6px; font-size: 22px;" class="fa-solid fa-bus-simple"></i>
                       <li class="suruculer-list-li">
                        <h1 class="suruculerListH1" id="suruculer-dogumTarihi">${surucu.getPlaka}</h1>
                   </li>
                </div>
        
                       <li style="margin-left: 10px;">
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

