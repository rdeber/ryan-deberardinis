<!-- pages/contact.vue -->

<template>
  <section class="section is-medium test">
    <div class="container has-text-centered">
      <h1 class="title">Contact Me</h1>
      <form action="https://formspree.io/tyrdferg@gmail.com" method="POST">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email input" name="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        <div class="control">
          <input type="submit" value="Send">
        </div>
      </form>

    </div>
  </section>
</template>


<style scoped>
.section {
  background: linear-gradient(75deg, #786BAF, #E85B6F, #F58669);
}
</style>

