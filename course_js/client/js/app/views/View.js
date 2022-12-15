class View {
    constructor (elemento){

        //throw new Error("Essa classe não deve ser instanciada");
        this._elemento = elemento;
    }

    template(){
        throw new Error ('O método template deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}