var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814199/random-pics-199.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814199_random-pics-199.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814200/random-pics-200.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814200_random-pics-200.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814201/random-pics-201.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814201_random-pics-201.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);