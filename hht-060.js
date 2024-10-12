var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814178/random-pics-178.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814178_random-pics-178.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814179/random-pics-179.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814179_random-pics-179.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814180/random-pics-180.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814180_random-pics-180.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);