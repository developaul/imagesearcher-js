import { form, terminoInput, ui } from './references.js';

const startEventListener = () => {
    form.addEventListener( 'submit', validateForm );
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