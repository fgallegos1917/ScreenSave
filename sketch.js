function setup() {

	createCanvas(600,700)
	strokeWeight(10)
	rect(0,0,600,700)
	
	angleMode(DEGREES)


	
// orange #1
	beginShape()

	stroke(255,145,0)
	strokeWeight(3)
	fill(255,145,0)

	curveVertex(5,55)
	curveVertex(5,55)
	curveVertex(30,45)
	curveVertex(53,55)
	curveVertex(167,17)
	curveVertex(248,51)
	curveVertex(290,79)
	curveVertex(384,41)
	curveVertex(467,52)
	curveVertex(519,74)
	curveVertex(594,22)
	curveVertex(595,4)
	curveVertex(5,4)
	curveVertex(5,52)
	curveVertex(5,52)


	endShape()


//orange #2
	beginShape()

	stroke(255,115,0)
	strokeWeight(3)
	fill(255,115,0)
	

	curveVertex(5,56)
	curveVertex(5,56)
	curveVertex(30,42)
	curveVertex(47,56)
	curveVertex(169,16)
	curveVertex(288,73)
	curveVertex(344,53)
	curveVertex(405,36)
	curveVertex(465,53)
	curveVertex(520,71)
	curveVertex(596,21)
	curveVertex(595,80)
	curveVertex(505,98)
	curveVertex(441,76)
	curveVertex(385,104)
	curveVertex(332,119)
	curveVertex(257,103)
	curveVertex(173,62)
	curveVertex(97,96)
	curveVertex(55,108)
	curveVertex(22,94)
	curveVertex(4,106)
	curveVertex(5,56)
	curveVertex(5,56)


	endShape()


	
//yellow #1
	beginShape()


	stroke(255,180,0)
	strokeWeight(3)
	fill(255,180,0)

	curveVertex(5,107)
	curveVertex(5,107)
	curveVertex(22,93)
	curveVertex(64,107)
	curveVertex(172,61)
	curveVertex(269,105)
	curveVertex(334,119)
	curveVertex(441,75)
	curveVertex(491,96)
	curveVertex(594,78)
	curveVertex(594,90)
	curveVertex(594,102)
	curveVertex(539,99)
	curveVertex(501,123)
	curveVertex(447,105)
	curveVertex(319,149)
	curveVertex(240,121)
	curveVertex(171,139)
	curveVertex(111,114)
	curveVertex(51,131)
	curveVertex(24,117)
	curveVertex(4,135)
	curveVertex(4,107)
	curveVertex(4,107)


	endShape()



//red	
	beginShape()

	stroke(245,15,0)
	strokeWeight(3)
	fill(245,15,0)

	curveVertex(3,134)
	curveVertex(3,134)
	curveVertex(25,117)
	curveVertex(55,131)
	curveVertex(136,104)
	curveVertex(179,127)
	curveVertex(251,117)
	curveVertex(315,148)
	curveVertex(345,121)
	curveVertex(397,123)
	curveVertex(442,84)
	curveVertex(505,109)
	curveVertex(547,96)
	curveVertex(594,102)
	curveVertex(594,171)
	curveVertex(537,150)
	curveVertex(480,161)
	curveVertex(412,137)
	curveVertex(369,162)
	curveVertex(314,179)
	curveVertex(268,164)
	curveVertex(203,176)
	curveVertex(136,141)
	curveVertex(85,174)
	curveVertex(61,167)
	curveVertex(5,198)
	curveVertex(3,134)
	curveVertex(3,134)

	endShape()

//orange #3	
	beginShape()

	stroke(244,95,0)
	strokeWeight(3)
	fill(244,95,0)

	curveVertex(4,199)
	curveVertex(4,199)
	curveVertex(127,132)
	curveVertex(217,166)
	curveVertex(294,159)
	curveVertex(354,165)
	curveVertex(412,133)
	curveVertex(482,156)
	curveVertex(542,138)
	curveVertex(594,171)
	curveVertex(594,231)
	curveVertex(456,171)
	curveVertex(293,204)
	curveVertex(143,184)
	curveVertex(3,206)
	curveVertex(4,196)
	curveVertex(4,206)
	
	endShape()

//blue water
	beginShape()

	stroke(25,25,240)
	strokeWeight(3)
	fill(25,25,112)

	curveVertex(4,205)
	curveVertex(4,205)
	curveVertex(148,184)
	curveVertex(291,203)
	curveVertex(453,170)
	curveVertex(594,230)
	curveVertex(594,301)
	curveVertex(495,338)
	curveVertex(509,524)
	curveVertex(202,359)
	curveVertex(327,336)
	curveVertex(279,299)
	curveVertex(370,263)
	curveVertex(4,253)
	curveVertex(4,205)
	curveVertex(4,205)


	endShape()


//yellow water #1
	beginShape()

	stroke(255,190,0)
	strokeWeight(3)
	fill(255,210,0)

	curveVertex(3,252)
	curveVertex(3,252)
	curveVertex(376,264)
	curveVertex(282,299)
	curveVertex(329,334)
	curveVertex(203,348)
	curveVertex(205,363)
	curveVertex(3,252)
	curveVertex(3,252)

	endShape()

//yellow water #2
	beginShape()

	stroke(255,190,0)
	strokeWeight(5)
	fill(255,210,0)

	curveVertex(593,300)
	curveVertex(593,300)
	curveVertex(489,336)
	curveVertex(520,517)
	curveVertex(497,523)
	curveVertex(594,569)
	curveVertex(594,301)
	curveVertex(594,301)

	endShape()

//blue water #2
	beginShape()

	stroke(25,25,112)
	strokeWeight(3)
	fill(25,25,112)

	curveVertex(4,253)
	curveVertex(4,253)
	curveVertex(595,572)
	curveVertex(593,693)
	curveVertex(4,253)
	curveVertex(4,253)

	endShape()

//brown fence parts
	stroke(255,150,0)
	strokeWeight(2)
	line(75,307,593,682)

	stroke(90,62,2)
	strokeWeight(15)

	line(4,259,595,590)
	line(5,266,588,689)
	line(142,337,144,369)
	line(200,366,207,408)
	line(284,415,292,471)
	line(360,455,377,535)
	
	strokeWeight(20)
	line(443,500,477,605)
	
	strokeWeight(25)
	line(531,560,546,654)


	stroke(170,110,2)
	strokeWeight(5)
	fill(170,110,2)

	triangle(4,272,595,696,2,697)

//teal bridge lines
	stroke(0,147,145)
	strokeWeight(2)

	line(12,298,452,628)
	line(147,505,311,670)

//orange bridge lines
	strokeWeight(4)
	line(15,428,179,698)

	stroke(255,150,0)
	strokeWeight(5)

	line(1,247,596,584)

	stroke(255,130,0)
	line(25,317,257,541)
	line(426,621,511,696)

	strokeWeight(5)
	line(1,502,38,628)


//background people

	beginShape()

	stroke(0,0,0)
	strokeWeight(3)
	fill(0,0,0)

	curveVertex(81,391)
	curveVertex(81,391)
	curveVertex(128,396)
	curveVertex(120,293)
	curveVertex(87,271)
	curveVertex(71,300)
	curveVertex(81,391)
	curveVertex(81,391)


	endShape()

	stroke(0,0,0)
	strokeWeight(10)
	line(91,271,91,261)
	
	ellipse(89,233,25,50)


	beginShape()

	stroke(0,0,0)
	strokeWeight(3)

	curveVertex(13,375)
	curveVertex(13,375)
	curveVertex(49,376)
	curveVertex(42,283)
	curveVertex(22,248)
	curveVertex(6,280)
	curveVertex(13,375)
	curveVertex(13,375)

	endShape()

	stroke(0,0,0)
	strokeWeight(10)
	line(21,249,20,231)

	ellipse(19,210,20,40)

//scream dude
	beginShape()

	stroke(0,0,0)
	strokeWeight(3)

	curveVertex(317,696)
	curveVertex(317,696)
	curveVertex(285,589)
	curveVertex(304,444)
	curveVertex(351,450)
	curveVertex(423,469)
	curveVertex(409,585)
	curveVertex(473,697)
	curveVertex(361,697)
	curveVertex(361,697)

	endShape()

	stroke(255,218,185)
	fill(255,218,185)
	ellipse(365,370,110,150)

	ellipse(362,443,60,80)

	stroke(0,0,0)
	ellipse(359,439,20,40)

	stroke(255,255,255)
	fill(255,255,255)

	ellipse(338,361,15,15)
	ellipse(388,361,15,15)

	stroke(0,0,0)
	strokeWeight(7)
	point(335,364)
	point(385,364)

	strokeWeight(3)
	point(357,398)
	point(365,399)


	beginShape()

	stroke(0,10,10)
	strokeWeight(5)
	fill(0,0,0)

	curveVertex(282,561)
	curveVertex(282,561)
	curveVertex(273,487)
	curveVertex(301,425)
	curveVertex(324,438)
	curveVertex(282,561)
	curveVertex(282,561)

	endShape()

	beginShape()

	curveVertex(400,564)
	curveVertex(400,564)
	curveVertex(416,571)
	curveVertex(428,504)
	curveVertex(407,427)
	curveVertex(395,468)
	curveVertex(400,564)
	curveVertex(400,564)


	endShape()

	beginShape()

	strokeWeight(3)
	fill(255,215,185)

	curveVertex(309,428)
	curveVertex(309,428)
	curveVertex(307,390)
	curveVertex(317,414)
	curveVertex(332,431)
	curveVertex(309,431)
	curveVertex(309,428)
	curveVertex(309,428)

	endShape()


	beginShape()

	curveVertex(407,434)
	curveVertex(407,434)
	curveVertex(384,437)
	curveVertex(402,424)
	curveVertex(416,401)
	curveVertex(407,434)
	curveVertex(407,434)

	endShape()

	


	









}


	



function mouseClicked() {
	print(int(mouseX),int(mouseY))

}
