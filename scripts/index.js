let rand_num = [];
//class for the product obj
class product {
    constructor(name = null, desc = null, price = null, image = null, category = null) {
        this._name = name;
        this._desc = desc;
        this._price = price;
        this._image = image;
        this._category = category;
    };

    // method that fills the featured cards on the home page
    static fill_featured() {

        for (let i = 0; i < 9; i++) {
            rand_num[i] = i;
        }
        rand_num.sort(this.random_sort);
        for (let i = 0; i < 9; i++) {

            let new_name = "card_" + i + "_name";
            let new_desc = "card_" + i + "_desc";
            let new_price = "card_" + i + "_price";
            let new_img = "card_" + i + "_img";

            document.getElementById(new_name).innerHTML = catalog[rand_num[i]].name;
            document.getElementById(new_desc).innerHTML = catalog[rand_num[i]].desc;
            document.getElementById(new_price).innerHTML = "$ " + catalog[rand_num[i]].price;
            document.getElementById(new_img).src = "images/" + catalog[rand_num[i]].image;
        }
    }

    static random_sort(a, b) {
        return Math.random() - 0.5;
    }

    //updates the view div
    static fill_view(e) {
        let code = e.slice(5, 6);
        let details = rand_num[code];

        console.log(rand_num);

        document.getElementById("view_name").innerHTML = catalog[details].name;
        document.getElementById("view_desc").innerHTML = catalog[details].desc;
        document.getElementById("view_price").innerHTML = "$ " + catalog[details].price;
        document.getElementById("view_img").src = "images/" + catalog[details].image;
    }
}

let product_obj = new product();
// array of products
let catalog = [
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
];

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

function view_close() {
    document.getElementById("view").style = "display: none;";
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