var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814347/random-pics-346.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814347_random-pics-346.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814348/random-pics-347.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814348_random-pics-347.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814349/random-pics-348.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814349_random-pics-348.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);