var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814341/random-pics-340.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814341_random-pics-340.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814342/random-pics-341.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814342_random-pics-341.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814343/random-pics-342.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814343_random-pics-342.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);