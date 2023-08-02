import { configureStore, createSlice } from "@reduxjs/toolkit";

import w1 from "../images/landscape2.jpg";
import w2 from "../images/w2.png";
import w3 from "../images/w3.png";
import w4 from "../images/w4.png";
import w5 from "../images/w5.png";
import w6 from "../images/w6.png";
import w7 from "../images/w7.png";
import w8 from "../images/w8.png";
import w9 from "../images/w9.png";
import w10 from "../images/w10.png";
import w12 from "../images/w12.png";
import w13 from "../images/w13.png";
import w14 from "../images/w14.png";
import w15 from "../images/w15.png";
import w16 from "../images/w16.png";
import w17 from "../images/w17.png";
import w18 from "../images/w18.png";
import w19 from "../images/w19.png";
import w20 from "../images/w20.png";
import w21 from "../images/w21.png";

import justp from "../images/justp2.gif";
import justpr from "../images/landscape2.jpg";
import jus from "../images/justbehance3 1.png";
import just from "../images/justbehance4 1.png";
import eatjust from "../images/justbehance6 1.png";
import dogs from "../images/justbehance8 1.png";
import dogfood from "../images/justbehance5 1.png";
import j from "../images/juuuus.png";
import ju from "../images/toptaljust3 2.png";
import juju from "../images/toptaljust4 1.png";
import julu from "../images/justbehance13 1.png";
import jusu from "../images/toptaljust8 1.png";
import jasa from "../images/toptaljust6 1.png";
import jese from "../images/toptaljust1 1.png";
import jeesz from "../images/justphreshpostlayout 1.png";

import eat1 from '../images/eat1.png'
import eat2 from '../images/eat2.png'
import eat3 from '../images/eat3.png'
import eat4 from '../images/eat4.png'
import eat5 from '../images/eat5.png'
import eat6 from '../images/eat6.png'
import eat7 from '../images/eat7.png'
import eat8 from '../images/eat8.png'
import eat9 from '../images/eat9.png'
import eat10 from '../images/eat10.png'
import eat11 from '../images/eat11.png'
import eat12 from '../images/eat12.png'
import eatupvid from '../images/video1.mp4'
import eat13 from '../images/eat13.png'
import eat14 from '../images/eat14.png'
import eat15 from '../images/eat15.png'
import eat16 from '../images/eat16.png'
import yeah from '../images/Yeah.mp4'
import realeat from '../images/realeat.mp4'

import period1 from '../images/period1.png'
import period2 from '../images/period2.png'
import period3 from '../images/period3.png'
import period4 from '../images/period4.png'
import period5 from '../images/period5.png'
import period6 from '../images/period6.png'
import period7 from '../images/period7.png'
import period8 from '../images/period8.png'
import period9 from '../images/period9.png'
import period10 from '../images/period10.png'

import eta1 from '../images/eta1.png'
import eta2 from '../images/eta2.png'
import eta3 from '../images/eta3.png'
import eta4 from '../images/eta4.png'
import eta5 from '../images/eta5.png'
import eta6 from '../images/eta6.png'
import eta7 from '../images/eta7.png'
import eta8 from '../images/eta8.png'
import eta9 from '../images/eta9.png'
import eta10 from '../images/eta10.png'
import eta11 from '../images/eta11.png'
import etavid1 from '../images/etavid1.gif'
import etavid2 from '../images/etavid2.mp4'
import etavid3 from '../images/etavid3.gif'
import etavid4 from '../images/etavid4.mp4'
import eta18 from '../images/eta18 1.png'


import druide1 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide1.jpg'
import druide2 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide2.jpg'
import druide3 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide3.jpg'
import druide4 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide4.jpg'
import druide5 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide5.jpg'
import druide6 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide6.gif'
import druide7 from '../images/WEBSITE PORTFOLIO/DUIDE/toptalduide7.jpg'


import folio3 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio3.jpg'
import folio4 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio4.jpg'
import folio5 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio5.jpg'
import folio6 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio7.jpg'
import folio8 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio8.jpg'
import folio9 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio9.jpg'
import folio10 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio10.jpg'
import folio11 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio11.jpg'
import folio12 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio13.jpg'
import folio13 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio14.jpg'
import folio14 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio15.jpg'
import folio15 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio16.jpg'
import folio16 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio18.jpg'
import folio17 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio17.jpg'
import folio19 from '../images/WEBSITE PORTFOLIO/LOGOFOLIO/logofolio12.jpg'


