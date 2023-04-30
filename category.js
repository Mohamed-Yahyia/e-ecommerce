
//cetgr 1 clothes
var imagesc = ['img/tesman.jpg', 'img/shose.jpg', 'img/teshr.jpg', 'img/tewon.jpg', 'img/fashr.jpg', 'img/pman.jpg'];
//img1
var ntesman = document.getElementById("ntesman").innerText;
var nptesman = document.getElementById("nptesman").innerText;
var optesman = document.getElementById("optesman").innerText;
//img2
var nshose = document.getElementById("nshose").innerText;
var npshose = document.getElementById("npshose").innerText;
var opshose = document.getElementById("opshose").innerText;
//img3
var nteshr = document.getElementById("nteshr").innerText;
var npteshr = document.getElementById("npteshr").innerText;
var opteshr = document.getElementById("opteshr").innerText;
//img4
var ntewon = document.getElementById("ntewon").innerText;
var nptewon = document.getElementById("nptewon").innerText;
var optewon = document.getElementById("optewon").innerText;
//ing5
var nfashr = document.getElementById("nfashr").innerText;
var npfashr = document.getElementById("npfashr").innerText;
var opfashr = document.getElementById("opfashr").innerText;
//img6
var npman = document.getElementById("npman").innerText;
var nppman = document.getElementById("nppman").innerText;
var oppman = document.getElementById("oppman").innerText;

//cetgr  2 health     prfm jalso jalhar bswon signal clean
var imagesh = ['img/prfm.jpg', 'img/jalso.jpg', 'img/jalhar.jpg', 'img/bswon.jpg', 'img/signal.jpg', 'img/clean.jpg'];
//img1
var nprfm = document.getElementById("nprfm").innerText;
var npprfm = document.getElementById("npprfm").innerText;
var opprfm = document.getElementById("opprfm").innerText;
//img2
var njalso = document.getElementById("njalso").innerText;
var npjalso = document.getElementById("npjalso").innerText;
var opjalso = document.getElementById("opjalso").innerText;
//img3
var njalhar = document.getElementById("njalhar").innerText;
var npjalhar = document.getElementById("npjalhar").innerText;
var opjalhar = document.getElementById("opjalhar").innerText;
//img4
var nbswon = document.getElementById("nbswon").innerText;
var npbswon = document.getElementById("npbswon").innerText;
var opbswon = document.getElementById("opbswon").innerText;
//ing5
var nsignal = document.getElementById("nsignal").innerText;
var npsignal = document.getElementById("npsignal").innerText;
var opsignal = document.getElementById("opsignal").innerText;
//img6
var nclean = document.getElementById("nclean").innerText;
var npclean = document.getElementById("npclean").innerText;
var opclean = document.getElementById("opclean").innerText;

//cetgr  3 sport    sgsport  jamsp     masport      carsport  srsport laspo
var imagess = ['img/sgsport.jpg', 'img/jamsp.jpg', 'img/masport.jpg', 'img/carsport.jpg', 'img/srsport.jpg', 'img/laspo.jpg'];
//img1
var nsgsport = document.getElementById("nsgsport").innerText;
var npsgsport = document.getElementById("npsgsport").innerText;
var opsgsport = document.getElementById("opsgsport").innerText;
//img2
var njamsp = document.getElementById("njamsp").innerText;
var npjamsp = document.getElementById("npjamsp").innerText;
var opjamsp = document.getElementById("opjamsp").innerText;
//img3
var nmasport = document.getElementById("nmasport").innerText;
var npmasport = document.getElementById("npmasport").innerText;
var opmasport = document.getElementById("opmasport").innerText;
//img4
var ncarsport = document.getElementById("ncarsport").innerText;
var npcarsport = document.getElementById("npcarsport").innerText;
var opcarsport = document.getElementById("opcarsport").innerText;
//ing5
var nsrsport = document.getElementById("nsrsport").innerText;
var npsrsport = document.getElementById("npsrsport").innerText;
var opsrsport = document.getElementById("opsrsport").innerText;
//img6
var nlaspo = document.getElementById("nlaspo").innerText;
var nplaspo = document.getElementById("nplaspo").innerText;
var oplaspo = document.getElementById("oplaspo").innerText;


//cetgr    4 computer     labtop     headp       headphone    phone      tablat         camr
var imagesp = ['img/labtop.jpg', 'img/headp.jpg', 'img/headphone.jpg', 'img/phone.jpg', 'img/tablat.jpg', 'img/camr.jpg'];
//img1
var nlabtop = document.getElementById("nlabtop").innerText;
var nplabtop = document.getElementById("nplabtop").innerText;
var oplabtop = document.getElementById("oplabtop").innerText;
//img2
var nheadp = document.getElementById("nheadp").innerText;
var npheadp = document.getElementById("npheadp").innerText;
var opheadp = document.getElementById("opheadp").innerText;
//img3
var nheadphone = document.getElementById("nheadphone").innerText;
var npheadphone = document.getElementById("npheadphone").innerText;
var opheadphone = document.getElementById("opheadphone").innerText;
//img4
var nphone = document.getElementById("nphone").innerText;
var npphone = document.getElementById("npphone").innerText;
var opphone = document.getElementById("opphone").innerText;
//ing5
var ntablat = document.getElementById("ntablat").innerText;
var nptablat = document.getElementById("nptablat").innerText;
var optablat = document.getElementById("optablat").innerText;
//img6
var ncamr = document.getElementById("ncamr").innerText;
var npcamr = document.getElementById("npcamr").innerText;
var opcamr = document.getElementById("opcamr").innerText;

