class CEmpleado {
    constructor(Name, YearOfJoining, Salario, Address) {
        this.Name = Name;
        this.YearOfJoining = YearOfJoining;
        this.Salario = Salario;
        this.Address = Address;
    }
}

let empleado = new CEmpleado("Roberto", 2018, "120.000$USD/Year", "57C- WallStreet");

document.write("<tr>");
document.write("<td>" + empleado.Name + "</td>");
document.write("<td>" + empleado.YearOfJoining + "</td>");
document.write("<td>" + empleado.Salario + "</td>");
document.write("<td>" + empleado.Address + "</td>");
document.write("</tr>");