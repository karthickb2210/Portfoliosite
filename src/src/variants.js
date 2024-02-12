export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
// import { makeStyles } from "@mui/styles"



// const animateText = makeStyles((theme)=>({
//     rightContainer:{
//         transform:'translateY(100%)',
//         opacity:0,
//         transition:'transform 1s ease-out,opacity 1s ease-out'
//     },
//     rightContainerVisible:{
//         transform:'translateY(0)',
//         opacity:1,
//     },
//     leftContainer:{
        
//         opacity:0,
//         transition:'opacity 1.5s ease'
//     },
//     leftContainerVisible:{
//         opacity:1,
//         transition:'opacity 1.5s ease'
//     },
    
    
// }))

// export default animateText
