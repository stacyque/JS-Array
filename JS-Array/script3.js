// 1. Create a predefined objects in an array (10 objects) and display it on HTML
let products =[
    {
        pname:"GeekVape Aegis Mini 80W Kit",
        price:"₱ 1,569.79",
        pcode:"AXMLHQPI",
        description:"The Geek Vape AEGIS Mini 80W Kit Mod is the follow-up to the Aegis Legend and Aegis Mini, deploying a much-needed single 18650 platform with 100W of maximum output while maintaining top-level durability and user-friendly ergonomics.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://vaping.com/geekvape-aegis-mini-80w-kit",
        imgurl:"https://vaping.com/media/catalog/product/cache/1/image/602x465/9df78eab33525d08d6e5fb8d27136e95/g/e/geekvape-aegismini-80w-kit-blackgreen-4__40228.1541640419_46.png"
    },
    {
        pname:"Jackaroo by Vandy Vape TC Kit 100W",
        price:"₱ 1,700.00",
        pcode:"QHYQKAXI",
        description:"The Jackaroo is a chunky 21700 device that can push up to 100w of power and thanks to the larger battery size, provide a fantastic battery life for a great all day vape.The mod feels weighty in the hand with a smooth rubber texture design thanks to the waterproof feature. A full colour easy to read screen gives all the info you need at a glance with more menu options bedded within. The firing switch has a clicky responsive feel and with the ergonomic design of the mod, is comfortable when firing with the finger or palm.",
        manufacturer:"Vandy Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://greyhaze.co.uk/products/jackaroo-waterproof-100w-kit-by-vandy-vape",
        imgurl:"https://cdn.shopify.com/s/files/1/0241/2241/products/jackaroo-blue-porcelen_1024x1024.jpg?v=1555336572"
    },
    {
        pname:"Geekvape Aegis LEGEND 200W Kit",
        price:"₱ 1,669.75",
        pcode:"QHYQKAXI",
        description:"Geekvape Aegis Legend 200W Kit comes with the new Legend 200W Mod designed to be both durable and reliable for the intentions of avoiding damage by accident, featuring military standard 810G-516.6 shock-proof...",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://vapestreet.com.au/products/geekvape-aegis-legend-200w-kit",
        imgurl:"https://cdn.shopify.com/s/files/1/1130/2440/products/geekvape-aegis-legend-kit-australia@2x.jpg?v=1528144945"
    },
    {
        pname:"Geek Vape Aegis Shielded 100W TC Box Mod Kit",
        price:"₱ 2,389.96",
        pcode:"QHYQKAXI",
        description:"The Aegis 100W TC Box Mod is a well shielded device that boasts powerful battery life, a multitude of functions, and avoid damage by accident for those who live a very active.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://www.ejuiceconnect.com/Geek-Vape-Aegis-Shielded-100W-TC-Box-Mod-Kit-p/aegis-mod-kit-geek-vape.htm",
        imgurl:"https://cdn3.volusion.com/djqrj.kxptz/v/vspfiles/photos/Aegis-Mod-Kit-Geek-Vape-2.jpg?1525711160"
    },
    {
        pname:"Geek Vape Frenzy Kit HazetownVape",
        price:"₱ 874.86",
        pcode:"QHYQKAXI",
        description:"The Geek Vape Frenzy is an extremely portable AIO system that features a long battery life, sleek  design,  and beautiful colors, the Frenzy’s sturdy Zinc-Alloy exterior sits a 950mAh battery.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://hazetownvapes.com/products/geek-vape-frenzy-kit-toronto-ontario-canada",
        imgurl:"https://cdn.shopify.com/s/files/1/0790/4309/products/Geek_Vape_Frenzy_Kit_Hazetown_Vapes_Toronto_Ontario_Canada_8.jpg?v=1556034626"
    },
    {
        pname:"Geek Vape Athena Squonk Kit",
        price:"₱ 974.86",
        pcode:"QHYQKAXI",
        description:"The compact, lightweight Athena has a simple exterior, featuring an intuitive locking-switch that’s located just underneath a large thumbprint-sized firing button. This lock switch helps prevent accidental firing when you’re feeding your tank, adjusting its settings, or walking around with it in your pocket. The Aluminum and superior Stainless Steel frame has dimensions of 73mm x 46mm x 35mm and displays a large opening for the Food Grade Silicone squonk bottle.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://www.misthub.com/products/geek-vape-athena-squonk-kit",
        imgurl:"https://cdn.shopify.com/s/files/1/0792/1843/products/vape-kits-geek-vape-athena-squonk-kit-1_1024x1024.jpg?v=1523937139"
    },
    {
        pname:"Geek Vape NOVA 200W TC Starter Kit",
        price:"₱ 897.76",
        pcode:"QHYQKAXI",
        description:"The Geek Vape NOVA 200W TC Starter Kit is a beautiful crafted masterpiece, implementing a metal and resin chassis construction with the advanced AS Chipset featuring extensive temperature control suite to power the new Super Mesh Coil System. Limit one (1) unit per purchase.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://www.elementvape.com/geek-vape-nova-200w-tc-starter-kit",
        imgurl:"https://www.elementvape.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/e/geek_vape_nova_200w_tc_starter_kit_1.jpg"
    },
    {
        pname:"Geek Vape Lucid 80W Starter Kit with Lumi Tank",
        price:"₱ 1,197.76",
        pcode:"QHYQKAXI",
        description:"The Lucid Mod, powered by single 18650 battery, is able to reach up to a maximum output power of 80W. As for the Lumi Tank, it utilizes the innovative super mesh coil to produce outstanding flavor and vapor production",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"N/A",
        url:"https://www.3avape.com/geek-vape-lucid-80w-starter-kit-with-lumi-tank.html",
        imgurl:"https://www.3avape.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/g/e/geekvape_lucid_kit_4_.jpg"
    },
    {
        pname:"Naked 100 E-Juice",
        price:"₱ 601.51",
        pcode:"QHYQKAXI",
        description:"NKD 100 Salt E-Liquid – Lava Flow offers a combination of fresh strawberries, with coconut and pineapple flavors. Will definitely satisfy your taste buds.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"05/06/2023",
        url:"https://ecigarettereviewed.com/naked-100-e-juice-review/",
        imgurl:"https://image.made-in-china.com/202f0j00UdoEanrAsRzQ/Competitive-Wholesale-Price-Malaysia-E-Liquid-Replica-Nasty-Juice-50ml-Vape-Juice.jpg"
    },
    {
        pname:"Bird Brains by Cuttwood E-Juice",
        price:"₱ 601.51",
        pcode:"QHYQKAXI",
        description:"NKD 100 Salt E-Liquid – Lava Flow offers a combination of fresh strawberries, with coconut and pineapple flavors. Will definitely satisfy your taste buds.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"05/06/2023",
        url:"https://www.eliquid.com/collections/cuttwood",
        imgurl:"http://cdn.shopify.com/s/files/1/0280/7756/products/Cuttwood_-_60_Bird_Brains_FDA_600x.jpg?v=1559886437"
    },
    {
        pname:"NKD 100 Salt E-Liquid – Lava Flow",
        price:"₱ 601.51",
        pcode:"QHYQKAXI",
        description:"NKD 100 Salt E-Liquid – Lava Flow offers a combination of fresh strawberries, with coconut and pineapple flavors. Will definitely satisfy your taste buds.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"05/06/2023",
        url:"https://ejuicesforless.com/shop/nicotine-salts/nkd-100-salt-e-liquid/nkd-100-salt-e-liquid-lava-flow/",
        imgurl:"https://ejuicesforless.com/wp-content/uploads/2018/08/NKD-100-Salt-E-Liquid-Lava-Flow.jpg"
    },
    {
        pname:"Logic drops e-liquid price",
        price:"₱ 601.51",
        pcode:"QHYQKAXI",
        description:"NKD 100 Salt E-Liquid – Lava Flow offers a combination of fresh strawberries, with coconut and pineapple flavors. Will definitely satisfy your taste buds.",
        manufacturer:"Geek Vape",
        stocks:"1",
        supplier:"",
        expdate:"05/06/2023",
        url:"https://www.slrmag.co.uk/logic-drops-e-liquid-price/",
        imgurl:"https://www.slrmag.co.uk/wp-content/uploads/2018/08/Logic-drops-e-liquid-price.jpg"
    },
]

let output = "";
products.forEach(function(item){
    if (item.imgurl == undefined)
    {
        item.imgurl = ""
    }
    output += `<div class ='item'>
        <img src='${item.imgurl}'>
        <a href='${item.url}'>${item.pname}</a>
    </div>
    `
})
document.getElementById('container').innerHTML = output
//document.getElementById('container').innerHTML = `img src ="${products[0].imgurl}"`

// let output = "";
// products.forEach(function(item){
//     output += `<img src= ${item.imgurl}>
//     <p>`
// })