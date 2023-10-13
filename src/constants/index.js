import {
    facebook,
    instagram,
    support,
    shieldTick,
    truckFast,
    twitter,
    polygon,
    replit,
    devfolio
} from '../assets/icons/index'
import {
    bigShoe1,
    bigShoe2,
    bigShoe3,
    customer1,
    customer2,
    footerLogo,
    headerLogo,
    offer,
    shoe4,
    shoe5,
    shoe6,
    shoe7,
    shoe8,
    thumbnailBackground,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3
} from '../assets/images/index'

export const navLinks = [
    // {href: "#home", label:"Home"},
    {href: "/team", label:"Our Team"},
    {href: "#about-us", label:"Events"},
    {href: "#contact-us", label:"Contact Us"},
    // {href:"https://aryanp45.github.io/", label:"Creator"}
]

export const shoes = [
    {
        thumbnail: bigShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: bigShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: bigShoe1,
        bigShoe: bigShoe1,
    },
]

export const statistics = [
    { value: '5k+', label: 'Events' },
    { value: '1000+', label: 'WorkShops' },
    { value: '2500k+', label: 'Participants' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        rating: "(4.5)",
        price: "₹2,000",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        rating: "(4.3)",
        price: "₹2,100",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        rating: "(4.2)",
        price: "₹3,200",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        rating: "(5)",
        price: "₹2,230",
    },
]

export const services = [
    {
        imgURL: devfolio,
        label: "DEVFOLIO LOGO",
        subtext: "Enjoy seamless shopping with our complimentary shipping service.",
        url : "https://devfolio.co"
    },
    {
        imgURL: polygon,
        label: "POLYGON LOGO",
        subtext: "Experience worry-free transactions with our secure payment options.",
        url : "https://polygon.technology/"
    },
    
]
export const replitServices = [
    {
        imgURL: replit,
        label: "REPLIT LOGO",
        url : "https://replit.com"

    },
    
]

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Samrat',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Gwen Stacy',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Events",
        links: [
            { name: "1", link: "/" },
            { name: "2", link: "/" },
            { name: "3", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "gfg@viit.ac.in", link: "mailto:gfg@viit.ac.in" },
            { name: "+919284173890", link: "tel:+919284173890" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];