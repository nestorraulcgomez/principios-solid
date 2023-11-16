type Size = '' | 'S' | 'M' | 'L' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady() :boolean {

        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) return false;
                    break;
                case "number":
                    if((<number><unknown>this[key]) <= 0) return false;
                    break;
                default:
                    throw new Error(`Type of ${key} is not valid`);
            }
        }
        return true;
    }

    toString(){
        if(!this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'XL');
    console.log(bluePants.toString());
})();