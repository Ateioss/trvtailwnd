<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/Card.vue";
import FrameButton from "./components/FrameButton.vue";
import TitleDocument from "./components/TitleDocument.vue";
import NavBar from "./components/NavBar.vue";
import Pagination from "./components/Pagination.vue";
import Information from "./components/Information.vue";

</script>

<template>
  <!-- Header -->
  <div class="relative w-1444 h-[3279px] bg-white">
    <div class="absolute w-[1440px] h-[464px] left-0 top-0 bg-hImage"></div>
    <div class="absolute w-[1063px] h-[156px] left-[189px] top-[178px] flex flex-col p-0 gap-[24px] items-center">
      <TitleDocument
          title="Découvrez nos formations sur étagère !"
          subTitle="Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs.
                    Management, vente, ressources humaines, efficacité professionnelle...
                    Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences."

          classTitle="w-[1058px] h-[66px] font-['NeuzeitGro']  not-static font-bold text-6xl leading-[66px] text-center text-white tracking-[-0.015em]"
          classSubTitle="m-auto w-[844px] h-[66px] font-Poppins not-static font-normal text-base leading-[22px] text-center text-white"
      />
    </div>

    <!-- régler le problème du shadow -->
    <div class="absolute w-[1122px] h-[105px] left-[159px] top-[409px] bg-white rounded-30" style="box-shadow:2px 8px 30px rgba(0, 0, 0, 0.06);">
    </div>

    <div class="absolute rounded-30 bg-mColor flex flex-row items-center w-[842px] h-[56px] left-[191px] top-[433px] gap-[16px] pr-6 pl-6 pt-0 pb-0">
      <p class="w-[50%] h-[22px] font-Poppins not-italic font-normal text-base leading-[22px] text-mColor2">
        Quelle formation recherchez-vous
      </p>
      <div class="w-[50%] flex justify-end">
        <img class="w-[40px] h-[42.11px]" src="./../../public/Images/IMG_7142.png">
      </div>
    </div>

    <div class="box-bolder flex flex-row justify-center items-center p-0 gap-4 absolute w-[187px] h-[56px] left-[1063px] top-[433px] bg-mColor rounded-[30px]">
      <p class="w-[44px] h-[22px] font-Poppins font-normal not-italic text-base leading-[22px] text-mColor2">
        Filtrer
      </p>
    </div>

    <div class="text-mColor2 uppercase absolute w-[343px] h-[24px] left-[80px] top-[606px] not-italic font-bold text-[18px] leading-6 tracking-[-0.005em]" style="font-family: 'NeuzeitGro';">
      Les PLUS POPULAIRES 🔥
    </div>

    <div class="text-mColor2 uppercase absolute w-[343px] h-[24px] left-[80px] top-[1111px] not-italic font-bold text-[18px] leading-6 tracking-[-0.005em]" style="font-family: 'NeuzeitGro';">
      Toutes les formations  🚀
    </div>

    <!-- logo -->
    <div class="absolute w-[150px] h-[19px] left-[104px] top-[66px]">
      <img class="w-[159px] h-[19px]" src="./../../public/Images/logo.png">
    </div>

    <!-- numero tel et bouton je prend contact -->
    <div class="flex flex-row justify-center items-center p-0 gap-[24px] absolute w-[461px] h-[59px] left-[945px] top-[40px]">
      <FrameButton
          title="06 74 49 03 21"
          classButton="flex flex-row justify-center items-center p-[19px 24px] gap-[10px] w-[159px] h-[60px] bg-mColor3 rounded-[100px]"
          classText="w-[111px] h-[22px] font-Poppins not-italic font-semi-bold text-base leading-[22px] text-center text-white"
          styles=""
      />
      <FrameButton
          title="Je prends contact"
          classButton="flex flex-row justify-center items-center py-3 px-4 gap-2.5 w-[197px] h-[56px] bg-white rounded-[30px]"
          classText= "w-[150px] h-[22px] font-Poppins not-italic font-semi-bold text-base leading-[22px] text-[#8D4ED8]"
          styles=""
      />
    </div>

    <!-- Menu -->
    <NavBar
        navBarClass="display: flex;flex-direction: row;justify-content: flex-end;align-items: flex-start;padding: 0px;gap: 24px;position: absolute;width: 400px;height: 22px;right: 727px;top: 61px;"
        item1="width: 48px;height: 22px;font-family: 'Poppins';font-style: normal;font-weight: 400;font-size: 16px;line-height: 22px;color: #FFFFFF;"
        item2="width: 95px;height: 22px;font-family: 'Poppins';font-style: normal;font-weight: 700;font-size: 16px;line-height: 22px;color: #FFFFFF;"
        item3="width: 91px;height: 22px;font-family: 'Poppins';font-style: normal;font-weight: 400;font-size: 16px;line-height: 22px;color: #FFFFFF;"
        item4="width: 100px;height: 22px;font-family: 'Poppins';font-style: normal;font-weight: 400;font-size: 16px;line-height: 22px;color: #FFFFFF;"
        nameItem1="Offres"
        nameItem2="Formations"
        nameItem3="Ressources"
        nameItem4="A propos"
    />

    <!-- the footer -->
    <div class="absolute w-[1440px] h-[477px] left-0 top-[2802px] bg-mColor2">
      <div class="absolute w-[150px] h-[19px] left-[73px] top-[102px]">
        <img class="w-[159px] h-[19px]" src="./../../public/Images/logo.png">
      </div>
      <p class="absolute w-[208px] h-[90px] left-[80px] top-[163px] font-Poppins not-italic
                  font-normal text-xs leading-[18px] text-white">
        Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et
        digitaliser la formation en entreprise pour former, vraiment !
      </p>
      <div class="absolute w-[2920px] h-[120px] left-[348px] top-[143px]">
        <Information
            title="SOLUTIONS"
            info1="Développer les soft skills"
            info2="Digitaliser les formations"
            info3="Accompagner les déploiements"
          />
      </div>
      <div class="absolute w-[292px] h-[90px] left-[626px] top-[143px]">
        <Information
            title="FORMATIONS"
            info1="Toutes les formations"
            info2="Télécharger le catalogue"
            info3=""
        />
      </div>
      <div class="absolute w-[292px] h-[120px] left-[954px] top-[143px]">
        <Information
            title="INFORMATIONS"
            info1="Nous rejoindre"
            info2="Nous contacter"
            info3="FAQ"
        />

      </div>

      <p class="text-white absolute w-[286px] h-[22px] left-[80px] top-[359px] font-Poppins font-normal text-sm font-normal leading-[22px]">
        ©Imagify 2022
      </p>
      <p class="text-white absolute w-[286px] h-[22px] left-[80px] top-[387px] font-Poppins font-normal text-[10px] font-normal leading-[18px]">
        Mentions légales  •  Politique de confidentialité  •  CGV
      </p>

    </div>



    <!-- liste de cards -->
    <div class="flex flex-row gap-8 flex-wrap justify-center absolute top-[644px] w-[100%]">
      <card v-for="card in cards"
            :title="card.title"
            :subtitle="card.subtitle"
            :urlImg="card.urlImg"
            :urlImg1="card.urlImg1"
            :urlImg2="card.urlImg2"
            :urlImg3="card.urlImg3"
      />
    </div>

    <!-- liste de cards -->
    <div class="flex flex-row gap-8 flex-wrap justify-center absolute top-[1175px] w-[100%]">
      <card v-for="card in cards2"
            :title="card.title"
            :subtitle="card.subtitle"
            :urlImg="card.urlImg"
            :urlImg1="card.urlImg1"
            :urlImg2="card.urlImg2"
            :urlImg3="card.urlImg3"
      />
    </div>

    <Pagination />

    <div class="absolute w-[844px] h-[256px] left-[298px] top-[2498px] bg-mColor rounded-[20px]">
    </div>

    <TitleDocument
        title="C’est votre dernier mot ?"
        subTitle="Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous."
        classTitle="absolute w-[407px] h-[28px] left-[517px] top-[2540px] font-['NeuzeitGro'] not-italic font-bold text-3xl leading-[34px] text-center tracking-[-0.005em] text-mColor2"
        classSubTitle="absolute w-[407px] h-[47px] left-[517px] top-[2583px] font-Poppins not-italic font-normal
                  text-base leading-[22px] text-center text-mColor2"
    />

    <FrameButton
        title="Je prends contact"
        classButton="flex flex-row justify-center items-center gap-2.5 absolute w-[190px] h-[56px]
                left-mLeft top-[2656px] bg-[#8D4ED8] rounded-[30px] px-4 py-3"
        classText="w-[170px] h-[22px] text-white font-Poppins not-static font-semi-bold text-base leading-[22px]"
        styles=""
    />

    <FrameButton
        title="Télécharger le catalogue"
        classButton="border-box flex flex-row justify-center items-center px-4 py-3 gap-2.5 absolute w-[253px] h-[56px] right-[495.5px]
                    top-[2656px] rounded-[30px]"
        classText="w-[240px] h-[22px] font-Poppins not-italic font-semi-bold text-base leading-[22px] text-mColor2"
        styles="background:linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #80D4F8, #8D4ED8, #FF6A60,#FC1616) border-box; border:5px solid transparent;"
    />

  </div>

</template>

<style scoped>

</style>

<script>
/* Les 4 favorites */
const cards = [
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image Avion.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',
    urlImg3 : './../../public/Images/PRÉSENTIEL.png',
  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 11.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 12.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',
  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 13.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',
    urlImg3 : './../../public/Images/PRÉSENTIEL.png',
  },
]

const cards2 = [
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 14.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',
    urlImg3 : './../../public/Images/PRÉSENTIEL.png',
  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 15.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 16.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',
    urlImg3 : './../../public/Images/PRÉSENTIEL.png',
  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 17.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 18.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 19.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 20.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 21.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 22.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',
    urlImg2 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 23.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image 24.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
  {
    title: 'Accueillir un.e collègue en situation de handicap',
    subtitle: 'Management & Leadership',
    urlImg : './../../public/Images/Image Avion.png',
    urlImg1 : './../../public/Images/PRÉSENTIEL.png',

  },
]

export default {
  setup() {
    return {
      cards,cards2,
    }
  }
}
</script>