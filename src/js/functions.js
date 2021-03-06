import { form, terminoInput, ui, pagination } from './references.js';

const registerPage = 40;
let totalPages, iterator, currentPage = 1;

function startEventListener() {
    form.addEventListener( 'submit', validateForm );
}

function *createPaginator( total )  {
    for( let i = 1; i <= total; i++ ) {
        yield i;
    }
}


const showPaginator = () => {
    iterator = createPaginator( totalPages );

    while( true ) {
        const { value, done } = iterator.next();
        if( done ) return;

        const boton = document.createElement( 'a' );
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add( 'siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded' );

        boton.onclick = () => {
            currentPage = value;
            searchImages();
        }

        pagination.appendChild( boton );
    }
}

// Calcula la cantidad de páginas a generar
const calculatePages = pages => Math.ceil( pages / registerPage );

// Busca las imagenes de acuerdo al termino
const searchImages = async () => {
    ui.showSpinner();

    const termino = terminoInput.value;
    const key = '18852160-36a1004710f1f2896f7bfc714';
    const url = `https://pixabay.com/api/?key=${ key }&q=${ termino }&per_page=${ registerPage }&page=${ currentPage }`;

    try {
        const response = await fetch( url );
        const result = await response.json();

        totalPages = calculatePages( result.totalHits );
        ui.showImages( result.hits );
    } catch( error ) {
        ui.cleanResult();
        ui.showError( 'No se pudo descargar las imagenes, Intente de nuevo' );
    }
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
    startEventListener,
    createPaginator,
    totalPages,
    currentPage,
    showPaginator
}