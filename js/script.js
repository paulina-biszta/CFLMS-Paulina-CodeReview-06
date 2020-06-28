var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var id = 0;
    var mainRow = document.getElementById("mainRow");
    var mainRowAsc = document.getElementById("mainRow2");
    var mainRowDesc = document.getElementById("mainRowDesc");
    if (mainRow) {
        Render(mainRow);
    }
    if (mainRowAsc) {
        Render(mainRowAsc);
    }
    if (mainRowDesc) {
        Render(mainRowDesc);
    }
    function Render(theNode) {
        var toRender = [];
        var Locations = /** @class */ (function () {
            function Locations(name, city, zipCode, address, img, created) {
                this.name = "";
                this.name = name;
                this.city = city;
                this.zipCode = zipCode;
                this.address = address;
                this.img = img;
                this.created = created;
            }
            Locations.prototype.display = function () {
                theNode.innerHTML += "\n                <div class=\"col mb-4\" id=\"" + id + "\">\n                    <div class=\"card loc text-center\">\n                        <div class=\"card-above\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                        </div>\n                        <div class=\"imgContainer d-none d-md-block\">\n                            <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\" />\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title\"><i class=\"fas fa-map-marker-alt\" style=\"font-size: 24px;\"></i>&nbsp;&nbsp;&nbsp;" + this.address + "</h6>\n                            <p class=\"card-text\">" + this.zipCode + ", " + this.city + "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">\n                                &#128356;Created:<br />\n                                " + this.created + "\n                            </small>\n                        </div>\n                    </div>\n                </div>\n            ";
                id++;
            };
            return Locations;
        }());
        var Restaurant = /** @class */ (function (_super) {
            __extends(Restaurant, _super);
            function Restaurant(name, city, zipCode, address, img, created, phone, type, website) {
                var _this = _super.call(this, name, city, zipCode, address, img, created) || this;
                _this.phone = phone;
                _this.type = type;
                _this.website = website;
                return _this;
            }
            Restaurant.prototype.display = function () {
                theNode.innerHTML += "\n                    <div class=\"col mb-4\" id=\"" + id + "\">\n                        <div class=\"card res text-center\">\n                            <div class=\"card-above restaurant\">\n                                <h5 class=\"card-title\">" + this.name + "</h5>\n                            </div>\n                            <div class=\"imgContainer d-none d-md-block\">\n                                <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\" />\n                            </div>\n                            <div class=\"card-body\">\n                                <h6 class=\"card-title\"><i class=\"fas fa-map-marker-alt\" style=\"font-size: 24px;\"></i>&nbsp;&nbsp;&nbsp;" + this.address + "</h6>\n                                <p class=\"card-text\">" + this.zipCode + ", " + this.city + "</p>\n                                <p class=\"card-text typeOf\">Type: " + this.type + "</p>\n                                <p class=\"card-text phone\">&#128383; " + this.phone + "</p>\n                                <button class=\"container-fluid restaurant\"><a class=\"text-light\" href=\"http://" + this.website + "\">www." + this.website + "</a></button>\n                            </div>\n                            <div class=\"card-footer\">\n                                <small class=\"text-muted\">\n                                    &#128356;Created:<br />\n                                    " + this.created + "\n                                </small>\n                            </div>\n                        </div>\n                    </div>\n            ";
                id++;
            };
            return Restaurant;
        }(Locations));
        var Events = /** @class */ (function (_super) {
            __extends(Events, _super);
            function Events(name, city, zipCode, address, img, created, eventDate, eventTime, ticketPrice) {
                var _this = _super.call(this, name, city, zipCode, address, img, created) || this;
                _this.eventDate = eventDate;
                _this.eventTime = eventTime;
                _this.ticketPrice = ticketPrice;
                return _this;
            }
            Events.prototype.display = function () {
                theNode.innerHTML += "\n                <div class=\"col mb-4\" id=\"" + id + "\">\n                    <div class=\"card eve text-center\">\n                        <div class=\"card-above event\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                        </div>\n                        <div class=\"imgContainer d-none d-md-block\">\n                            <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\" />\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-title\"><i class=\"fas fa-map-marker-alt\" style=\"font-size: 24px;\"></i>&nbsp;&nbsp;&nbsp;" + this.address + "</h6>\n                            <p class=\"card-text\">" + this.zipCode + ", " + this.city + "</p>\n                            <p class=\"card-text dateE\">Date: " + this.eventDate + "</p>\n                            <p class=\"card-text timeE\">Time: " + this.eventTime + "</p>\n                            <p class=\"card-text\">Price: &euro;" + this.ticketPrice + "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">\n                                &#128356;Created:<br />\n                                " + this.created + "\n                            </small>\n                        </div>\n                    </div>\n                </div>\n            ";
                id++;
            };
            return Events;
        }(Locations));
        if (mainRow) {
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
        if (mainRow) {
            for (var i = 0; i < toRender.length; i++) {
                toRender[i].display();
            }
        }
        if (mainRowAsc) {
            var toRender = JSON.parse(localStorage.getItem("toRender"));
            var array1 = [];
            var array2 = [];
            //from DD/MM/YY to MM/DD/YY
            for (var i = 0; i < toRender.length; i++) {
                var roughTime = toRender[i].created;
                var roughArray = roughTime.split(".");
                var temp = roughArray[0];
                roughArray[0] = roughArray[1];
                roughArray[1] = temp;
                roughTime = roughArray[0] + "." + roughArray[1] + "." + roughArray[2];
                var date = new Date(roughTime);
                array1.push({ i: i, date: date });
            }
            array1.sort(function (a, b) { return a.date - b.date; });
            for (var i = 0; i < toRender.length; i++) {
                if (toRender[i].hasOwnProperty("ticketPrice")) {
                    var test2 = new Events(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, "../" + toRender[i].img, toRender[i].created, toRender[i].eventDate, toRender[i].eventTime, toRender[i].ticketPrice);
                    array2.push(test2);
                }
                else if (toRender[i].hasOwnProperty("website")) {
                    var test2 = new Restaurant(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, "../" + toRender[i].img, toRender[i].created, toRender[i].phone, toRender[i].type, toRender[i].website);
                    array2.push(test2);
                }
                else {
                    var test2 = new Locations(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, "../" + toRender[i].img, toRender[i].created);
                    array2.push(test2);
                }
            }
            for (var i = 0; i < array2.length; i++) {
                console.log("array1: " + array1[i]["i"]);
                array2[array1[i]["i"]].display();
                console.log("toRender: " + toRender[i]);
            }
        }
        if (mainRowDesc) {
            var toRender = JSON.parse(localStorage.getItem("toRender"));
            var array1 = [];
            var array2 = [];
            //from DD/MM/YY to MM/DD/YY
            for (var i = 0; i < toRender.length; i++) {
                var roughTime = toRender[i].created;
                var roughArray = roughTime.split(".");
                var temp = roughArray[0];
                roughArray[0] = roughArray[1];
                roughArray[1] = temp;
                roughTime = roughArray[0] + "." + roughArray[1] + "." + roughArray[2];
                var date = new Date(roughTime);
                array1.push({ i: i, date: date });
            }
            array1.sort(function (a, b) { return a.date - b.date; });
            for (var i = 0; i < toRender.length; i++) {
                if (toRender[i].hasOwnProperty("ticketPrice")) {
                    var test2 = new Events(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, "../" + toRender[i].img, toRender[i].created, toRender[i].eventDate, toRender[i].eventTime, toRender[i].ticketPrice);
                    array2.push(test2);
                }
                else if (toRender[i].hasOwnProperty("website")) {
                    var test2 = new Restaurant(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, "../" + toRender[i].img, toRender[i].created, toRender[i].phone, toRender[i].type, toRender[i].website);
                    array2.push(test2);
                }
                else {
                    var test2 = new Locations(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, "../" + toRender[i].img, toRender[i].created);
                    array2.push(test2);
                }
            }
            for (var i = array2.length - 1; i >= 0; i--) {
                console.log("array1: " + array1[i]["i"]);
                array2[array1[i]["i"]].display();
                console.log("toRender: " + toRender[i]);
            }
        }
        localStorage.setItem("toRender", JSON.stringify(toRender));
    }
});
