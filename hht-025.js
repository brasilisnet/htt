var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814023/random-pics-073.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814023_random-pics-073.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814025/random-pics-074.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814025_random-pics-074.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814026/random-pics-075.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814026_random-pics-075.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);