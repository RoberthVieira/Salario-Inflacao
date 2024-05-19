import dadosUser from 'readline-sync'

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflação = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca:5.48},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
];

console.log("Escolha uma das alternativas: \n\n");

console.log("1 - Listar os salarios minimos de 2010 à 2020");
console.log("Listar o indice IPCA de 2010 a 2020");
console.log("Comparação entre o percentual de aumento salarial e o IPCA");

let escolhaOpcao = dadosUser.question("Digite o numero da sua escolha: \n"); 

if(escolhaOpcao ==  1){
for (let salarios in salarioMinimo){
    let ano = salarioMinimo[salarios].ano;
    let salario = salarioMinimo[salarios].salario;
    console.log("Ano: " + ano);
    console.log("Salario minimo: R$" + salario + ",00")
    console.log("\n")
}
}else{
    console.log("Opção invalida!")
};
