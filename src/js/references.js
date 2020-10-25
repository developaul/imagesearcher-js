import UI from './classes/ui.class.js';

// References
export const form           = document.querySelector( '#formulario' ),
             terminoInput   = document.querySelector( '#termino' ),
             result         = document.querySelector( '#resultado' ),
             pagination     = document.querySelector( '#paginacion' );

// Instances
export const ui = new UI();

export let iterator;