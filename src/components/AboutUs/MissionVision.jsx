import Image from 'next/image';
import styles from './MissionVision.css'; 

const MissionVision = () => {
  return (
    <section className="missionVisionSection custom-section" >
      <div className="container py-5 my-3">
        {/* Top Section */}
        <div className="row align-items-center mb-5 pb-3">
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
            <h2 className="sectionTitle">
              Empowering individuals with practical skills and industry expertise for career success.
            </h2>
            <p className="sectionDescription">
              Our mission is to bridge the gap between academic learning and industry needs by equipping individuals with
              hands-on training, mentorship, and real-world experience. We focus on building confident professionals who
              can tackle the challenges of today&apos;s competitive job market, whether they are fresh graduates or
              experienced professionals looking to upskill.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1 text-center mb-4 mb-lg-0">
            <div className="">
              <Image
                src="/aboutUs/Mission.png" 
                alt="Empowering Individuals"
                width={386} 
                height={457} 
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row align-items-center pt-3">
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <div className="imageCard">
              <Image
                src="/aboutUs/Vision.png" 
                alt="Leading Platform"
                width={386} 
                height={457} 
                objectFit="contain"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h2 className="sectionTitle">
              To be India&apos;s leading platform for career development, transforming lives through education and
              innovation.
            </h2>
            <p className="sectionDescription">
              Our vision is to revolutionize career training by providing accessible, practical, and industry-focused
              education that leads to long-term success. We aim to be the first choice for learners and organizations
              seeking to enhance their workforce, building a network of highly skilled professionals who shape the
              future of technology and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;