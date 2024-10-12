var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814298/random-pics-298.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814298_random-pics-298.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814299/random-pics-299.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814299_random-pics-299.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814300/random-pics-300.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814300_random-pics-300.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);