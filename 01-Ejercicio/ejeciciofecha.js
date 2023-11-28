class Fecha {
    constructor(dia, mes, anio, hora, minutos) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
        this.hora = hora;
        this.minutos = minutos;
    }

    static sumar(nuevaFecha1, nuevaFecha2) {
        let nuevoDia = nuevaFecha1.dia + nuevaFecha2.dia;
        let nuevoMes = nuevaFecha1.mes + nuevaFecha2.mes;
        let nuevoAnio = nuevaFecha1.anio + nuevaFecha2.anio;
        let nuevaHora = nuevaFecha1.hora + nuevaFecha2.hora;
        let nuevoMinutos = nuevaFecha1.minutos + nuevaFecha2.minutos;

        if (nuevoDia >= 31) {
            nuevoMes++;
            nuevoDia -= 31;
        }
        if (nuevoMes >= 12) {
            nuevoAnio++;
            nuevoMes = 1;
        }
        if (nuevoMinutos >= 60) {
            nuevaHora++;
            nuevoMinutos -= 60;
        }
        if (nuevaHora >= 24) {
            nuevoDia++;
            nuevaHora -= 24;
        }
        return new Fecha(nuevoDia, nuevoMes, nuevoAnio, nuevaHora, nuevoMinutos);
    }

    sumarDias(ndias) {
        let nuevoDia = this.dia + ndias;
        while (nuevoDia > 31) {
            let fechA = new Date(this.anio, this.mes, 0).getDate();
            if (nuevoDia > fechA) {
                nuevoDia -= fechA;
                if (this.mes === 12) {
                    this.mes = 1;
                    this.anio++;
                } else {
                    this.mes++;
                }
            }
        }
        return new Fecha(nuevoDia, this.mes, this.anio, this.hora, this.minutos);
    }

    formatoFecha() {
        return `${this.dia}/${this.mes}/${this.anio}`;
    }

    formatoHora() {
        return `${this.hora}:${this.minutos}`;
    }
}

const fecha1 = new Fecha(2, 3, 2023, 5, 20);
const fecha2 = new Fecha(3, 4, 2023, 6, 30);

const suma = Fecha.sumar(fecha1, fecha2);

console.log("Fecha 1: " + fecha1.formatoFecha());
console.log("Fecha 1 hora: " + fecha1.formatoHora());
console.log("Fecha 2: " + fecha2.formatoFecha());
console.log("Fecha 2 hora: " + fecha2.formatoHora());
console.log("Suma de fechas: " + suma.formatoFecha());
console.log("Suma de fechas hora: " + suma.formatoHora());

const fechaConMasDias = fecha1.sumarDias(10); // Sumar 10 días
console.log("Fecha con más días: " + fechaConMasDias.formatoFecha());
