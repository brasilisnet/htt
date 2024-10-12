var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814313/random-pics-313.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814313_random-pics-313.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814314/random-pics-314.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814314_random-pics-314.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814315/random-pics-315.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814315_random-pics-315.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);