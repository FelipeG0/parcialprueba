// services/userService.js
export const getUserData = () => {
  return {
    name: "Camilo Escobar",
    profileImage: "https://via.placeholder.com/100", // Puedes reemplazar por una imagen real
    bestTimes: {
      cycling: "1:05",
      running: "1:05",
      swimming: "1:05",
    },
    sportsData: [
      {
        sport: "Cycling",
        length: "50 km",
        duration: "1:30 hrs",
        city: "Bogotá",
        imagePrefix: "Cycling"
      },
      {
        sport: "Running",
        length: "10 km",
        duration: "1:05 hrs",
        city: "Medellín",
        imagePrefix: "Running"
      },
      {
        sport: "Swimming",
        length: "2 km",
        duration: "45 mins",
        city: "Cali",
        imagePrefix: "Swimming"
      }
    ]
  };
};
