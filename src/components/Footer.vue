<template>
  <div>
    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <!-- Footer Location -->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              Nairobi, Kenya
            </p>
          </div>

          <!-- Footer Social Icons -->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a
              title="stanley.masinde.ke"
              class="btn btn-outline-light btn-social mx-1"
              href="//facebook.com/stanley.masinde.ke"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a
              title="@StanleyMasinde_"
              class="btn btn-outline-light btn-social mx-1"
              href="https://twitter.com/StanleyMasinde_"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
              title="stanley-masinde"
              class="btn btn-outline-light btn-social mx-1"
              href="//www.linkedin.com/in/stanley-masinde/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a
              title="stannlee"
              class="btn btn-outline-light btn-social mx-1"
              href="//github.com/stannlee"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>

          <!-- Footer About Text -->
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Stanley Masinde</h4>
            <p class="lead mb-0">
              I am a kenya based fullstack developer. See my work.
              <a target="_blank" href="http://github.com/stannlee">Github</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright Section -->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small
          >Copyright &copy; Stanley Masinde
          {{ new Date().getFullYear() }}</small
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
