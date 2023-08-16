<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'head-template.php' ?>
    <title>Jobs</title>
</head>
<body>
    <?php include 'header.php' ?>

    <div class="jobs-container">
        <h1>Andrew's Previous Work</h1>
        <p>
        <?php
            $colors = array("red", "green", "blue", "yellow");

            foreach ($colors as $value) {
            echo "$value<br>";
            }
        ?>
        </p>

    </div>

</body>
</html>