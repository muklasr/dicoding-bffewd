class WayangItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set wayang(wayang) {
    this._wayang = wayang;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get id() {
    return this._wayang.id;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
            :host {
              padding: 8px !important
            }

            .card {
              border: 0.3px solid rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              overflow: hidden;
            }

            .card:hover {
              box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.2);
            }
            
            .card .wayang-image {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
            
            .wayang-info {
                padding: 0px 10px;
                margin: 0px
            }
            
            .wayang-info > p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1; /* number of lines to show */
            }
          </style>
          <div class="card" data-wayang="${this._wayang.image_url}" data-anu="a" data-target="#exampleModal">
            <img class="wayang-image" src="${this._wayang.image_url}" alt="Gambar Wayang">
            <div class="wayang-info">
                <p title="${this._wayang.nama}">${this._wayang.nama}</p>
            </div>
          </div>
      `;

    this.addEventListener("click", this._clickEvent);
  }
}

customElements.define("wayang-item", WayangItem);