var all_product = [];
var product = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
var all_product_json;
// category  1 clothes
product.id = 1;
product.name = ntesman;
product.images = imagesc[0];
product.newprice = nptesman;
product.oldprice = optesman;
product.category = 'clothes';
all_product.push(product);
var product1 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product1.id = 2;
product1.name = nshose;
product1.images = imagesc[1];
product1.newprice = npshose;
product1.oldprice = opshose;
product1.category = 'clothes';
all_product.push(product1);
var product2 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product2.id = 3;
product2.name = nteshr;
product2.images = imagesc[2];
product2.newprice = npteshr;
product2.oldprice = opteshr;
product2.category = 'clothes';
all_product.push(product2);
var product3 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}

product3.id = 4;
product3.name = ntewon;
product3.images = imagesc[3];
product3.newprice = nptewon;
product3.oldprice = optewon;
product3.category = 'clothes';
all_product.push(product3);
var product4 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product4.id = 5;
product4.name = nfashr;
product4.images = imagesc[4];
product4.newprice = npfashr;
product4.oldprice = opfashr;
product4.category = 'clothes';
all_product.push(product4);
var product5 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product5.id = 6;
product5.name = npman;
product5.images = imagesc[5];
product5.newprice = nppman;
product5.oldprice = oppman;
product5.category = 'clothes';
all_product.push(product5);

// category  2 health   prfm jalso jalhar bswon signal clean
var product6 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product6.id = 7;
product6.name = nprfm;
product6.images = imagesh[0];
product6.newprice = npprfm;
product6.oldprice = opprfm;
product6.category = 'health';
all_product.push(product6);
var product7 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product7.id = 8;
product7.name = njalso;
product7.images = imagesh[1];
product7.newprice = npjalso;
product7.oldprice = opjalso;
product7.category = 'health';
all_product.push(product7);
var product8 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}

product8.id = 9;
product8.name = njalhar;
product8.images = imagesh[2];
product8.newprice = npjalhar;
product8.oldprice = opjalhar;
product8.category = 'health';
all_product.push(product8);
var product9 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}

product9.id = 10;
product9.name = nbswon;
product9.images = imagesh[3];
product9.newprice = npbswon;
product9.oldprice = opbswon;
product9.category = 'health';
all_product.push(product9);
var product10 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}

product10.id = 11;
product10.name = nsignal;
product10.images = imagesh[4];
product10.newprice = npsignal;
product10.oldprice = opsignal;
product10.category = 'health';
all_product.push(product10);
var product11 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}

product11.id = 12;
product11.name = nclean;
product11.images = imagesh[5];
product11.newprice = npclean;
product11.oldprice = opclean;
product11.category = 'health';
all_product.push(product11);

// category  3 sport    sgsport  jamsp     masport      carsport  srsport laspo
var product12 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product12.id = 13;
product12.name = nsgsport;
product12.images = imagess[0];
product12.newprice = npsgsport;
product12.oldprice = opsgsport;
product12.category = 'sport';
all_product.push(product12);
var product13 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product13.id = 14;
product13.name = njamsp;
product13.images = imagess[1];
product13.newprice = npjamsp;
product13.oldprice = opjamsp;
product13.category = 'sport';
all_product.push(product13);
var product14 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product14.id = 15;
product14.name = nmasport;
product14.images = imagess[2];
product14.newprice = npmasport;
product14.oldprice = opmasport;
product14.category = 'sport';
all_product.push(product14);

var product15 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product15.id = 16;
product15.name = ncarsport;
product15.images = imagess[3];
product15.newprice = npcarsport;
product15.oldprice = opcarsport;
product15.category = 'sport';
all_product.push(product15);

var product16 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product16.id = 17;
product16.name = nsrsport;
product16.images = imagess[4];
product16.newprice = npsrsport;
product16.oldprice = opsrsport;
product16.category = 'sport';
all_product.push(product16);

var product17 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product17.id = 18;
product17.name = nlaspo;
product17.images = imagess[5];
product17.newprice = nplaspo;
product17.oldprice = oplaspo;
product17.category = 'sport';
all_product.push(product17);

// category  4 computer     labtop     headp       headphone    phone      tablat         camr
var product18 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}

product18.id = 19;
product18.name = nlabtop;
product18.images = imagesp[0];
product18.newprice = nplabtop;
product18.oldprice = oplabtop;
product18.category = 'computer';
all_product.push(product18);

var product19 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product19.id = 20;
product19.name = nheadp;
product19.images = imagesp[1];
product19.newprice = npheadp;
product19.oldprice = opheadp;
product19.category = 'computer';
all_product.push(product19);


var product20 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product20.id = 21;
product20.name = nheadphone;
product20.images = imagesp[2];
product20.newprice = npheadphone;
product20.oldprice = opheadphone;
product20.category = 'computer';
all_product.push(product20);

var product21 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product21.id = 22;
product21.name = nphone;
product21.images = imagesp[3];
product21.newprice = npphone;
product21.oldprice = opphone;
product21.category = 'computer';
all_product.push(product21);

var product22 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product22.id = 23;
product22.name = ntablat;
product22.images = imagesp[4];
product22.newprice = nptablat;
product22.oldprice = optablat;
product22.category = 'computer';
all_product.push(product22);

var product23 = {
    id: Number,
    name: String,
    images: URL,
    newprice: String,
    oldprice: String,
    category: String
}
product23.id = 24;
product23.name = ncamr;
product23.images = imagesp[5];
product23.newprice = npcamr;
product23.oldprice = opcamr;
product23.category = 'computer';
//add data in json 
all_product.push(product23);
//set data to local storage

localStorage.setItem("website", JSON.stringify(all_product));
//get data from local storage
all_product_json = JSON.parse(localStorage.getItem("website"));



function gotosearch(value) {
    localStorage.setItem("searchValue", value);
    window.open("../main/search.html", "_blank");
  }