import man from '../images/big_man.png'
import lady1 from '../images/lady1.png'
import lady2 from '../images/Dami 1.png'
import lady3 from '../images/lady3.png'
import lady4 from '../images/fine.png'


import oraimo1 from '../images/WEBSITE PORTFOLIO/ORAIMO/b1.jpg'
import oraimo3 from '../images/WEBSITE PORTFOLIO/ORAIMO/b3.jpg'
import oraimo4 from '../images/WEBSITE PORTFOLIO/ORAIMO/b4.jpg'
import oraimo5 from '../images/WEBSITE PORTFOLIO/ORAIMO/b5.jpg'
import oraimo6 from '../images/WEBSITE PORTFOLIO/ORAIMO/b6.jpg'
import oraimo7 from '../images/WEBSITE PORTFOLIO/ORAIMO/b7.jpg'
import oraimo8 from '../images/WEBSITE PORTFOLIO/ORAIMO/b8.jpg'
import oraimo9 from '../images/WEBSITE PORTFOLIO/ORAIMO/b9.jpg'
import oraimo11 from '../images/WEBSITE PORTFOLIO/ORAIMO/b11.jpg'
import oraimo12 from '../images/WEBSITE PORTFOLIO/ORAIMO/oraimocompilation.jpg'

import pc1 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to1.jpg'
import pc2 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to2.jpg'
import pc3 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to3.jpg'
import pc4 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to4.jpg'
import pc5 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to5.jpg'
import pc6 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to6.jpg'
import pc7 from '../images/WEBSITE PORTFOLIO/POSTER CHALLENGE/to7.jpg'

import auto1 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos.jpg'
import auto3 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos3.jpg'
import auto4 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos4.jpg'
import auto5 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos5.jpg'
import auto6 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos6.jpg'
import auto7 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos7.jpg'
import auto8 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos8.jpg'
import auto9 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos9.jpg'
import auto10 from '../images/WEBSITE PORTFOLIO/AUTO SURGEON/autopos10.jpg'

import poster1 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters1.jpg'
import poster2 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters2.jpg'
import poster3 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters3.jpg'
import poster4 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters4.jpg'
import poster5 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters5.jpg'
import poster6 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters6.jpg'
import poster7 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters7.jpg'
import poster8 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters8.jpg'
import poster9 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters9.jpg'
import poster10 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters10.jpg'
import poster11 from '../images/WEBSITE PORTFOLIO/POSTER DESIGN CHALLENGE/posters11.jpg'

import chivas1 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas1.jpg'
import chivas2 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas2.jpg'
import chivas3 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas3.jpg'
import chivas4 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas4.jpg'
import chivas5 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas5.jpg'
import chivas6 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas6.jpg'
import chivas7 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas7.jpg'
import chivas8 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas8.jpg'
import chivas9 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas9.jpg'
import chivas10 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas10.jpg'
import chivas11 from '../images/WEBSITE PORTFOLIO/GAMR X CHIVAS/chivas11.jpg'

import ui1 from '../images/WEBSITE PORTFOLIO/UI DESIGN CHALLENGE/ui1.jpg'
import ui2 from '../images/WEBSITE PORTFOLIO/UI DESIGN CHALLENGE/ui2.jpg'
import ui3 from '../images/WEBSITE PORTFOLIO/UI DESIGN CHALLENGE/ui3.jpg'

import beta10 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance10.jpg'
import beta11 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance11.jpg'
import beta12 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance12.gif'
import beta14 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance14.jpg'
import beta15 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance15.jpg'
import beta17 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance17.jpg'
import beta2 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance2.jpg'
import beta4 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance4.jpg'
import beta5 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance5.jpg'
import beta6 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance6.jpg'
import beta7 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance7.jpg'
import beta9 from '../images/WEBSITE PORTFOLIO/BETA BANK/betabahance9.jpg'

