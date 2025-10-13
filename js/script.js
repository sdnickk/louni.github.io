// alert ("Bem vindo a Loun'i, sua loja de perfumes favorita!");
let currentmode = 'initial'
const btnmasc = document.getElementById("botao-masculino");
const btnfem = document.getElementById("botao-feminino");

const mainText = document.getElementById("text-inicio");
const mainImg1 = document.getElementById("foto-inicio1");
const mainImg2 = document.getElementById("foto-inicio2");
const mainImg3 = document.getElementById("foto-inicio3");
const mainImg4 = document.getElementById("foto-inicio4");
const mainImg5 = document.getElementById("foto-inicio5");

const textcomp = document.getElementById("text-comp");
const texting = document.getElementById("text-ing");
const textcomp1 = document.getElementById("text-comp1");
const texting1 = document.getElementById("text-ing1");
const textcomp2 = document.getElementById("text-comp2");
const texting2 = document.getElementById("text-ing2");
const textcomp3 = document.getElementById("text-comp3");
const texting3 = document.getElementById("text-ing3");

const cardOpostoContainer = document.getElementById("card-oposto"); 
const cardOpostoImg = document.getElementById("card-inicio");
const cardOpostoText = document.getElementById("cardm-text1");
const cardOpostoText2 = document.getElementById("cardm-text2");


const cardinicioContainer = document.getElementById("card-inicio-container"); 
const cardinicioImg = document.getElementById("card-fem");
const cardinicioText = document.getElementById("cardf-text1"); 
const cardinicioText2 = document.getElementById("cardf-text2");

function reloadToTop() {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.location.reload();
};

function conteudoMasc() {
    window.scrollTo(0, 0);
    currentmode = 'masc'
    mainText.innerHTML = "Cative do trabalho ao bar e além com Aventus, a fragrância mais reverenciada da The House of Creed, com versatilidade incomparável, feita sob medida para qualquer momento. Uma estreia vibrante de bergamota calabresa exclusiva e colhida à mão, com toques de limão e pimenta rosa, dá lugar a um coração delicioso de abacaxi e patchouli. Essa suculência tentadora é complementada com bétula defumada e cedro decadente na base, adicionando uma sensação persistente de sofisticação a esta Eau de Parfum distinta. Aventus é uma fragrância de qualidade 'Millésime', um termo francês para vinhos que se traduz como 'uma grande safra'. Essa marca de excelência significa que ela foi elaborada com os melhores ingredientes, desde o abacaxi vibrante que se desenvolve em seu coração até o sofisticado aroma defumado de bétula em sua base. Criado para celebrar o 250º aniversário da Casa Creed, Aventus logo conquistou reconhecimento e hoje se orgulha de ser uma das fragrâncias mais celebradas do mundo. Uma ode olfativa à força e ao sucesso, ele está contido no frasco exclusivo da Creed, com o formato de um cantil clássico de cavalheiro.";

    mainImg1.src = "imgs/fotomasc1.png";
    mainImg2.src = "imgs/fotomasc2.png";
    mainImg3.src = "imgs/fotomasc3.jpg";
    mainImg4.src = "imgs/fotomasc4.jpg";
    mainImg5.src = "imgs/fotomasc5.jpg";

    textcomp.innerHTML = "Composição";
    texting.innerHTML = "Notas de Topo: Bergamota, Limão, Groselha Negra, Abacaxi";
    textcomp1.innerHTML = "Composição";
    texting1.innerHTML = "Groselha Negra";
    textcomp2.innerHTML = "Composição";
    texting2.innerHTML = "Abacaxi";
    textcomp3.innerHTML = "Composição";
    texting3.innerHTML = "Toranja branca";

    cardinicioImg.src = "imgs/logo.png"; 
    cardinicioText.innerHTML = "Voltar ao Início";
    cardinicioText2.innerHTML = "Clique para recarregar a página.";
    btnfem.innerHTML = "Início"
    cardinicioContainer.style.backgroundColor = '#87b7dcff';

    cardOpostoImg.src = "imgs/eladaria.avif"; 
    cardOpostoText.innerHTML = "Conheça a fragrância Feminina";
    cardOpostoText2.innerHTML = "Descubra Creed Eladaria.";
    cardOpostoContainer.style.backgroundColor = '#b83a42';

}

