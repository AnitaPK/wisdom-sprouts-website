import Image from "next/image";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  const statsData = [
    {
      id: 1,
      img: "/home/icons/student.png",
      title: "No. of Students Trained",
      value: "5500+",
    },
    {
      id: 2,
      img: "/home/icons/internship.png",
      title: "Internships Completed",
      value: "400+",
    },
    {
      id: 3,
      img: "/home/icons/placement.png",
      title: "Placement Percentage",
      value: "500+",
    },
    {
      id: 4,
      img: "/home/icons/company.png",
      title: "Partner Companies",
      value: "40+",
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container text-center">
        <h2 className={`${styles.title} mb-4`}>
          Empowering Futures <br /> with Real Results
        </h2>

        <div className="row justify-content-center g-4">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="col-6 col-sm-6 col-md-3 d-flex justify-content-center"
            >
              <div className={`${styles.cardBox} p-3`}>
                <div className="mb-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <p className={styles.cardTitle}>{item.title}</p>
                <h3 className={styles.cardValue}>{item.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
