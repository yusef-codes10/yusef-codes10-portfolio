<script setup>
</script>
<template>
  <div class="about-section">
    <div class="intro">
      <h1>Yusef Codes</h1>
      <div class="details">
        <p>Self tought Web Developer, CS Graduate</p>
        <p>AI Master's Student</p>
      </div>
    </div>

    <div class="about-content">
      <div class="interducing">
        Hi, I'm Yusef a developer and engineer, I...
        <ul>
          <li>Build <b>SPA Applications</b></li>
          <li>Design Layouts and Cool Components</li>
          <li>Experiment in AI and Machine Learning</li>
          <li>Build Database Structure and shcemas</li>
          <li>Create convanient tools that I would find useful</li>
          <li>Andm basically anything related to that</li>
        </ul>
      </div>

      <div class="education">
        <h2>Education</h2>
        <p>
          Computer Science Bachelorl's Degree (Graduated 2025) Currently studying Artificial
          Inteliigence Master Degree
        </p>
      </div>

      <div class="languages">
        <h2>Languages</h2>
        <p>
          I am a Native Arabic Speaker, and I can speak English fluenty, it's my main daily basis
          language I do have some Experience with French, it's limited to understaing it and not so
          capable to speak it
        </p>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.about-section {
  /* background-color: green; */
  padding: 0 2rem;
  height: 100%;
}

.intro {
  /* background-color: aqua; */
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
}

.intro h1 {
  font-size: 3.2rem;
  text-align: center;
  font-weight: 700;
  color: var(--font-color);
}

.details {
  /* background-color: red; */
  margin: 0 auto;
  width: 60%;
}

.about-content {
  height: 50%;
  overflow-y: auto;
  margin: 1rem 0;
}

h1 {
  font-family: var(--font-icons);
}

.interducing {
  margin: 1rem auto;
}

.interducing ul {
  list-style-type: disc;
  padding-left: 1.5rem; /* important */
}


/* boilerplate scroll bar styling */
.about-content {
  height: 50%;
  overflow-y: auto;
  margin: 1rem 0;

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #8B5E3C #e8d5a3;
}

/* Chrome/Edge/Safari */
.about-content::-webkit-scrollbar {
  width: 10px;
}

.about-content::-webkit-scrollbar-track {
  background: #e8d5a3;
  border-radius: 4px;
  box-shadow: inset 0 0 4px rgba(101, 67, 33, 0.3);
}

.about-content::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #6b3f1f, #8B5E3C, #6b3f1f);
  border-radius: 4px;
  border: 1px solid #4a2a0f;
}

.about-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7a4a25, #9e6e45, #7a4a25);
}
</style>