import { form, result } from '../references.js';

class UI {
    showError( message ) {
        const existAlert = document.querySelector( '.bg-red-100' );
    
        if( !existAlert ) {
            const alert = document.createElement( 'p' );
    
            alert.classList.add( 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center' );
            alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${ message }</span>`;
    
            form.appendChild( alert );
    
            setTimeout( () => {
                alert.remove();
            }, 3000 );
        }
    }

    showSpinner() {
        this.cleanResult();

        const spinnerDiv = document.createElement( 'div' );
        spinnerDiv.classList.add( 'sk-circle' );
        spinnerDiv.innerHTML = `
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>`;
        
        result.appendChild( spinnerDiv );
    }

    cleanResult() {
        while( result.firstChild ) {
            result.removeChild( result.firstChild );
        }
    }

}

export default UI;