function conteudoFem() {
    window.scrollTo(0, 0);
    currentmode = 'fem'
    mainText.innerHTML = "Descubra Eladaria, uma encantadora fragrância floral de rosas da The House of Creed que floresce com modernidade. Capturando um jardim onírico que desperta na névoa prateada do amanhecer, abre com tangerina radiante e refrescante, suavemente aquecida pelo suave tempero da pimenta rosa. À medida que a fragrância floresce, uma trilogia de rosas se desdobra em seu coração, dançando com delicadas peônias e lírios-do-vale, antes de se estabelecer em uma base suntuosa de madeira de cashmere, baunilha e almíscar. Esta camada luxuosa confere uma doçura sutil e um calor envolvente, envolvendo quem a usa com uma sensualidade duradoura. Eladaria é apresentada no frasco de perfume exclusivo da The House of Creed, um símbolo atemporal de elegância que segue o formato de um cantil clássico. O design é feminino e encantador, em um suave tom de rosa pétala que ecoa o moderno perfume floral de rosas contido nele. Uma Expressão Moderna de Rosas. Eladaria é uma fragrância de rosas moderna que desafia as convenções, com um buquê luxuoso que floresce ao lado do brilho dos cítricos radiantes e do encanto do almíscar sensual. Esta impressão multifacetada incorpora com maestria a feminilidade moderna com sua profundidade e complexidade características.";

    mainImg1.src = "imgs/fotofem1.png";
    mainImg2.src = "imgs/fotofem2.avif";
    mainImg3.src = "imgs/fotofem3.jpg";
    mainImg4.src = "imgs/fotofem4.jpg";
    mainImg5.src = "imgs/fotofem5.jpg";

    textcomp.innerHTML = "Composição";
    texting.innerHTML = "Notas de Topo:Pimenta Rosa, Mandarina e Bergamota.";
    textcomp1.innerHTML = "Composição";
    texting1.innerHTML = "Rosa";
    textcomp2.innerHTML = "Composição";
    texting2.innerHTML = "Lírio-do-vale";
    textcomp3.innerHTML = "Composição";
    texting3.innerHTML = "Baunilha";

    cardinicioImg.src = "imgs/logo.png"; 
    cardinicioText.innerHTML = "Voltar ao Início";
    cardinicioText2.innerHTML = "Clique para recarregar a página.";
    btnfem.innerHTML = "Início"
    cardinicioContainer.style.backgroundColor = '#87b7dcff';

    cardOpostoImg.src = "imgs/absolu.avif"; 
    cardOpostoText.innerHTML = "Conheça a fragrância Masculina";
    cardOpostoText2.innerHTML = "Descubra Creed Absolu Aventus.";
    cardOpostoContainer.style.backgroundColor = '#555555'

};

if (btnmasc) {
    btnmasc.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Botão MASC toggle clicado! Modo atual:', currentmode);
        
        if (currentmode === 'initial' || currentmode === 'fem') {
            console.log('Toggle → MASC');
            conteudoMasc();
            // Opcional: Mude o texto do botão
            this.innerHTML = "Ver Feminino";
        } else if (currentmode === 'masc') {
            console.log('Toggle → FEM');
            conteudoFem();
            // Opcional: Mude o texto do botão de volta
            this.innerHTML = "Ver Masculino";
        }
    });
}

 cardinicioContainer.addEventListener("click", function(event) {
    console.log('Card INICIO clicado! Modo atual:', currentmode);
         if (currentmode === 'initial') {
            console.log('Indo para FEM via card inicial');
             conteudoFem();  // No initial, promove fem
         } else {
            console.log('Recarregando página');
             reloadToTop();  // Após alternar, recarrega (voltar)
         }
     });