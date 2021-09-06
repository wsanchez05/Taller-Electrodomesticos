import Electrodomestico from "./Electrodomestico.js";

export default class Tv extends Electrodomestico
{
    constructor (procedencia, consumo, tamanio, isTdt)
    {
        super(procedencia ,consumo, tamanio, isTdt)
        this.tamanio = tamanio;
        this.isTdt = isTdt;
        this.Preciotv = this.PrecioTv;
    }

    get PrecioTv()
    {     
        
        if(this.tamanio >40)
        {
            this.Preciotv = (super.CalcularPrecio*3)/100;

            if (this.isTdt)
            {
                this.Preciotv += 250000;
            }
        }
        else
        {
            return super.PrecioBase;    
        }
    }
}