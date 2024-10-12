var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814244/random-pics-244.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814244_random-pics-244.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814245/random-pics-245.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814245_random-pics-245.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814246/random-pics-246.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814246_random-pics-246.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);