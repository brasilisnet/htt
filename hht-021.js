var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813918/random-pics-061.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813918_random-pics-061.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813920/random-pics-062.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813920_random-pics-062.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813922/random-pics-063.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813922_random-pics-063.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);