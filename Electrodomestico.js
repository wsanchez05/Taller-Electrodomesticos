export default class Electrodomestico{
    
    
    constructor(procedencia, consumo)
    {
        this.procedencia = procedencia;
        this.consumo = consumo; 
        this.precio = this.CalcularPrecio;  
    } 
    
    ValorConsumo()
    {
        switch(this.consumo)
        {
            case "A":
                return 450000;
            case "B":
                return 350000;
            case "C":
                return 250000;
            default:
                return 0;
        }
    } 
    
    ValorProcedencia()
    {
        return (this.procedencia ==="Nacional") ? 250000 : 350000;
    }

    PrecioBase()
    {
        return this.ValorConsumo() + this.ValorProcedencia();
    }

    get CalcularPrecio()
    {
        return this.PrecioBase();
    }

}