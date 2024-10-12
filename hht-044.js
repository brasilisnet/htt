var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814129/random-pics-130.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814129_random-pics-130.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814131/random-pics-131.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814131_random-pics-131.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814132/random-pics-132.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814132_random-pics-132.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);