import legit1 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp1.jpg'
import legit2 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp2.jpg'
import legit3 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp3.jpg'
import legit4 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp4.jpg'
import legit5 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp5.jpg'
import legit6 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp6.jpg'
import legit7 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp7.jpg'
import legit8 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp8.jpg'
import legit9 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp9.jpg'
import legit10 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp10.jpg'
import legit11 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp11.jpg'
import legit13 from '../images/WEBSITE PORTFOLIO/LEG IT/legitp13.jpg'
import legitvid from '../images/WEBSITE PORTFOLIO/LEG IT/video.mp4'

import kohl1 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl.jpg'
import kohl2 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl2.jpg'
import kohl3 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl3.jpg'
import kohl4 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl4.jpg'
import kohl5 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl5.jpg'
import kohl6 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl6.jpg'
import kohl7 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl7.jpg'
import kohl8 from '../images/WEBSITE PORTFOLIO/KOHL/toptalkohl8.jpg'

import fg from '../images/WEBSITE PORTFOLIO/F&G/toptalfg.jpg'
import fg2 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg2.jpg'
import fg3 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg3.jpg'
import fg4 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg4.jpg'
import fg5 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg5.jpg'
import fg6 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg6.jpg'
import fg7 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg7.jpg'
import fg8 from '../images/WEBSITE PORTFOLIO/F&G/toptalfg8.jpg'

import hemmy1 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg1.jpg'
import hemmy2 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg2.jpg'
import hemmy3 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg3.jpg'
import hemmy4 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg4.jpg'
import hemmy5 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg5.jpg'
import hemmy6 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg6.jpg'
import hemmy7 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg7.jpg'
import hemmy8 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg8.jpg'
import hemmy9 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg9.jpg'
import hemmy10 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg10.jpg'
import hemmy11 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg11.jpg'
import hemmy12 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg12.jpg'
import hemmy17 from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/hhcpg17.jpg'
import hemmyvideo from '../images/WEBSITE PORTFOLIO/HEMMY COUTURE/video.mp4'

