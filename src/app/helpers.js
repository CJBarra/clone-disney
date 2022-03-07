export const imgUrl = `${process.env.PUBLIC_URL + "/images/"}`;
export const videoUrl = `${process.env.PUBLIC_URL + "/videos/"}`;

export const settings = {
  infinite: false,
  speed: 350,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    }
  ]
}