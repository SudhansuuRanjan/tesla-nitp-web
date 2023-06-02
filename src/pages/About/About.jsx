import './About.scss'
import Heading from '../../components/Headings/Heading'

const About = () => {

  document.title = 'Tesla NIT Patna | About';

  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="ABOUT"></Heading>
      <div className="paragraph-body">
        <p data-aos="fade-up" >
          Welcome to the official website of <span>T.E.S.L.A. Club</span>, the premier club for Electrical Engineering enthusiasts and professionals! Founded in 2021 by a group of bright-minded seniors, under the guidance of our esteemed <span>PI - Dr. Amitesh Sir</span>, T.E.S.L.A. Club is dedicated to fostering public speaking, teamwork, technical excellence, and management skills among its members. Our primary aim is to provide a platform for seniors, juniors, and alumni to come together, learn, grow, and secure rewarding careers in the field of Electrical Engineering.
        </p>

        <p data-aos="fade-up" >
          The establishment of <span>T.E.S.L.A. Club</span> was a long-standing demand of our seniors and a necessity for our department. With the club's official recognition last year, we have been able to realize our vision of creating a space where students and professionals can connect, collaborate, and thrive.
        </p>
        <p data-aos="fade-up" >
          At T.E.S.L.A. Club, we focus on two main areas: <span>electrical engineering and blockchain technology</span>. Our members have a deep interest in exploring the latest advancements in electrical engineering and harnessing the potential of blockchain to revolutionize various industries. We are proud to announce that T.E.S.L.A. Club has forged valuable collaborations with tech giants such as Algorand and Near blockchain, enabling our members to gain exposure to cutting-edge technologies and industry trends.
        </p>
        <p data-aos="fade-up" >
          Our club activities encompass a wide range of initiatives, including workshops, seminars, competitions, and industrial visits. Through these engagements, we aim to enhance our members' <span>technical knowledge, problem-solving skills, and industry-relevant expertise</span>. Additionally, we encourage and facilitate research projects and collaborations among our members to promote innovation and contribute to the advancement of the field.
        </p>
        <p data-aos="fade-up" >
          By joining T.E.S.L.A. Club, you become part of a vibrant community of like-minded individuals driven by a common goal. Whether you are a seasoned professional, a <span>curious undergraduate</span>, or an aspiring researcher, T.E.S.L.A. Club offers a supportive environment where you can develop your skills, expand your network, and shape your future.
        </p>
        <p data-aos="fade-up" >
          As we move forward, we are committed to carrying forward the legacy of T.E.S.L.A. Club to future generations. We <span>invite</span> you to become a member and be an active participant in shaping the future of <span>Electrical Engineering and Blockchain technology</span>. Together, let's create a community that inspires, empowers, and transforms lives.
        </p>
        <p data-aos="fade-up" >
          We look forward to welcoming you to our community. <span>Join T.E.S.L.A. Club</span> today and embark on a journey of discovery, growth, and success!
        </p>
      </div>
    </div>
  )
}

export default About
