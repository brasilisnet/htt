var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813899/random-pics-049.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813899_random-pics-049.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813900/random-pics-050.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813900_random-pics-050.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813901/random-pics-051.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813901_random-pics-051.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);