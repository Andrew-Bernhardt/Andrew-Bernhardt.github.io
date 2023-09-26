<!DOCTYPE html>
<html lang="en">

<head>
    <?php include '../components/head-template.php' ?>
    <title>Past Work</title>
    <link rel="stylesheet" href="modal.css">
    <script defer src="modal.js"></script>
</head>

<body>
    <?php include '../components/header.php' ?>
    <h1 class = grid-job-title>Past Work</h1>
    <div class="jobs-grid">
        <!-- <div class="grid-job-title">
            <h1>Past Work</h1>
        </div> -->
        <button data-modal-target="#terminix-modal" class="job-grid-item grid-job-terminix" id="terminix">
            <img src="../images/terminix-logo.png" />
            <h3>Job Title: Web Developer</h3>
            <h3>August 2023 - Present</h3>
        </button>
        <button data-modal-target="#capgemini-modal" class="job-grid-item grid-job-capgemini">
            <img src="../images/Capgemini-Logo.png" />
            <h3>Software Engineer<br>Intern</h3>
            <h3>Summer 2022</h3>
        </button>
        <button data-modal-target="#softdocs-modal" class="job-grid-item grid-job-softdocs">
            <img src="../images/softdocs.png" />
            <h3>maybe make a gradient text here?</h3>
            <h3>Summer 2021</h3>
        </button>
        <button data-modal-target="#tutoring-modal" title="Let's put the USC icon in top left and keep it up there" class="job-prac">
            <div class="blur-box">
                <img src="../images/usc_logo.png" alt="">
                <p>Peer Tutor</p>
            </div>
        </button>
        <!-- <div class="job-grid-item degen">
            kjadfkjk
        </div> -->
    </div>
    <div class="modal" id="terminix-modal">
        <div class="modal-header">
            <div class="modal-title">Web Developer</div>
            <img src="../images/terminix-logo.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maiores nobis nihil eius non nemo cum. Sint ut recusandae, placeat rerum veritatis facere fugiat earum delectus aspernatur. Earum praesentium incidunt tempora fuga excepturi sed est deserunt nulla exercitationem tempore. Blanditiis ratione sunt eos corrupti nobis veritatis reiciendis voluptate sequi dolor!
        </div>
    </div>
    <div class="modal" id="capgemini-modal">
        <div class="modal-header">
            <div class="modal-title">Software Engineer Intern</div>
            <img src="../images/Capgemini-Logo.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maiores nobis nihil eius non nemo cum. Sint ut recusandae, placeat rerum veritatis facere fugiat earum delectus aspernatur. Earum praesentium incidunt tempora fuga excepturi sed est deserunt nulla exercitationem tempore. Blanditiis ratione sunt eos corrupti nobis veritatis reiciendis voluptate sequi dolor!
        </div>
    </div>
    <div class="modal" id="softdocs-modal">
        <div class="modal-header">
            <div class="modal-title">Software Developer Intern</div>
            <img class="softdocs-img" src="..\images\softdocs.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maiores nobis nihil eius non nemo cum. Sint ut recusandae, placeat rerum veritatis facere fugiat earum delectus aspernatur. Earum praesentium incidunt tempora fuga excepturi sed est deserunt nulla exercitationem tempore. Blanditiis ratione sunt eos corrupti nobis veritatis reiciendis voluptate sequi dolor!
        </div>
    </div>
    <div class="modal" id="tutoring-modal">
        <div class="modal-header">
            <div class="modal-title">Peer Tutor Mentor</div>
            <img src="../images/usc_logo.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maiores nobis nihil eius non nemo cum. Sint ut recusandae, placeat rerum veritatis facere fugiat earum delectus aspernatur. Earum praesentium incidunt tempora fuga excepturi sed est deserunt nulla exercitationem tempore. Blanditiis ratione sunt eos corrupti nobis veritatis reiciendis voluptate sequi dolor!
        </div>
    </div>
    <div id="overlay"></div>
</body>

</html>