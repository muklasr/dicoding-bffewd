import $ from "jquery";
import "./WayangItem.js";

class WayangList extends HTMLElement {
  constructor() {
    super();
  }

  set wayangs(wayangs) {
    this._wayangs = wayangs;
    this.render();
  }

  set handleClick(event) {
    this._event = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .placeholder {
              font-weight: lighter;
              color: rgba(0,0,0,0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
          }
        </style>
    `;

    this._wayangs.forEach(wayang => {
      const wayangItemElement = document.createElement("wayang-item");
      wayangItemElement.wayang = wayang;
      wayangItemElement.className = "col-lg-2 col-md-4 col-sm-6";
      wayangItemElement.clickEvent = function() {
        $("#exampleModal").modal("show");
        const modalElement = document.querySelector("modal-info");
        modalElement.content = wayang;
      };
      this.appendChild(wayangItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<div class="alert alert-danger" role="alert" style="margin: 15px auto">
    ${message}
    </div>`;
  }
}

customElements.define("wayang-list", WayangList);
