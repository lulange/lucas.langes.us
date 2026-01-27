<script>
</script>

<!-- Masthead-->
<div class="masthead text-black text-center" id="page-top">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-3">
    <!-- Masthead Avatar Image-->
    <img
      class="masthead-avatar"
      src="./images/Headshot.jpg"
      alt="Lucas Lange double 'L' logo"
    />
      </div>
      
    <div class="col-lg-9">
    <!-- Masthead Heading-->
    <h1 class="masthead-heading text-uppercase mb-0">Lucas Lange</h1>
    <hr />
    <!-- Masthead Subheading-->
    <p class="masthead-subheading font-weight-light mb-0">
      Software Developer, Student, Cat Lover
    </p>
    </div>
    </div>
  </div>
</div>

<style>
  .masthead {
    background-color: #1f1d2e;
    padding-top: calc(6rem + 74px);
    padding-bottom: 10rem;
  }

  .masthead hr {
    opacity: 1;
    height: 1px;
    border-width: 3px;
    width: 80%;
    border-color: #26233a;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10%;
  }

  .masthead .masthead-heading {
    font-size: 2.75rem;
    line-height: 2.75rem;
    font-family: "Nixie One", system-ui;
    text-shadow: .05em .05em #6e6a86;
    color: #e0def4;
    transition: .3s;
  }
  
  .masthead .masthead-heading:hover {
    transform: translate(-2px, -2px);
  }

  .masthead .masthead-subheading {
    font-size: 1.25rem;
    font-family: "IBM Plex Serif";
    color: #908caa;
  }

  .masthead .masthead-avatar {
    width: 15rem;
    box-shadow: -4px 4px #1f1d2e, -8px 8px #f6c177, 4px -4px #1f1d2e, 8px -8px #f6c177;
    margin: 20px;
    margin-bottom: 30px;
    z-index: 2;
  }

  @media (min-width: 992px) {
    .masthead {
      padding-top: calc(6rem + 104px);
      padding-bottom: 10rem;
    }

    .masthead .masthead-heading {
      font-size: 4rem;
      line-height: 3.5rem;
    }

    .masthead .masthead-subheading {
      font-size: 1.5rem;
    }

    .masthead .masthead-avatar {
      margin-left: 40px;
    }
  }
  
  @media (min-width: 1400px) {
    .masthead .masthead-avatar {
      width: 20rem;
      margin-left: 80px;
    }
  }
</style>