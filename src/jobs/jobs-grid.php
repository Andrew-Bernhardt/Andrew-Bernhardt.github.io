<!DOCTYPE html>
<html lang="en">

<head>
    <?php include '../components/head-template.php' ?>
    <title>Past Work</title>
    <link rel="stylesheet" href="modal.css">
    <script defer src="modal.js"></script>
    <!-- <script type="text/javascript" src="../data/firebaseconfig.js"></script> -->
    <script type="text/javascript" src="job-data-calls.ts"></script>
</head>

<?php
$hostname = "localhost";
$username = "root";
$password = "root";
$dbName = "job_data";

$conn = new mysqli($hostname, $username, $password, $dbName);

if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
    echo "no mysql";
    ?><script>console.error("We don't have mysqli!!!")</script><?php
} else {
    echo 'Phew we have it!';

    $conn = new mysqli($hostname, $username, $password, $dbName);
    if($conn){
        echo "connected";
    }else{
        echo "not connected";
    }
}


?>

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
        <script type="text/javascript"> getJobData(terminix)</script>
        </div>
    </div>
    <div class="modal" id="capgemini-modal">
        <div class="modal-header">
            <div class="modal-title">Software Engineer Intern</div>
            <img src="../images/Capgemini-Logo.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
            <script type="text/javascript"> getJobData(capgemini)</script>
        </div>
    </div>
    <div class="modal" id="softdocs-modal">
        <div class="modal-header">
            <div class="modal-title">Software Developer Intern</div>
            <img class="softdocs-img" src="..\images\softdocs.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
        <script type="text/javascript"> getJobData(softdocs)</script>
        </div>
    </div>
    <div class="modal" id="tutoring-modal">
        <div class="modal-header">
            <div class="modal-title">Peer Tutor Mentor</div>
            <img src="../images/usc_logo.png" />
            <button data-close-button class="close-modal">&times</button>
        </div>
        <div class="modal-body">
        <script type="text/javascript"> getJobData(tutoring)</script>
        </div>
    </div>
    <div id="overlay"></div>
</body>

</html>