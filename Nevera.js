import Electrodomestico from "./Electrodomestico.js";

export default class Nevera extends Electrodomestico
{
    constructor (procedencia, consumo, capacidad)
    {
        super(procedencia ,consumo, capacidad)
        this.capacidad = capacidad;
        this.Precionevera = this.PrecioNevera;
    }

    get PrecioNevera()
    {     
        
        if(this.capacidad >120)
        {
            
             this.CapacidadExcedida = parseInt((this.capacidad-120)/10);
             this.PorcentajePrecio = super.CalcularPrecio*5/100;
             this.ValorAdicional = this.CapacidadExcedida*this.PorcentajePrecio;
               return this.Precionevera = super.CalcularPrecio + this.ValorAdicional;

        }
        else
        {
            return super.PrecioBase;    
        }
    }
}
