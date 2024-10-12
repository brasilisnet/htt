var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814229/random-pics-229.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814229_random-pics-229.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814230/random-pics-230.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814230_random-pics-230.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814231/random-pics-231.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814231_random-pics-231.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);