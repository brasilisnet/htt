var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814160/random-pics-160.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814160_random-pics-160.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814161/random-pics-161.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814161_random-pics-161.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814162/random-pics-162.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814162_random-pics-162.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);