const emailSlice = createSlice({
  name: "home",
  initialState: {
    email: "",
    name: "",
    phone: "",
    project: "",
    note: "",
  },
  reducers: {
    change_email(state, action) {
      return {
        ...state,
        email: action.payload,
      };
    },
    change_name(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
    change_phone_number(state, action) {
      return {
        ...state,
        phone: action.payload,
      };
    },
    update_project(state, action) {
      return {
        ...state,
        project: action.payload,
      };
    },
    write_note(state, action) {
      return {
        ...state,
        note: action.payload,
      };
    },
  },
});

const manipulationSlice = createSlice({
  name: "home",
  initialState: {
    link: "Home",
    index_reader: 0,
    data: [
      {
        position:'Techpreneur & Founder, Quick ETA',
        star_rating:5,
        name:'Emeka Mba',
        description:"Eniola is an exceptional UX engineer to collaborate with. His commitment to understanding our project's vision was outstanding, and he brilliantly translated it into his work. I was impressed by his remarkable efficiency in delivering high-quality results within a short timeframe. Working with Eniola has been an absolute pleasure.",
        image:man
      },
      {
        description:
          "Working with Eniola is always a pleasure as his high attention to detail makes him standout. He is reliable and the uniqueness of his visual content is consistent. If you haven't worked with him before, now is a great time to." ,
        star_rating: 5,
        name: "Omolale Oluwatosin",
        position: "Creative Director,Urban Exchange/Bae Gist",
        image: lady1,
      },
      {
        description:
          "I’m literally obsessed with my Logo!!! Been getting compliments on it plus Eniola helped in bringing my ideas to life. I love the way he pays attention to his clients details as well as his top notch service.Eniola is one person i can recommend anytime anyday.",
        star_rating: 5,
        name: "Karina Ololo",
        position: "CEO Delish Crumbs",
        image: lady3,
      },
      {
        description:
          "Eniola’s creativity and promptness in delivering tasks are unmatched. He skillfully translates a campaign message into visual elements that are captivating and impressive. An example of his incredible work was what he did with the organization's Merch campaign. His designs were unique and distinct. A top-tier and five-star human.",
        star_rating: 5,
        name: "Oyelere Damilola",
        position: "LCVP, Marketing & Communication ( AIESEC in Lagos )",
        image: lady2,
      },
      {
        description:"Eniola created the graphics and content for my brand, and it has been my brands main selling  point since then. His designs are so unique and eye catching, working with him was the best decision. I made for my business. Thank you Eniola!",
        star_rating:5,
        name:'Lovelee Odebala',
        position:'CEO HLA Period Care Boxes',
        image:lady4
      }
    ],

  },
  reducers: {
    change_active_link(state, action) {
      return {
        ...state,
        link: action.payload,
      };
    },
    change_indexer(state, action) {
      return {
        ...state,
        index_reader: action.payload,
      };
    },
  },
});

const workSlice = createSlice({
  name: "work",
  initialState: {
    data: [
      {
        image: w1,
        category: "Branding",
        name: "JustPhresh Kennel",
        Project_type: "Brand Design",
        tools: ["Adobe Illustrator", " Adobe Photoshop"],
        year: "2022",
        information: [
          "JustPhresh Kennel is a brand that deals in pets, from dogs to cats to many more domestic and wild animals. The brand is driven to render the best quality animals at your doorstep. The brand is perceived as fun, happy, innocent, classy, and secure. The goal-driven brand aims to build a society where pets can be normalized in Africa. The target audiences are Gen Z and millennials aged 18-35.The company needed a brand that would communicate its personality, as well as a high standard of service.",
          " The goal was to create a brand identity design that could stand out amongst JustPhresh's brand competitors. This led me to create a fun-loving and vibrant design system to help themcommunicate their personality and brand attributes more.",
        ],
        Role: "Brand Designer",
        collection1: [justp, jus, justpr, just, eatjust, dogs, dogfood],
        content2: {
          header: "COLORS, TYPOGRAPHY & APPLICATIONS",
          content:[
            " We choose to explore our brand colors in a way that reflects both our brand voice and personality as well as colors that could stand out in the pet industry. Our colors are Red Salsa, Jasmine ( Primary ) Fawn, and English Violet, ( secondary ) while our typeface is Bazinga",]
        },
        collection2: [j, ju, juju, julu, jusu, jasa, jese, jeesz],
      },
      {
        image: w2,
        category: "Web&App",
        name: "Eat_Up",
        tools:['Adobe Illustrator','Photoshop','After Effect','Figma'],
        Role:'Lead Designer',
        Project_type:'Brand & Web Design',
        year:'2023',
        information:['Eat up is a fictional burger brand based in western part of Africa. I decided as a burger lover to create an identity that reflects my idea on the food business in West Africa.','The visual image fuses the fun style of classic illustrations on a contemporary level with bold colors and modern applications. It conveys the mood of the brand, is simple, classic, fun and bold. Also a website design to shop online as well as product packaging to sell to the wider audience through the use of our fun and vibrant visual identity.'],
        collection1:[eat1],
        content2:{
            header:'LOGO DESIGN STAGE',
            content:['It all started with me making random sketches to display my idea of the brand, i wanted a logo that could be easy to remember and quite compelling so i went for a logotype.']
        },
        video2:[realeat]
        ,
        collection2:[eat2,eat3,eat4,eat5,eat6,eat7],
        content3:{
            header:'ILLUSTRATIONS FOR EAT UP',
            content:["Life is better with a burger! Eat Up is on a mission to transform its business, achieving the highest standards for food quality, sustainability and restaurant experiences in the junk industry. It was time for their visual identity to reflect the rest of their business by creating a brand world that modern consumers could feel good about that's why i opted for illustrations that better suit various categories from packs, to fries, to burgers, milkshakes, chicken and services.","An irreverently bold typeface, Today Shop gives an organic shapes of food. Warmer colors bring vibrant, fresh ingredients and the brand’s trademark flame-grilling method to life in packaging, crew uniforms, and digital experiences.​​​​​​​"]
        },
        collection3:[eat8,eat9,eat10,eat11,eat12],
        video3:[eatupvid],
        collection4:[eat13,eat14,eat15],
        content5:{
            header:'WEB DESIGN FOR EAT UP',
            content:['We needed our brands website to look more compelling and attractive to our target audience so we opted to play around our custom illustrations in order to suit such style']
        },
        video5:[yeah],
        collection5:[eat16]
      },
      {
        image: w3,
        category: "Branding",
        Role: "Brand Designer",
        name: "LOGOFOLIO",
        Project_type:'Logo Designer',
        year:'2022',
        information:['This Logofolio contains 16 Logomarks,Logotypes i explored for various clients from the year 2021-2022','The project also gives a brief on the Brand Description of each Logo'],
        tools:['Adobe Illustrator','PhotoShop'],
        collection1:[w3,folio3,folio4,folio5,folio6,folio8,folio9,folio10,folio11,folio19,folio12,folio13,folio14,folio15,folio17,folio16]

      },
      {
        image: w4,
        category: "Branding",
        name: "Duide",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        collection1:[druide1],
        tools:['adobe illustrator'],
        year:'2022',
        information:["Cool, Pleasure and sweet- This is what Duide aimed to achieve with the feel expected for their products. ","Duide ( a short word for duidelik meaning cool, awesome and amazing) is a fictional brand with the aim of providing quality ice creams to people within the ages of 18-30, this comes in 3 flavors which are chocolate, strawberry and blueberry, a reflection of the premium ice cream brands in the 90s"],
        content2:{
          header:'DUIDE',
          content:["Cool, Pleasure and sweet- This is what Duide aimed to achieve with the feel expected for their products. ",]
        },
        collection2:[druide7,druide3,druide5,druide2,druide4,druide6]
      },
      {
        image: w5,
        category: "Communication",
        name: "ORIAMO",
        Project_type:'Merch Design',
        Role:'Designer',
        tools:['Adobe Photoshop','Adobe Illustrator','Pinterest'],
        year:'2022',
        information:["Oraimo Technology Limited, based in Hong Kong, is a firm dedicated to offering the end users with stylish, delicate, and innovative products. They specialize in R&D, design, manufacture, and sales of 3C accessories. Almost 10 African nations and regions have been successfully covered by Oraimo thus far.","The brand wanted a collection of swimsuit designs for upcoming events (including googles, swimpants, shorts, doughnuts, and many others) that were in line with its corporate identity and assets, including colors and design style. I was given the challenge of putting these ideas to reality."],
        collection1:[oraimo1,oraimo9],
        content2:{
          header:"MOCKUPS",
          content:["A quick look at some of the designs made from the pattern design"]
        },
        collection2:[oraimo3,oraimo4,oraimo5,oraimo6,oraimo7,oraimo8,oraimo12,oraimo11]
      },
      {
        image: w6,
        category: "Web&App",
        name:'Quick ETA',
          Project_type:'Brand & Product Design',
          Role:'Digital Designer',
          tools:['Adobe Illustrator','Photoshop','After Effect','Figma'],
          year:'2023',
          information:["Quick ETA allows you to set and share Preferred Estimated Arrival Time (ETA) to receive timely notifications when it's time to travel based on acceptable travel times. No more constantly checking Google Maps or other navigation apps to see if the traffic is clearing up. QETA does it for you so you can focus on other things."," As a Digital designer, i was tasked with the responsibility of designing their brand and product which meant i will be going full stretch as regards the scope of this project. I started off by creating a brand identity design that resonates the brand attribute as well as features. Then i went to the product stage which involved me having to work on the App and Landing Page, following a detailed design stage."],
          collection1:[eta1],
          content2:{
            header:'DESIGN DISCOVERY',
            content:["Purpose and goals: We understood the purpose of the design and the specific goals it needs to achieve which was improving user experience, increasing conversion rates, and reflecting a unique brand identity.","Target audience: We identified the intended audience for the design and considered their preferences, needs, and expectations."],
          },
          collection2:[etavid1,eta2],
          video3:[etavid2],
          collection4:[eta3,eta4,eta5,eta6,eta7,eta8,eta9,eta10,eta11,eta18,etavid3],
          video4:[etavid4]


      },
      {
        image: w7,
        category: "Communication",
        name: "Poster_C",
        Project_type:'Poster Designs',
        Role:'Designer',
        tools:['Adobe Photoshop','Illustrator','Pexels'],
        year:'2023',
        information:["These are some of the posters I created to put some ideas into practice and exercise tools that I'm learning, I hope you like it!","It's quite amazing how design influences your everyday life. I was able to play around different styles from retro to minimalist and many others."],
        collection1:[pc1,pc2,pc3,pc4,pc5,pc6,pc7]
      },
      {
        image: w8,
        category: "Branding",
        name: "Auto-Surgeon",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        tools:['Adobe Photoshop','Adobe Illustrator'],
        year:'2022',
        information:["AUTO SURGEON is an automated service brand located in the South Western Region of Nigeria, this is a brand that provides various automative services ranging from repairs and maintenance","This is a brand that also aims at giving quality services as well as on time delivery so as to enable their customers get the best result and also value for thier money.They provide automative repair services,in which they major in parts and equipment so as to meet the needs of their customers"],
        collection1:[auto1,auto4,auto5,auto7,auto3,auto6,auto9,auto8,auto10]
      },
      {
        image: w9,
        category: "Branding",
        name: "HLA_PERIOD",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        tools:['Adobe Illustrator','Adobe Photoshop'],
        year:'2022/23',
        information:["HLA Period Boxes is dedicated to providing convenience and safety for the female gender. Depending on the client's budget, there are many packages available from this brand. This would make a wonderful gift for your loved ones and female friends. We cherish our women. HLA is the ideal location for you because it is happy and safe. "," I was faced with the challenge of branding the companies identity from their boxes, packaging items to other marketing collaterals which will serve as a major means of communication to their target audience."],
        collection1:[period1],
        content2:{
          header:'LOGO SKETCHES & TYPOGRAPHY',
          content:[" Based off the brief gotten from our client, we decided to move with a more flexible direction which enabled us come up with sketches that depicts feminine vibes in form of the word HLA which is an abbreviation for “Healthy Life Ahead”. We came up with different sketches that we felt depicts the brand better which we eventually picked the 3rd concept"]
        },
        collection2:[period2,period3],
        content3:{
          header:'PRODUCT PACKAGING',
          content:[" One of the major parts of this branding session was to create a packaging that stands out from their competition as well as a design that depicts girly vibe which also passes the message of it being a period/self care box. Who doesn’t want to purchase a box that feels girly, so we created patterns using our brand colors to design this."]
        },
        collection3:[period4,period5,period6,period7,period8,period9,period10]

      },
      {
        image: w10,
        category: "Communication",
      },
      {
        image: w12,
        category: "Communication",
        name:'poster Design Challenge',
        Project_type:'Poster Designs',
        tools:['Adobe Photoshop','illustrator'],
        Role:'Designer',
        year:'2022',
        information:["I think that when you get dressed in the morning,sometimes you're really making a decision about your behaviour for the day.Like if you put on flipflops,you;re saying :'Hope i don't get chased today.''Be nice to people in sneakers"],
        collection1:[poster1,poster2,poster3,poster4,poster5,poster6,poster7,poster8,poster9,poster10,poster11]
      },
      {
        image: w13,
        category: "Web&App",
        name: "Beta_Bank",
        Project_type:"App Design",
        Role:'Ui/Ux Designer',
        tools:['Adobe illustrator','Figma','Photoshop'],
        year:'2022',
        information:["Beta Bank is a fictional Nigerian Fintech Company with the aim of giving people a unique banking experience especially the youths.Beta Bank is known for their amazing network service as well as free charges on different bank transactions","Beta Bank also gives their customers a chance to lock and invest their savings which brings us to be a multidisciplinary bank .This is a banking system in Nigeria by creating an avenue for their customers to eat their cake and have it,widely known as the bank for the people"],
        collection1:[beta17,beta2,beta4,beta7,beta14,beta5,beta6,beta12,beta11,beta10,beta9,beta15]
      },
      {
        image: w14,
        category: "Branding",
        name: "F&G",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        year:'2022',
        tools:['Adobe Photoshop','Adobe Illustrator'],
        information:['F & G is a food brand that specializes in giving  topmost food satisfaction to people,this is your first choice for the best food spot in west africa,delivering products of good quality and excellent services at an affordable cost',' F&G helps to build & satisfy the human cravings to all classes of people.Encourage a service of excellence through giving the best cost.our aim is to make life easier to eat good food'],
        collection1:[fg6],
        collection2:[fg3,fg2,fg,fg4,fg5,fg7,fg8]
      },
      {
        image: w15,
        category: "Communication",
        name: "sketcho",
        Project_type:'Illustration',
        Role:'Designer',
        tools:['Adobe Photoshop','Illustrator','Gencraft'],
        year:'2022/23'
      },
      {
        image: w16,
        category: "Branding",
        name: "HEMMY COUTURE",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        information:["Hemmy couture is a Luxurious Fashion Brand located in the South Western part of Nigeria(Lagos),This is a Brand that deals majorly in giving the best outfits from Kaftans,to Pant Trousers and many more outfits.",'Their major tagline is "Stay Classy" becauase they want their customers to always display a look of classs through thier various outfits from Hemmmy couture '],
        year:'2021',
        tools:['Adobe Illustrator','Adobe Photoshop'],
        collection1:[hemmy1,hemmy2,],
        video2:[hemmyvideo],
        collection2:[hemmy3,hemmy4,hemmy5,hemmy6,hemmy7,hemmy8,hemmy9,hemmy10,hemmy11,hemmy12,hemmy17]
      },
      {
        image: w17,
        category: "Web&App",
        name: "Ui Design",
        Project_type:'Interface Design',
        Role:'Ui Designer',
        tools:['Figma','Photoshop','Illustrator'],
        year:'2022',
        information:[],
        collection1:[ui1,ui2,ui3]
      },
      {
        image: w18,
        category: "Communication",
        name: "GAMR x CHIVAS",
        Project_type:'Merch Designs',
        Role:'Designer',
        tools:['Adobe Photoshop','Illustrator','Gencraft'],
        year:'2022/23',
        information:["ChivasxGamrx needed a jersey design for their game event collaboration in early April 2022 with the gold and black color theme.The idea was to create a design that compliments the event and also brings the gaming vibe.The client needed 2 different jersey designs for each team"],
        collection1:[chivas1,chivas2,chivas3,chivas4,chivas5,chivas6,chivas7,chivas8,chivas9,chivas10,chivas11]
      },
      {
        image: w19,
        category: "Branding",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        name:"Wav Collection",

      },
      {
        image: w20,
        category: "Branding",
        name: "LEG IT",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        tools:['Adobe Illustrator','Adobe PhotoShop'],
        year:'2023',
        information:["LEG IT is a footwear company that mostly serves Nigeria in western Africa while also shipping to over ten other nations. It was born out of the desire of young people, whose need for high-quality, handcrafted footwear inspired the development of this brand. LEG IT was developed with its own strong personality and with products that reflect the vibrant and edgy behavior of the majority of Gen Z's and Millenials in order to serve such a unique public, as the recent identity was more into the old school style, which was their perception in the early years of their launch."],
        collection1:[legit1],
        collection2:[legit2,legit4],
        video3:[legitvid],
        collection4:[legit9,legit3,legit10,legit5,legit6,legit7,legit8,legit11,legit13]
      },
      {
        image: w21,
        category: "Branding",
        name: "KOHL",
        Project_type: "Brand Design",
        Role: "Brand Designer",
        information:['Just like the big brands like Nike,Calvin Klein,we needed a symbol that can be in the mind of our Potential Customer and audience, this enabled us to try out the major concepte of the Brand which is Power','Our Secondary Markk was designed to fit in the perception we had for the Brand ,Also we want a Special identity that people will know Kohl '],
        tools:['Adobe Illustrator','Adobe PhotoShop'],
        year:'2021',
        collection1:[kohl1],
        collection2:[kohl8,kohl3,kohl5,kohl2,kohl7,kohl6,kohl4]
      },
    ],
    active_section: "All",
    seasoned_data:[]
  },
  reducers: {
    change_active_section(state, action) {
      return {
        ...state,
        active_section: action.payload,
      };
    },
    updated_seasoned_data(state,action){
      if(action.payload ==='reload'){
        return{
          ...state,
          seasoned_data:[]
        }
      }
      else{
        return{
          ...state,
          seasoned_data:[...state.seasoned_data,action.payload]
        }
      }
    }

  },
});

export const change_email_data = emailSlice.actions;
export const manipulation = manipulationSlice.actions;
export const work_update = workSlice.actions;

const store = configureStore({
  reducer: {
    data: emailSlice.reducer,
    manipulate: manipulationSlice.reducer,
    work: workSlice.reducer,
  },
});

export default store;
