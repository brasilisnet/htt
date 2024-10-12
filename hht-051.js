var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814151/random-pics-151.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814151_random-pics-151.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814152/random-pics-152.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814152_random-pics-152.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814153/random-pics-153.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814153_random-pics-153.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);