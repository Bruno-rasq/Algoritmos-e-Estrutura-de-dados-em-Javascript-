"use strict";

const addInput = document.querySelector('.add_input');
const dates = document.querySelector('.dates');

let elementName;

const IDBRequest = indexedDB.open("user", 1);
IDBRequest.addEventListener("upgradeneeded", () => {

    const DB = IDBRequest.result;
    DB.createObjectStore("names", {
        autoIncrement: true
    })

});


IDBRequest.addEventListener("success", () => {
    console.log("success...")
    ReadObjects()
});

IDBRequest.addEventListener("error", () => {
    console.log(" Houve um erro...")
});

document.querySelector('#add_data').addEventListener("click", () => {

    elementName = document.getElementById('elementNames').value;

    if(elementName.length > 0){
        if(document.querySelector('.possible') != undefined){
            if(confirm("Existem elementos sem Guardar. deseja continuar?")){
                addObject({elementName})
                ReadObjects()
                addInput.value = "";
            };

        } else {
            addObject({elementName})
            ReadObjects()
            addInput.value = "";
        };
    };
});

function addObject(obj) {

    const IDBData = getIDBdate("readwrite");

    IDBData[0].add(obj);
    IDBData[1].addEventListener("complete", () => {
        console.log("Objeto Adicionado corretamente")
    })
};

function ReadObjects(){

    const IDBData = getIDBdate("readonly");
    const cursor = IDBData[0].openCursor();
    const Fragment = document.createDocumentFragment();

    dates.innerHTML = "";

    cursor.addEventListener("success", () => {
        if(cursor.result){
            let element = crearElement(cursor.result.key, cursor.result.value);
            Fragment.appendChild(element)
            cursor.result.continue()

        } else {
            dates.appendChild(Fragment)
        }
    });

};

function ModifyObject(key, obj){

    const IDBData = getIDBdate("readwrite");

    IDBData[0].put(obj, key)
    IDBData[1].addEventListener("complete", () => {
        console.log("Objeto modificado corretamente.")
    });

};

function DeleteObject(key){

    const IDBData = getIDBdate("readwrite");

    IDBData[0].delete(key)
    IDBData[1].addEventListener("complete", () => {
        console.log("Objeto excluido corretamente.")
    });

};

function getIDBdate(mode){

    const db = IDBRequest.result;
    const DBTransaction = db.transaction("names", mode);
    const objectStore = DBTransaction.objectStore("names");

    return [objectStore, DBTransaction];

};

function crearElement(id, date){

    const container = document.createElement('ARTICLE');
    const input = document.createElement('INPUT');
    const saveBTN = document.createElement('BUTTON');
    const deleteBTN = document.createElement('BUTTON');

    container.classList.add('elementName');
    input.classList.add('your-input');
    saveBTN.classList.add('impossible');
    deleteBTN.classList.add('possible');
    deleteBTN.classList.add('delete');

    saveBTN.textContent = "Salvar";
    deleteBTN.textContent = "Deletar";

    input.value = date.elementName;
    input.setAttribute("contenteditable", "true");
    input.setAttribute("spellcheck", "false");

    container.appendChild(input);
    container.appendChild(saveBTN);
    container.appendChild(deleteBTN);

    input.addEventListener("keyup", () => {
        saveBTN.classList.replace("impossible", "possible")
    });

    saveBTN.addEventListener("click", () => {
        if(saveBTN.classList == 'possible'){
            ModifyObject(id, {elementName: input.value});
            saveBTN.classList.replace("possible", "impossible");
        }
    })

    deleteBTN.addEventListener("click", () => {
        if(confirm("Tem certeza que deseja excluir?")){
            DeleteObject(id);
            dates.removeChild(container)
        }
    });

    return container

};
