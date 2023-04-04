import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    target: "_blank",
    className: "nav-icon",
    iClassName: "fab fa-twitter",
  },
  {
    id: 2,
    href: "https://www.faceboook.com",
    target: "_blank",
    className: "nav-icon",
    iClassName: "fab fa-facebook",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    target: "_blank",
    className: "nav-icon",
    iClassName: "fab fa-squarespace",
  },
];

export const services = [
  {
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    iconClass: "fas fa-wallet fa-fw",
    id: 1,
  },
  {
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    iconClass: "fas fa-tree fa-fw",
    id: 2,
  },
  {
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    iconClass: "fas fa-socks fa-fw",
    id: 3,
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    tourDate: "August 26th, 2020",
    tourName: "Tibet Adventure",
    tourDetails: "A thrilling mountain adventure",
    location: "China",
    duration: "6 Days",
    price: "From $2100",
  },
  {
    id: 2,
    img: img2,
    tourDate: "October 11th, 2020",
    tourName: "Best of Java",
    tourDetails: "Experience the Serenity",
    location: "Indonesia",
    duration: "11 Days",
    price: "From $1400",
  },
  {
    id: 3,
    img: img3,
    tourDate: "September 15th, 2020",
    tourName: "Explore Hong Kong",
    tourDetails: "Where East meets West",
    location: "Hong Kong",
    duration: "8 Days",
    price: "From $5000",
  },
  {
    id: 4,
    img: img4,
    tourDate: "December 5th, 2019",
    tourName: "Kenya Highlights",
    tourDetails: "Meet the Wildlife",
    location: "Kenya",
    duration: "20 Days",
    price: "From $3300",
  },
];
