var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814045/random-pics-085.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814045_random-pics-085.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814047/random-pics-086.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814047_random-pics-086.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814049/random-pics-087.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814049_random-pics-087.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);