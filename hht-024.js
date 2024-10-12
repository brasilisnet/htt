var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814018/random-pics-070.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814018_random-pics-070.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814020/random-pics-071.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814020_random-pics-071.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814021/random-pics-072.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814021_random-pics-072.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);