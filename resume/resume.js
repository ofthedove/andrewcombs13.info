function spaceProjects(boxWidth) {
	windowWidth = $( "#project-container" ).width();
	
	numBoxes = floor(windowWidth / boxWidth) - 1;
	marginSpace = windowWidth - (numBoxes * boxWidth);
	marginSize = marginSpace / ((numBoxes * 2) + 2);s
}