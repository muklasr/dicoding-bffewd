import $ from "jquery";
class CategoryCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.text = this.getAttribute("text") || null;
    this.active = this.getAttribute("active") || false;
    this.render();
  }

  get categoryText() {
    return this.text;
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
              :host {
                border-radius: 8px; 
                margin: 2px;
                background: url('../src/assets/images/cardcover_grayscale.png');
                background-size: cover;
              }

              :host(.active) {
                background: url('../src/assets/images/cardcover.png');
                background-size: cover;
              }
              
              h3 {
                  position: relative;
                  margin: 10px 20px;
                  color: white
              }
            </style>
            <div class="card">
            <h3>${this.text}</h3>
            </div>
        `;
    $(this).addClass("col col-lg-2 col-md-3 col-sm-6");

    this.addEventListener("click", function(e) {
      $("category-card").removeClass("active");
      $(this).toggleClass("active");
    });
  }
}

customElements.define("category-card", CategoryCard);
