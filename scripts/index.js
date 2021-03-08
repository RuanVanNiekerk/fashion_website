let vue_fashion = new Vue({
    el: '#vue_container',

    created() {
        this.fill_catalogs();
        this.rand_sort();
        this.cart_inv = this.check_null;
        this.cart_price = this.add_price;
        this.display_total();
    },

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
            },

            {
                name: "Classic tuxedo in black fine twill",
                desc: "Two-piece classic tuxedo in black fine twill for the formal event. The jacket has a classic shawl lapel in satin and satin dressed buttons and pocket frames.",
                price: "399",
                image: "TS-Smoking-01.jpg",
                category: "casual"
            },
            {
                name: "Black fine twill with stretch",
                desc: "Three-piece classic suit in black fine twill with stretch. The perfect suit for both formal and business events.",
                price: "436",
                image: "TS-traveller-black-11.jpg",
                category: "casual"
            },
            {
                name: "Beige checkered blazer",
                desc: "Beige blazer in 100% wool with discrete glen check pattern in light blue. Designed with a peak lapel, single vent at back and front pockets. ",
                price: "215.20",
                image: "TS-albi-beige-peak-5.jpg",
                category: "casual"
            },

            {
                name: "Oriental print pocket square",
                desc: "Make a statement at your next party with this dapper oriental print pocket square in wool and modal mix.",
                price: "19",
                image: "11597 Oriental print pocket square - folded.jpg",
                category: "accessories"
            },
            {
                name: "Green paisley pocket square",
                desc: "Make a statement at the next party with this dapper pocket square in green with a paisley print in a wool and modal mix.",
                price: "19",
                image: "DSC_8177.jpg",
                category: "accessories"
            },
            {
                name: "Beige checkered blazer",
                desc: "Make a statement at your next party with this dapper navy herringbone silk pocket square.",
                price: "19",
                image: "DSC_8179.jpg",
                category: "accessories"
            },
            {
                name: "Paisley silk scarf",
                desc: "This versatile paisley print silk scarf with dark navy background will elevate your everyday outfit or compliment your evening wear.",
                price: "49",
                image: "Paisley-silk-scarf-model-11584.jpg",
                category: "accessories"
            },
            {
                name: "Paisley viscose scarf",
                desc: "Scarf made from high quality viscose that can be used to tie together your outfit. ",
                price: "29",
                image: "Paisley-viscose-scarf-model-11582.jpg",
                category: "accessories"
            },
            {
                name: "Striped viscose scarf",
                desc: "Superior quality scarf made of light and soft-on-the-skin viscose fabric. The colourful stripes make it the perfect accessory for a dapper look.",
                price: "29",
                image: "striped-viscose-scarf-model-11581.jpg",
                category: "accessories"
            },
            {
                name: "Dotted suspenders navy and dark orange",
                desc: "Dotted, high-quality suspenders in navy and dark orange. Add a pair of suspenders to your party outfit for an intriguing and modern finish.",
                price: "29",
                image: "Tailor-Store-suspenders-black-orange.jpg",
                category: "accessories"
            },
            {
                name: "Striped suspenders blue and burgundy",
                desc: "High-quality striped suspenders in trendy blue and burgundy with clips. Add a pair of suspenders to your party outfit for an intruiging and modern finish.",
                price: "29",
                image: "Tailor-Store-suspenders-blue-burgundy.jpg",
                category: "accessories"
            },
            {
                name: "Black belt in 100% braided leather",
                desc: "Black belt in 100% braided leather and with a buckle in an antiqued-silver-finish. A classic piece which can easily be styled with your suit trousers, chinos and jeans.",
                price: "39",
                image: "Tailor-Store-belt-black.jpg",
                category: "accessories"
            },
        ],
        catalog_suits: [],
        catalog_casual: [],
        catalog_accessories: [],
        catalog_random: [],
        cart_inv: [],
        cart_price: 0,
        view_item: []
    },

    methods: {
        // for loops that create a array of each product category.
        fill_catalogs: function () {
            for (let i = 0; i < this.catalog.length; i++) {
                if (this.catalog[i].category == "suits") {
                    this.catalog_suits.push(this.catalog[i]);
                }
            }
            for (let i = 0; i < this.catalog.length; i++) {
                if (this.catalog[i].category == "casual") {
                    this.catalog_casual.push(this.catalog[i]);
                }
            }
            for (let i = 0; i < this.catalog.length; i++) {
                if (this.catalog[i].category == "accessories") {
                    this.catalog_accessories.push(this.catalog[i]);
                }
            }

        },
        //adds items to cart when you press the buy button
        addProd: function (x) {
            if (this.cart_inv == null || this.cart_inv == undefined){
                this.cart_inv = [];
            }
            this.cart_inv.push(this.catalog[x]);
            localStorage.setItem("cart", JSON.stringify(this.cart_inv));
            alert("Item has been added to your Cart");
        },
        //removes items from cart. also updates cart price as items are removed
        removeProd: function (x) {
            this.cart_inv.splice(this.catalog[x], 1);
            this.cart_price = this.add_price;
            this.display_total();
            localStorage.setItem("cart", JSON.stringify(this.cart_inv));
        },
        //displays the the viewed item
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
        },
        //show total price on checkout
        display_total: function () {
            console.log(this.cart_price);
            document.getElementById("checkout_total").innerHTML = "Total: $" + this.cart_price;
        },
        rand_sort: function () {
            for (let i = 0; i < 9; i++) {
                this.catalog_random.push(this.catalog[Math.floor(Math.random() * this.catalog.length)]);
            };
        }
    },

    computed: {
        add_price: function () {
            let price = 0;
            if (this.cart_inv != null) {
                for (let i = 0; i < this.cart_inv.length; i++) {
                    price += parseInt(this.cart_inv[i].price);
                }
                console.log(price);
            }
            return price;
        },
        check_null: function () {
            if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart")) != undefined) {
                return JSON.parse(localStorage.getItem("cart"))
            }
        }
    }
});

let cart = [];

//functions that open and close view div
function view_item(e) {
    document.getElementById("view").style = "display: initial;";
    product.fill_view(e);
}

function buy_item(e) {
    document.getElementById("view").style = "display: none;";
    product.cart_add(e);
}

//moves screen to top of page
function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
