class ProductModel extends HTMLElement {
    constructor() {
        super();
        this.openModelModal();
    }

    getMediaID(){
        return this.getAttribute('data-media-id');
    }

    getModal(){
        return document.getElementById('productModelModal');
    }

    openModelModal(){
        const mediaID = this.getMediaID();
        const modal = this.getModal();

        if(!mediaID){
            return;
        }

        const openModalButton = this.querySelector(`button[id="productModelOpenButton_${mediaID}"]`);
        openModalButton.addEventListener('click', function(e){
            modal.querySelector('#body').innerHTML = "";
           
            const template = document.querySelector(`product-model[data-media-id="${mediaID}"] > template`);
            const clone = template.content.cloneNode(true);
            modal.querySelector('#body').appendChild(clone);
            modal.querySelector('#body > model-viewer').setAttribute("reveal", "auto");
        });
    }
}

const productModel = customElements.define('product-model', ProductModel);