class HashTable {

    constructor(){
        this.table = new Array(127)
        this.size = 0;
    }

    _Hash(key){
        let hash = 0
        for( let i = 0; i < key.length; i++ ){
            hash += key.charCodeAt(i)
        }

        return hash % this.table.length;
    }

    put(key, value){
        const index = this._Hash(key);
        this.table[index] = [key, value]
        this.size++
    };

    get(key){
        const index = this._Hash(key);
        return this.table[index]
    };

    delete(key){
        const index = this._Hash(key);
        if(this.table[index] && this.table[index].length){
            this.table[index] = undefined
            this.size--
            return true;
        
        } else {
            return false;
        }
    };

    clear(){
        this.table = []
        this.size = 0
    };
};


let contatos = new HashTable();

contatos.put('heleno', '3344525');
contatos.put('joao', '3565335');
contatos.put('guilherme', '5435342');

console.table(contatos.table);

console.log(contatos.get('heleno'))