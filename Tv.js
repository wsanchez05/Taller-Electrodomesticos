import Electrodomestico from "./Electrodomestico.js";

export default class Tv extends Electrodomestico
{
    constructor (procedencia, consumo, tamanio, isTdt)
    {
        super(procedencia ,consumo)
        this.tamanio = tamanio;
        this.isTdt = isTdt;
        this.Preciotv = super.CalcularPrecio;
        this.Preciotv += this.PrecioTelevisor;
    }

    get PrecioTelevisor()
    {    
        this.TDT =0;
        this.porcentaje = 0;
        if (this.isTdt===true)
        {
            this.TDT = 250000;
        }
        if(this.tamanio >40)
        {
              this.porcentaje = this.Preciotv*0.3;
        }
        return this.TDT+this.porcentaje;
    }
}