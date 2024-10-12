var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814295/random-pics-295.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814295_random-pics-295.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814296/random-pics-296.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814296_random-pics-296.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814297/random-pics-297.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814297_random-pics-297.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);