import { form, terminoInput, ui } from './references.js';

const registerPage = 40;
export let totalPages, iterador, currentPage = 1;

const startEventListener = () => {
    form.addEventListener( 'submit', validateForm );
}

// Calcula la cantidad de páginas a generar
const calculatePages = pages => Math.ceil( pages / registerPage );

// Busca las imagenes de acuerdo al termino
const searchImages = () => {
    ui.showSpinner();

    const termino = terminoInput.value;
    const key = '18852160-36a1004710f1f2896f7bfc714';
    const url = `https://pixabay.com/api/?key=${ key }&q=${ termino }&per_page=${ registerPage }&page=${ currentPage }`;

    fetch( url )
        .then( response => response.json() )
        .then( result => {
            // totalPages = calculatePages( result.totalHits );
            ui.showImages( result.hits );
        });
}

// Valida el formulario
const validateForm = event => {
    event.preventDefault();

    const termino = terminoInput.value;
    
    if( termino === '' ) {
        ui.showError( 'Agrega un termino de busqueda' );
        return;
    }

    searchImages();
}

export {
    startEventListener
}