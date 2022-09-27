class Zene {
    #cim;
    #hosz;

    constructor(cim, hosz){
        this.#cim = cim;
        this.#hosz = hosz;
    }

    get cim(){
        return this.#cim;
    }
    set cim(cim){
        this.#cim = cim;
    }

    get hosz(){
        return this.#hosz;
    }
    set hosz(hosz){
        this.hosz = hosz;
    }
    static oszeg(hosz){
        ohosz = ohosz+hosz;
        return ohosz;
    }
}
const zenek = [];
let ohosz = 0;
function listaadd(){
    let cim = document.getElementById("cim").value;
    let hosz = parseFloat(document.getElementById("hos").value);
    let zene = new Zene(cim, hosz);
    zenek.push(zene);
    document.getElementById("ohos").innerHTML = Zene.oszeg(hosz);
}
function init(){
    document.getElementById("hozzad").addEventListener('click', listaadd);
}
document.addEventListener("DOMContentLoaded",init);