<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutMe"]),
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/static/profile.jpeg" class="rounded-lg w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p v-for="bio in aboutMe" :key="bio.id" class="
              font-general-regular
              mb-4
              text-ternary-dark
              dark:text-ternary-light
              text-lg
            ">
        {{ bio.bio }}
      </p>
      <h2 class="
              font-general-regular
              mb-4
              text-ternary-dark
              dark:text-ternary-light
              text-lg">My Skills</h2>
      <pre class="
              font-general-regular
              mb-4
              text-ternary-dark
              dark:text-ternary-light
              text-md">
          - Backend: Node.js(Meteor.js, Nest.js, Sails.js), PHP(Core PHP and its framework such as Laravel, CodeIgniter,
          - CakePHP, Symfony, Zend), Python(Django)
          - Frontend: React.js, Angular, Vue.js, jQuery, Vanilla JS, ES6, ES7...
          - Mobile App: React Native, Ionic, Flutter, IOS, Android.
          - CMS: WordPress, Wix, Squarespace...
          - BlockChain: Smart Contracts(ERC20, BEP20, ERC721, ERC1155), DeFi, Staking, Farming, NFT Auctions, NFT MarketPlace,
          - OpenSea, Web3, Metamask, Trust Wallet, Torus, Binance Wallet
          - DB technology: MySQL, PostgreSQL, NoSQL, MongoDB, MSSQL
          - GIT: GitHub, Bitbucket
          - Server: Linux, Ubuntu, AWS/Azure, and Strong Server knowledge
          - API: REST API, Apollo GraphQL, Json, and Soap.
          - Authentication: Oauth, Oauth2, 2FA, Hawk, AWS Signature
        </pre>
    </div>
  </div>
</template>
