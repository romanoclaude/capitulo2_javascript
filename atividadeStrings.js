var html = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

textoSplit = html.split(' - ');

let textoSp = textoSplit[2];
let textoVegas = textoSplit[3];
let textoMoscou = textoSplit[4];

// Selecionando o nome das Cidades avalidadas;

function nomesCidades() {


    let textoSpCidade = textoSp.split("*")[1];
    let textoVegasCidade = textoVegas.split("*")[1];
    let textoMoscouCidade = textoMoscou.split("*")[1];

    return console.log(`-> O nome das cidades avaliadas são '${textoSpCidade}', '${textoVegasCidade}' e '${textoMoscouCidade}' respectivamente.\n`)

};

// Mostrando o conteúdo do Roteiro A de cada cidade;

function roteirosA() {
    let roteiroASpBruto = textoSp.split("#");
    let roteiroAVegasBruto = textoVegas.split("#");
    let roteiroAMoscouBruto = textoMoscou.split("#");

    let roteiroASp = roteiroASpBruto[1]
        .substring(0, (roteiroASpBruto[1].length - 4))
        .replace('<br>', ' ')
        .replaceAll(';', ',')
        .replace('| Região:', 'passa pela')
        .replace('on,', 'on e')
        .replace('usta', 'usta.');
    let roteiroAVegas = roteiroAVegasBruto[1]
        .substring(0, (roteiroAVegasBruto[2].length - 1))
        .replace('<br>', ', ')
        .replaceAll(';', ',')
        .replace('| Região:', 'passa pela')
        .replace('Cassinos,', 'Cassinos e')
        .replace('Tussauds', 'Tussauds.');
    let roteiroAMoscou = roteiroAMoscouBruto[1]
        .substring(0, (roteiroAMoscouBruto[1].length - 4))
        .replace('<br>', ', ')
        .replaceAll(';', ',')
        .replace('| Região:', 'passa pela')
        .replace('Basílico,', 'Basílico e')
        .replace('Lênin', 'Lênin.');

    return console.log(`-> Todas as cidades possuem um roteiro principal, denominado 'A'.
    Em São Paulo o ${roteiroASp}
    Já em Las Vegas o ${roteiroAVegas}
    E em Moscou o ${roteiroAMoscou}\n`);

};

// Mostrando pontos turisticos dos roteiros A

function pontosRoteirosA() {
    let roteiros = html.split("#");

    let roteiroASp = roteiros[1].replaceAll("<br>", " ");
    let roteiroAVegas = roteiros[4].replaceAll("<br>", " ");
    let roteiroAMoscou = roteiros[7].replaceAll("<br>", " ");

    return console.log(`-> Os roteiros A das cidades são: 
    ${roteiroASp}
    ${roteiroAVegas}
    ${roteiroAMoscou}\n`);
}

// Nome dos pontos turisticos localizados no bairro Centro da cidade de São Paulo
const extractValue = html.substring(html.indexOf('Catedral'), 508).split(";");
console.log(extractValue)
// Nome dos pontos turisticos localizados no bairro Downlotown na cidade de Los Angeles
let getValue = html.substring(html.indexOf("Região: Downtown"), 1145).split(";")
console.log(getValue)

nomesCidades();
roteirosA();
pontosRoteirosA();