<script setup>
import PHeader from './components/PHeader.vue'
import PFooter from './components/PFooter.vue'
import PMain from './components/PMain.vue'
import ManuscriptIndex from './components/ManuscriptIndex.vue'
import ScrollPaper from './components/scroll/ScrollPaper.vue'
// import ScrollPaper from './components/scroll/ScrollPaper.vue'
</script>

<template>
  <div class="portfolio">
    <PHeader />
    <!-- <PMain /> -->
    <!-- <ScrollPaper /> -->
    <ManuscriptIndex />
    <ScrollPaper
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aperiam qui consequatur
      sunt consequuntur, vitae modi cumque sapiente odit ipsa quidem perferendis, doloremque
      cupiditate rem accusantium. Suscipit natus error libero sit blanditiis dicta, beatae assumenda
      ipsam cumque quisquam ut non veniam repudiandae, ea vitae impedit, in amet consectetur quos!
      Consequuntur maiores et, cumque tempore sint numquam vitae inventore. Nemo, omnis. Dolore
      reprehenderit tenetur corrupti ipsa ex vitae ullam tempora itaque nesciunt, nisi rerum
      voluptatum qui corporis natus sunt. Fugit provident ducimus exercitationem, harum dignissimos
      porro amet itaque sapiente cum quisquam non quis quas quo asperiores repudiandae. Quam
      recusandae molestias similique provident velit, laborum optio in reiciendis ratione ex aut
      soluta nisi eos deserunt aliquid fuga perspiciatis nesciunt natus illo neque enim. Nihil
      doloribus iste cum eveniet ipsa beatae velit, excepturi quia sed cumque, temporibus id,
      adipisci magni accusamus. Atque suscipit tempora aliquid vero ipsam maiores quaerat cum, esse
      at qui blanditiis assumenda reiciendis animi architecto, quidem iste veritatis fugit ex,
      doloribus ratione. Recusandae voluptates tempore minus atque nulla maiores itaque facere,
      pariatur explicabo exercitationem in distinctio autem voluptatum culpa doloribus perspiciatis
      illum! Mollitia, accusantium cumque? Earum, ipsam? Magni numquam veritatis repellat eligendi
      eius distinctio vero obcaecati dicta molestias, sapiente, et ullam nihil pariatur ducimus
      iusto? Temporibus minima molestiae atque sed nihil, expedita aliquid inventore beatae saepe!
      Minus natus eius cumque placeat ullam. Ea aut reiciendis numquam, enim voluptates aliquid
      facilis dolorum laborum doloremque suscipit tempore id, voluptas unde nobis deserunt
      accusantium commodi libero consectetur labore excepturi, hic animi neque. Necessitatibus
      tenetur quia sequi, vitae est dolores repellat quasi eum reiciendis voluptatum. Explicabo
      nobis, optio animi doloribus quaerat totam cumque rerum obcaecati veniam adipisci quo fugit.
      Assumenda voluptatum explicabo omnis vel culpa ratione aliquam nisi alias at facere qui
      perspiciatis quod expedita aperiam, ea, recusandae eligendi! Perferendis eligendi odio cumque
      minus.</ScrollPaper
    >

    <PFooter />
  </div>
</template>

<style scoped>
/* we need grid lyout for the entire page, to make easier to switch the layout for smaller screens */
.portfolio {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'navbar navbar'
    'scroll manuscript'
    'footer footer';
  grid-template-rows: auto 1fr auto;
}
</style>
