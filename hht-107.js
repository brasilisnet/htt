var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814319/random-pics-319.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814319_random-pics-319.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814320/random-pics-320.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814320_random-pics-320.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814321/random-pics-321.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814321_random-pics-321.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);