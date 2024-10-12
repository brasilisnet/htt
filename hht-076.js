var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814226/random-pics-226.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814226_random-pics-226.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814227/random-pics-227.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814227_random-pics-227.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814228/random-pics-228.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814228_random-pics-228.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);