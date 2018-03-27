<!-- #################### Header #################### -->
<div id="header" class="jumbotron">
    <div class="container">
        <h1>Andrew Combs</h1>
        <ul>
            <li><a href="resume.php" <?php if ($page == "resume") { echo("class='active'") } ?>>Resume</a></li
            ><li><a href="resume.pdf">Download PDF</a></li
            ><li><a href="portfolio.php" <?php if ($page == "portfolio") { echo("class='active'") } ?>>Portfolio</a></li
            ><li class="last-item"><a href="contact.php" <?php if ($page == "contact") { echo("class='active'") } ?>>Contact</a></li>
        </ul>
    </div>
</div>