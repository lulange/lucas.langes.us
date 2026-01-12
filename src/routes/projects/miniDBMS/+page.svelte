<!-- About Section-->
  <section class="page-section mb-0" id="about-project">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase">About The Project</h2>
      <hr>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <p class="lead">
            I made this mini database managment system as a project for a class at Eastern. The Github page has a detail of the
            commands in depth.  
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Project Section-->
  <section class="page-section bg-dark text-white mb-0" id="project">
    <div class="container">
      <!-- Project Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white mb-5">Mini DBMS</h2>

      <p class="lead">
        My Mini DBMS uses very SQL-like commands - the specification of my professor. And, while it doesn't 
        have near the level of query optimization a commerical database might implement, it does 
        work to separate a query's conditions to reduce redudant checks through selection cascading and 
        condition splitting. Selection cascading is the process of reducing the number of comparisions done 
        on any tuple by removing a tuple as early as possible from the condition checking process - e.g. given x and y, 
        if x is false, then y is irrelevant. And, condition splitting is the process of splitting up the given condition when
        possible logically so that, when selecting from multiple tables, each table can be filtered before creating a 
        cartesian product. This allows for index searches and other shortcuts to reduce work.
        Unfortunately, the static server this page is hosted on does not allow me to create a working demo.
        I can really only point to where the code is hosted.
      </p>

      <a class="lead" target="_blank" href="https://github.com/lulange/mini_dbms">Check out the Github page!</a>
    </div>
  </section>
  <!-- About Section-->
  <section class="page-section mb-0 mt-5" id="change-log">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase">Change Log</h2>
      <hr>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h4>April 15, 2025</h4>
          <p class="lead">
            Date Created.
          </p>
        </div>
      </div>
    </div>
  </section>