
let vue_fashion = new Vue({
    el: '#vue_container',
    data: {
        catalog: [
            {
                name: "Sandy Beige Melange",
                desc: "Two-piece suit in sandy beige melange. Woven in wool, linen and polyester this weave creates a great feeling and structure.",
                price: "399",
                image: "TS-alsace-sand-51.jpg",
                category: "suits"
            },
            {
                name: "Navy blue blazer",
                desc: "Navy blue blazer in 100% wool with discrete red and black lines woven into a nice square pattern.",
                price: "215.2",
                image: "TS-alsworth-navy-7.jpg",
                category: "suits"
            },
            {
                name: "Blue suit in houndstooth weave",
                desc: "Two-piece suit in houndstooth weave. Woven in wool and linen for a comfortable and light feeling.",
                price: "349",
                image: "TS-ardtalla-blue-1.jpg",
                category: "suits"
            },
            {
                name: "Classic suit in black twill",
                desc: "Three-piece classic suit in black twill with structure. A classic suit in 100% wool to wear for both business and formal events.",
                price: "436",
                image: "TS-ascot-black-7-1.jpg",
                category: "suits"
            },
            {
                name: "Gray glen check suit",
                desc: "Two-piece gray glen check suit in 100% wool. This classic weave with black and purple lines creates a discrete and interesting check pattern.",
                price: "299",
                image: "TS-bridgetown-gray-10.jpg",
                category: "suits"
            },
            {
                name: "Classic check pattern",
                desc: "Three-piece suit in gray with a classic check pattern in 100% wool. The suit jacket is designed with a classic lapel, single vent at back and front pockets with pocket lids.",
                price: "436",
                image: "TS-mayport-gray-31.jpg",
                category: "suits"
            },
            {
                name: "Classic tuxedo in black fine twill",
                desc: "Two-piece classic tuxedo in black fine twill for the formal event. The jacket has a classic shawl lapel in satin and satin dressed buttons and pocket frames.",
                price: "399",
                image: "TS-Smoking-01.jpg",
                category: "suits"
            },
            {
                name: "Black fine twill with stretch",
                desc: "Three-piece classic suit in black fine twill with stretch. The perfect suit for both formal and business events.",
                price: "436",
                image: "TS-traveller-black-11.jpg",
                category: "suits"
            },
            {
                name: "Beige checkered blazer",
                desc: "Beige blazer in 100% wool with discrete glen check pattern in light blue. Designed with a peak lapel, single vent at back and front pockets. ",
                price: "215.20",
                image: "TS-albi-beige-peak-5.jpg",
                category: "suits"
            }
        ],
        cart_inv: [],
        car_price: [],
        view_item: []
    },
    methods: {
        //adds product to cart when you press the buy button
        addProd: function (x) {
            this.cart_inv.push(this.catalog[x]);
            this.cart_price += this.catalog[x].price;
            localStorage.setItem("cart", JSON.stringify(this.cart_inv));
        },
        removeProd: function (x) {
            this.cart_inv.splice(this.catalog[x], 1);
            localStorage.setItem("cart", JSON.stringify(this.cart_inv));
        },
        viewProd: function (x) {
            this.view_item.push(this.catalog[x]),
            this.showProd();
        },
        showProd: function () {
            console.log(this.view_item);
            document.getElementById("view").style = "display:initial";
        },
        //closes the view div after cancel is clicked
        viewClose: function () {
            this.view_item.splice(0),
            document.getElementById("view").style = "display: none;";
        },

        continue_payment: function () {
            document.getElementById("shipping_info").style.display = "none";
            document.getElementById("payment_info").style.display = "initial";
        }
    }
});

vue_fashion.cart_inv = JSON.parse(localStorage.getItem("cart"));

let cart = [];

// for loops that create a array of each product category.
let catalog_suits = [];
for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].category == "suits") {
        catalog_suits += catalog[i];
    }
}
let catalog_casual = [];
for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].category == "casual") {
        catalog_casual += catalog[i];
    }
}
let catalog_accessories = [];
for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].category == "accessories") {
        catalog_accessories += catalog[i];
    }
}

product.fill_featured();

//functions that open and close view div
function view_item(e) {
    document.getElementById("view").style = "display: initial;";
    product.fill_view(e);
}

function buy_item(e) {
    document.getElementById("view").style = "display: none;";
    product.cart_add(e);
}

// google maps script
initMap();
function initMap() {
    // The location of Uluru
    const port_elizabeth = { lat: -33.91799, lng: 25.57007 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: port_elizabeth,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: port_elizabeth,
        map: map,
    });
};