import media1 from "./bbq.jpg";
import media2 from "./bbq2.jpg";
import media3 from "./bbq3.jpg";
import media4 from "./bbq4.jpg";


export const media = [media1, media2, media3, media4];
export const mediaByIndex = index => media[index % media.length];
