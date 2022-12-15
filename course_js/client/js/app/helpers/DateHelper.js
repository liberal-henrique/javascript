class DateHelper{

    constructor(){
        throw new Error("Essa class não deveria ser instanciada");
    }

    static textoParaData(texto){
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error("A data deve estar no formato aaaa-mm-dd")
        return new Date(...texto
            .split('-')
            .map(function(item, indice){
                return item - indice % 2;
            })
        );
    }

    static dataParaTexto(data){
       return `${data.getDate()}
            /${(data.getMonth() + 1)}
            /${data.getFullYear()}`
    }
}