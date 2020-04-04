import $ from "jquery";
class ModalInfo extends HTMLElement {
  constructor(){
    super();
  }
  
  connectedCallback() {
    this.render();
  }

  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${this._content.nama}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                        <div class="col col-lg-4 col-md-4 col-sm-12">
                          <img src="${this._content.image_url}" style="width:100%" alt="Gambar Wayang"/>
                        </div>
                        <div class="col col-lg-8 col-md-8 col-sm-12">
                          <b>Nama</b>
                          <br> ${this._content.nama} <br>
                          <b>Kasta</b>
                          <br> ${this._content.kasta} <br>
                          <b>Senjata</b>
                          <br> ${this._content.senjata} <br>
                          <b>Ayah</b>
                          <br> ${this._content.ayah} <br>
                          <b>Ibu</b>
                          <br> ${this._content.ibu} <br>
                          <b>Pasangan</b>
                          <br> ${this._content.pasangan} <br>
                          <b>Anak</b>
                          <br> ${this._content.anak} <br>
                        <div>
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                  </div>
                </div>
            </div>`;
        $(this).attr('class','modal fade').attr('id',"exampleModal").attr('tabindex',"-1").attr('role',"dialog").attr('aria-labelledby',"exampleModalLabel").attr('aria-hidden',"true");
  }
}
customElements.define("modal-info", ModalInfo);
