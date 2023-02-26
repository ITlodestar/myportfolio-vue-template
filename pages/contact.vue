<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Avenue Road, 1008, Toronto, Canada",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "lodestar0905@gmail.com",
          icon: "mail",
        },
        // {
        //   id: 3,
        //   name: "555 8888 888",
        //   icon: "phone",
        // },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
