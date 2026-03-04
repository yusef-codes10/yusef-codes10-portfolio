<script setup>
</script>
<template>
  <div class="about-section">
    <div class="intro">
      <h1>Yusef Codes</h1>
      <div class="details">
        <p>Self tought Web Developer,</p>
        <p>CS Graduate</p>
        <p>AI Master's Student</p>
      </div>
    </div>

    <div class="about-content">
      Hi, I'm Yusef a developer and engineer, I...
      <ul>
        <li>Build SPA Applications</li>
        <li>Design Layouts and Cool Components</li>
        <li>Experiment in AI and Machine Learning</li>
        <li>Build Database Structure and shcemas</li>
        <li>Create convanient tools that I would find useful</li>
        <li>Andm basically anything related to that</li>
      </ul>

      <div class="education">
        <h2>Education</h2>
        Computer Science Bachelorl's Degree (Graduated 2025) Currently studying Artificial
        Inteliigence Master Degree
      </div>

      <div class="languages">
        I am a Native Arabic Speaker, and I can speak English fluenty, it's my main daily basis
        language I do have some Experience with French, it's limited to understaing it and not so
        capable to speak it
      </div>
    </div>
  </div>
</template>
<style  scoped>
.about-section {
  background-color: green;
  padding: 0 2rem;
  height: 100%;
}

.intro {
  background-color: aqua;
  padding: 1rem;
  margin: 0 auto;
  display: block;
  width: 80%;
}

.intro h1 {
  font-size: 2.2rem;
  text-align: center;
  font-weight: 700;
  color: var(--font-color);
}

.about-content {
  height: 70%;
  overflow-y: auto;
}

h1 {
  font-family: var(--font-icons);
}
</style>