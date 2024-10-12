var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814112/random-pics-121.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814112_random-pics-121.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814114/random-pics-122.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814114_random-pics-122.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814116/random-pics-123.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814116_random-pics-123.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);