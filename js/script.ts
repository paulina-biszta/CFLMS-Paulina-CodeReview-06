$(document).ready(function(){

    let id: number = 0;
    
    var mainRow= document.getElementById("mainRow");
    var mainRowAsc= document.getElementById("mainRow2");
    var mainRowDesc= document.getElementById("mainRowDesc");
    
    if(mainRow){
    Render(mainRow);
    }
    if(mainRowAsc){
    Render(mainRowAsc);
    }
    if(mainRowDesc){
    Render(mainRowDesc);
    }
    
    function Render(theNode){
    var toRender : Array<any> = [];
    
    class Locations {
        name: string ="";
        city: string;
        zipCode: number;
        address: string;
        img: string;
        created: string;
        
    
        constructor(name, city, zipCode, address, img, created){
            this.name = name;
            this.city = city;
            this.zipCode = zipCode;
            this.address = address;
            this.img = img;
            this.created = created;
        }
    
        
        display(){
            theNode.innerHTML += `
                <div class="col mb-4" id="${id}">
                    <div class="card loc text-center">
                        <div class="card-above">
                            <h5 class="card-title">${this.name}</h5>
                        </div>
                        <div class="imgContainer d-none d-md-block">
                            <img src="${this.img}" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h6 class="card-title"><i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>&nbsp;&nbsp;&nbsp;${this.address}</h6>
                            <p class="card-text">${this.zipCode}, ${this.city}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">
                                &#128356;Created:<br />
                                ${this.created}
                            </small>
                        </div>
                    </div>
                </div>
            `;
            id++;
        }
    
    }
    
    class Restaurant extends Locations {
        phone: string;
        type: string;
        website: string;
    
        constructor(name, city, zipCode, address, img, created, phone, type, website){
            super(name, city, zipCode, address, img, created);
            this.phone = phone;
            this.type = type;
            this.website =website;
        }
    
        display(){
            theNode.innerHTML += `
                    <div class="col mb-4" id="${id}">
                        <div class="card res text-center">
                            <div class="card-above restaurant">
                                <h5 class="card-title">${this.name}</h5>
                            </div>
                            <div class="imgContainer d-none d-md-block">
                                <img src="${this.img}" class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h6 class="card-title"><i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>&nbsp;&nbsp;&nbsp;${this.address}</h6>
                                <p class="card-text">${this.zipCode}, ${this.city}</p>
                                <p class="card-text typeOf">Type: ${this.type}</p>
                                <p class="card-text phone">&#128383; ${this.phone}</p>
                                <button class="container-fluid restaurant"><a class="text-light" href="http://${this.website}">www.${this.website}</a></button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">
                                    &#128356;Created:<br />
                                    ${this.created}
                                </small>
                            </div>
                        </div>
                    </div>
            `;
            id++;
        }
    
    }
    
    class Events extends Locations {
        eventDate: string;
        eventTime: string;
        ticketPrice: string;
    
        constructor(name, city, zipCode, address, img, created, eventDate, eventTime, ticketPrice){
            super(name, city, zipCode, address, img, created);
            this.eventDate = eventDate;
            this.eventTime = eventTime;
            this.ticketPrice = ticketPrice;
        }
    
        display(){
            theNode.innerHTML += `
                <div class="col mb-4" id="${id}">
                    <div class="card eve text-center">
                        <div class="card-above event">
                            <h5 class="card-title">${this.name}</h5>
                        </div>
                        <div class="imgContainer d-none d-md-block">
                            <img src="${this.img}" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h6 class="card-title"><i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>&nbsp;&nbsp;&nbsp;${this.address}</h6>
                            <p class="card-text">${this.zipCode}, ${this.city}</p>
                            <p class="card-text dateE">Date: ${this.eventDate}</p>
                            <p class="card-text timeE">Time: ${this.eventTime}</p>
                            <p class="card-text">Price: &euro;${this.ticketPrice}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">
                                &#128356;Created:<br />
                                ${this.created}
                            </small>
                        </div>
                    </div>
                </div>
            `;
            id++;
        }
    
    }
    
    if(mainRow){
        toRender.push(new Locations("CodeFactory", "Vienna", 1050, "Kettenbrückengasse 23/2/12", "img/code.jpg", "23.04.2020 14:35"));
        toRender.push(new Locations("Karlskirche", "Vienna", 1040, "Kreuzherrengasse 1", "img/karls.jpg", "05.06.2020 11:35"));
        toRender.push(new Locations("Belvedere", "Vienna", 1030, "Schloss Belvedere", "img/belvedere.jpg", "15.03.2020 11:45"));
        toRender.push(new Locations("Prater", "Vienna", 1020, "Prater", "img/prater.jpg", "15.05.2020 15:22"));
        toRender.push(new Restaurant("Scarabocchio", "Vienna", 1080, "Florianigasse 3", "img/pizza.jpg", "09.02.2020 10:12", "01 405 27 27", "Italian", "pizzeria-scarabocchio.sta.io"));
        toRender.push(new Restaurant("Estancia Santa Cruz", "Vienna", 1020, "Hauptallee 8", "img/mex.jpg", "18.03.2020 11:23", "01 72803800", "Mexican", "santacruz.at"));
        toRender.push(new Restaurant("Flatschers Restaurant and Bar", "Vienna", 1070, "Kaiserstraße 113-115", "img/steak.jpg", "27.04.2020 09:29", "01 5234268", "American", "flatschers.at"));
        toRender.push(new Restaurant("Hanil Sushi ", "Vienna", 1040, "Rechte Wienzeile 7", "img/sushi.jpg", "22.01.2020 10:49", "01 5853590", "Japanese", "hanilsushi.at/"));
        toRender.push(new Events("Gin Festival 2020", "Vienna", 1060, "Lehargasse 6", "img/gin.jpg", "27.06.2020 12:19", "16. October 2020", "16:00 Uhr – 23:00 Uhr", " 22,00-90,00"));
        toRender.push(new Events("Falstaff Vienna Bar", "Vienna", 1010, "Heldenplatz 1", "img/fal.jpg", "20.03.2020 17:01", "19. Oktober 2020", "16:30 Uhr – 21:00 Uhr", " 30,00-55,00"));
        toRender.push(new Events("Yoga In Museum", "Vienna", 1010, "Albertina Museum", "img/yogaa.jpg", "18.06.2020 16:17", "27. August 2020", "8:00 Uhr – 9:45 Uhr", " 24,00"));
        toRender.push(new Events("Masters of Dirt", "Vienna", 1110, "Wiener Stadthalle", "img/moto.jpg", "10.04.2020 20:35", "26. July 2020", "16:00 Uhr – 22:00 Uhr", " 33,00"));
        }
    
    if(mainRow){
    for(let i=0; i< toRender.length; i++){
            toRender[i].display();
    }
    }
    
                    if(mainRowAsc){
                        var toRender: Array<any> = JSON.parse(localStorage.getItem("toRender"));
    
                        let array1 = [];
                        let array2 = [];
                        //from DD/MM/YY to MM/DD/YY
                        for(let i=0; i<toRender.length; i++){
                            let roughTime = toRender[i].created;
                            let roughArray = roughTime.split(".");
                            let temp = roughArray[0];
                            roughArray[0] = roughArray[1];
                            roughArray[1] = temp;
                            roughTime = `${roughArray[0]}.${roughArray[1]}.${roughArray[2]}`;
                            let date = new Date(roughTime);
                            array1.push({i, date});
                        }
    
                         array1.sort((a, b) => a.date - b.date);
    
                         for(let i=0; i<toRender.length; i++){
                             if(toRender[i].hasOwnProperty("ticketPrice")){
                                 let test2 = new Events(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].eventDate, toRender[i].eventTime, toRender[i].ticketPrice);
                                 array2.push(test2);
                             } else if(toRender[i].hasOwnProperty("website")){
                                 let test2 = new Restaurant(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].phone, toRender[i].type, toRender[i].website);
                                 array2.push(test2);
                             } else {
                                 let test2 = new Locations(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created);
                                 array2.push(test2);
                                 }
                            }
    
                          for(let i=0; i<array2.length; i++){
                              console.log("array1: " + array1[i]["i"]);
                              array2[array1[i]["i"]].display();
                              console.log("toRender: " + toRender[i]);
                            }
                    }
    
                    if(mainRowDesc){
                        var toRender: Array<any> = JSON.parse(localStorage.getItem("toRender"));
    
                        let array1 = [];
                        let array2 = [];
                        //from DD/MM/YY to MM/DD/YY
                        for(let i=0; i<toRender.length; i++){
                            let roughTime = toRender[i].created;
                            let roughArray = roughTime.split(".");
                            let temp = roughArray[0];
                            roughArray[0] = roughArray[1];
                            roughArray[1] = temp;
                            roughTime = `${roughArray[0]}.${roughArray[1]}.${roughArray[2]}`;
                            let date = new Date(roughTime);
                            array1.push({i, date});
                        }
    
                         array1.sort((a, b) => a.date - b.date);
    
                         for(let i=0; i<toRender.length; i++){
                             if(toRender[i].hasOwnProperty("ticketPrice")){
                                 let test2 = new Events(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].eventDate, toRender[i].eventTime, toRender[i].ticketPrice);
                                 array2.push(test2);
                             } else if(toRender[i].hasOwnProperty("website")){
                                 let test2 = new Restaurant(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].phone, toRender[i].type, toRender[i].website);
                                 array2.push(test2);
                             } else {
                                 let test2 = new Locations(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created);
                                 array2.push(test2);
                                 }
                             }
    
                          for(let i=array2.length-1; i>=0; i--){
                              console.log("array1: " + array1[i]["i"]);
                              array2[array1[i]["i"]].display();
                              console.log("toRender: " + toRender[i]);
                            }
                        }
    localStorage.setItem("toRender", JSON.stringify(toRender));
    }
    }) 
    