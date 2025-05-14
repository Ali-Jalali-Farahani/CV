export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if(!entry.target.classList.contains("active")){
          entry.target.classList.add("active");
        }
      }
    });
  },
  {
    threshold:0.7
  }
);
