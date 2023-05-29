import { useParams } from 'react-router-dom'
import { useState } from 'react';
import './Blog.scss'
import BackButton from '../../components/BlogComponents/BackButton';
import Loader from '../../components/BlogComponents/Loader';
import Share from '../../components/BlogComponents/Share';

const Blog = () => {
  const { topicSlug } = useParams("");
  const [loading, setLoading] = useState(false);

  const news = [{
    title: "Getting Started with Blockchain Development",
    description: "Blockchain technology has gained significant attention in recent years, promising decentralized and secure solutions across various industries. As a developer, diving into blockchain development opens up a world of opportunities to create innovative applications and contribute to the advancement of this groundbreaking technology. In this blog, we will walk you through the essential steps and resources needed to embark on your journey as a blockchain developer.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Blockchain-Matters.jpg",
    date: "29th May, 2023",
    author: "Sudhanshu Ranjan",
    authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
    minutes: "6",
    tag: "Blockchain",
    id: "0",
    body: [
      "Blockchain technology has gained significant attention in recent years, promising decentralized and secure solutions across various industries. As a developer, diving into blockchain development opens up a world of opportunities to create innovative applications and contribute to the advancement of this groundbreaking technology. In this blog, we will walk you through the essential steps and resources needed to embark on your journey as a blockchain developer.",
      "Step 1: Understand the Basics : Before you start developing blockchain applications, it's crucial to grasp the fundamental concepts behind this revolutionary technology. Blockchain is essentially a decentralized, distributed ledger that records transactions across multiple computers, providing transparency, immutability, and security. Familiarize yourself with concepts such as blocks, nodes, consensus algorithms, and smart contracts. Explore the different types of blockchains, including public, private, and consortium, to understand their unique characteristics and use cases.",
      "Step 2: Choose the Right Blockchain Platform : Numerous blockchain platforms and frameworks are available, each with its own set of features and programming languages. The most popular platforms include Ethereum, Hyperledger Fabric, Corda, and EOS. Ethereum, with its smart contract functionality, is widely used for building decentralized applications (DApps). Hyperledger Fabric is an enterprise-grade permissioned blockchain framework, ideal for consortium networks. Corda focuses on privacy and is suitable for building applications within the financial sector. Evaluate the strengths and weaknesses of each platform and choose the one that aligns with your project requirements and goals.",
      "Step 3: Learn Programming Languages : To start developing on a blockchain platform, you need to learn the associated programming languages. Ethereum employs Solidity, a language specifically designed for writing smart contracts. Solidity syntax is similar to JavaScript and is relatively easy to learn for developers with a web development background. Hyperledger Fabric uses Go, a statically-typed language, and also supports chaincode development in JavaScript and Java. Corda employs Kotlin, a language built on the Java Virtual Machine (JVM), making it familiar for Java developers. Focus on mastering the programming languages required for your chosen blockchain platform.",
      "Step 4: Set up a Development Environment : To write, deploy, and test blockchain applications, you need a suitable development environment. Each blockchain platform provides its own development tools and frameworks. For Ethereum, you can use the Remix IDE, Truffle Suite, or the Visual Studio Code extension called Solidity. Hyperledger Fabric offers Hyperledger Composer, Fabric SDKs, and Hyperledger Caliper for performance benchmarking. Corda has its own set of development tools, including Corda Development Kit and Corda Testnet. Explore the available tools and choose the ones that provide a seamless development experience.",
      "Step 5: Learn Smart Contract Development : Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They enable trustless interactions between parties and form the backbone of many blockchain applications. Understanding how to write secure and efficient smart contracts is crucial for blockchain developers. Study the Solidity or the respective language documentation for your chosen platform. Learn about data structures, control flow, events, modifiers, and libraries. Explore popular design patterns, such as Factory, Proxy, and State Machine, to build scalable and upgradable contracts.",
      "Step 6: Explore Development Frameworks and Libraries : Utilizing development frameworks and libraries can significantly speed up the blockchain development process. These tools provide pre-built components, templates, and utilities that simplify common tasks. For Ethereum, Truffle and OpenZeppelin are widely used frameworks that facilitate contract compilation, migration, and testing. Hyperledger Fabric offers Composer, an extensive framework for modeling business networks and generating APIs. Corda provides the Corda Development Kit (CDK), which includes helpful libraries for building Corda applications. Research and experiment with these frameworks and libraries to enhance your development efficiency.",
      "Step 7: Join Developer Communities and Collaborate : Blockchain technology has a vibrant developer community, and joining it can be immensely beneficial for your growth as a blockchain developer. Participate in online forums, chat groups, and social media platforms where developers share knowledge and insights. Attend blockchain meetups, conferences, and hackathons to network with like-minded individuals and gain exposure to real-world projects. Collaborate on open-source blockchain projects to enhance your skills and contribute to the community. Learning from experienced developers and engaging in collaborative projects will accelerate your learning curve.",
      "Step 8: Stay Updated and Experiment : Blockchain technology is rapidly evolving, with new platforms, tools, and frameworks emerging regularly. Stay updated with the latest industry trends, research papers, and advancements in the blockchain ecosystem. Follow reputable blockchain news sources, subscribe to relevant newsletters, and explore online learning platforms that offer blockchain courses. Regularly experiment with different blockchain platforms, tools, and libraries to gain hands-on experience. Building your own projects and experimenting with various concepts will deepen your understanding of blockchain development.",
      "Embarking on a career in blockchain development is an exciting and challenging endeavor. By understanding the basics, choosing the right platform, learning the required programming languages, setting up a suitable development environment, mastering smart contract development, exploring development frameworks, joining developer communities, and staying updated with the latest trends, you'll be well on your way to becoming a proficient blockchain developer. Embrace this groundbreaking technology and leverage its potential to create innovative solutions that can reshape industries and contribute to the decentralized future. Happy blockchain development!"
    ]
  },
  {
    title: "Implementing AI in Power Systems: Revolutionizing the Future of Energy",
    description: "Artificial Intelligence (AI) has emerged as a transformative technology with the potential to revolutionize various industries. One sector that stands to benefit significantly from AI is the power system industry. The integration of AI techniques in power systems enables enhanced efficiency, reliability, and sustainability. In this blog, we will explore the applications and benefits of implementing AI in power systems, highlighting how it is shaping the future of energy.",
    image: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/qtr-ch3-intro.jpg?itok=edlO53_p",
    date: "29th May, 2023",
    author: "Sudhanshu Ranjan",
    authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
    minutes: "8",
    tag: "Electrical Engg.",
    id: "1",
    body: [
      "Artificial Intelligence (AI) has emerged as a transformative technology with the potential to revolutionize various industries. One sector that stands to benefit significantly from AI is the power system industry. The integration of AI techniques in power systems enables enhanced efficiency, reliability, and sustainability. In this blog, we will explore the applications and benefits of implementing AI in power systems, highlighting how it is shaping the future of energy.",
      "1. Predictive Maintenance and Asset Management: AI can be leveraged to optimize the maintenance and management of power system assets. By analyzing vast amounts of sensor data, AI algorithms can identify patterns and anomalies to predict equipment failures before they occur. This predictive maintenance approach reduces downtime, improves asset reliability, and minimizes costs associated with emergency repairs. Furthermore, AI can optimize asset management by optimizing the scheduling of maintenance activities, extending the lifespan of equipment, and reducing unnecessary replacements.",
      "2. Energy Forecasting and Demand Response : Accurate energy forecasting is crucial for optimal power system operation and planning. AI techniques, such as machine learning and deep learning, can analyze historical data, weather patterns, consumer behavior, and other factors to predict energy demand with high precision. This information enables utilities to optimize energy generation, distribution, and storage, leading to improved grid stability and reduced energy wastage. Additionally, AI can facilitate demand response programs by automatically adjusting energy consumption based on real-time demand and pricing signals.",
      "3. Grid Optimization and Control : The complexity of modern power grids requires sophisticated optimization and control mechanisms. AI algorithms can analyze real-time data from sensors, meters, and other grid components to optimize power flow, voltage regulation, and grid stability. AI-based control systems can quickly respond to fluctuations in renewable energy generation, dynamically manage grid congestion, and enhance grid resilience. Furthermore, AI can facilitate the integration of distributed energy resources, such as solar panels and electric vehicles, by intelligently managing their interactions with the grid.",
      "4. Energy Trading and Market Intelligence : AI technologies offer significant potential for optimizing energy trading and market operations. Machine learning algorithms can analyze historical market data, pricing trends, and consumer behavior to provide valuable market intelligence. This information helps energy traders and market operators make informed decisions, improve pricing strategies, and mitigate risks. Additionally, AI-powered trading systems can autonomously execute trades, optimize portfolio management, and identify profitable investment opportunities in energy markets.",
      "5. Grid Security and Cybersecurity : Power systems are vulnerable to cyber threats, which can have severe consequences on grid stability and reliability. AI can play a crucial role in enhancing grid security and cybersecurity. By continuously monitoring network traffic and data patterns, AI algorithms can detect and respond to cyber attacks in real-time. AI can also analyze vast amounts of data to identify vulnerabilities, predict potential threats, and strengthen the overall resilience of power systems against malicious activities.",
      "The integration of AI in power systems represents a significant leap forward in energy management and grid optimization. By leveraging AI techniques, power utilities can achieve improved efficiency, reliability, and sustainability. Predictive maintenance, energy forecasting, grid optimization, energy trading, and grid security are just a few of the many applications of AI in the power system industry. As AI continues to advance, we can expect even more innovative solutions that will shape the future of energy, paving the way for a smarter, more efficient, and sustainable power grid. Embracing AI in power systems is crucial for meeting the growing energy demands while mitigating the environmental impact and unlocking new possibilities in the energy sector."
    ]
  },
  {
    title: "Intro to IoT: Exploring the World of Connected Devices",
    description: "The Internet of Things (IoT) has become a buzzword in today's technological landscape. It refers to the vast network of interconnected devices that communicate and share data with each other over the internet. From smart homes and wearable devices to industrial machinery and smart cities, IoT is transforming the way we interact with the world around us. In this blog, we will provide an overview of IoT, its components, and its potential impact on various industries.",
    image: "https://www.offshore-technology.com/wp-content/uploads/sites/20/2021/10/Internet-of-Things-Technology-Trends.jpg",
    date: "29th May, 2023",
    author: "Sudhanshu Ranjan",
    authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
    minutes: "5",
    tag: "Electronics",
    id: "2",
    body: [
      "The Internet of Things (IoT) has become a buzzword in today's technological landscape. It refers to the vast network of interconnected devices that communicate and share data with each other over the internet. From smart homes and wearable devices to industrial machinery and smart cities, IoT is transforming the way we interact with the world around us. In this blog, we will provide an overview of IoT, its components, and its potential impact on various industries.",
      "What is IoT?\nThe Internet of Things refers to the network of physical objects embedded with sensors, software, and connectivity capabilities that enable them to collect and exchange data. These objects, often referred to as 'smart devices,' can range from everyday household items like thermostats and refrigerators to complex industrial machinery and vehicles. The collected data is shared with other devices and analyzed to generate valuable insights, improve efficiency, and enable intelligent decision-making.",
      "Components of IoT:",
      "1. Devices and Sensors: IoT relies on a wide array of devices and sensors that gather data from the physical environment. These devices can include temperature sensors, motion detectors, GPS modules, cameras, and more. They collect data related to temperature, humidity, location, motion, and various other parameters.",
      "2. Connectivity: IoT devices require reliable connectivity to transmit and receive data. They can use various communication technologies like Wi-Fi, Bluetooth, cellular networks, or low-power, wide-area networks (LPWAN) such as LoRaWAN and NB-IoT. These connectivity options ensure that devices can seamlessly exchange information with each other and with the cloud.",
      "3. Cloud Computing: The cloud plays a crucial role in IoT by providing storage, computing power, and data analysis capabilities. IoT devices often rely on cloud-based platforms to securely store the collected data and leverage cloud-based analytics tools to process and extract meaningful insights.",
      "4. Data Analytics: IoT generates vast amounts of data, often referred to as 'big data.' To derive value from this data, advanced analytics techniques like machine learning and artificial intelligence are employed. These techniques help uncover patterns, trends, and correlations, enabling organizations to make data-driven decisions and optimize processes.",
      "5. User Interfaces: IoT applications typically have user interfaces that allow users to interact with devices and control their functionalities. These interfaces can be mobile apps, web portals, or voice-activated assistants, providing users with intuitive control over their connected devices.",
      "Impact of IoT:",
      "1. Smart Homes: IoT has revolutionized the concept of home automation. From controlling lights, thermostats, and security systems remotely to managing energy consumption and optimizing daily routines, IoT-enabled smart homes offer convenience, comfort, and energy efficiency.",
      "2. Healthcare: IoT is transforming the healthcare industry by enabling remote patient monitoring, wearable health trackers, and smart medical devices. These devices monitor vital signs, collect health data, and provide real-time insights to healthcare providers, improving patient care and reducing healthcare costs.",
      "3. Industrial Applications: IoT has enormous potential in industries like manufacturing, logistics, and agriculture. Connected sensors and machinery enable real-time monitoring, predictive maintenance, supply chain optimization, and precision agriculture, leading to improved efficiency, productivity, and cost savings.",
      "4. Smart Cities: IoT contributes to the development of smart cities by integrating various urban systems. Smart traffic management, intelligent energy grids, waste management, and environmental monitoring are some examples. IoT helps cities become more sustainable, efficient, and responsive to citizens' needs.",
      "5. Retail and Customer Experience: IoT enhances customer experiences by providing personalized and context-aware services. Retailers can leverage IoT to optimize inventory management, track customer preferences, and deliver targeted marketing campaigns.",
      "The Internet of Things has transformed the way we live and work, creating a connected ecosystem of devices that collect, share, and analyze data. With the increasing number of devices and advancements in connectivity, cloud computing, and data analytics, IoT has immense potential to revolutionize various industries. As IoT continues to evolve, it is crucial to address security and privacy concerns to ensure the safe and responsible use of connected devices. The future of IoT holds exciting possibilities as it drives innovation, improves efficiency, and enables us to create a more connected and intelligent world."
    ]
  }
  ]

  return (
    <div className='news-container'>
      {loading ?
        <div className='loader-container'>
          <Loader />
        </div>
        : <div>
          <h1 data-aos="fade-up" className='news-topic font-bold text-sky-400'>{news[parseInt(topicSlug)].title}</h1>
          <div data-aos="fade-up" className="img-container">
            <img className='blog-header-img' src={news[parseInt(topicSlug)].image} alt="header-img" />
          </div>
          <div className="paragraph-body">
            {
              news[parseInt(topicSlug)].body.map((para, index) => (
                <p key={index}>{para}</p>
              ))
            }
          </div>
          <div className="credits">
            <p>This article is contributed by <span>{news[parseInt(topicSlug)].author}</span>.</p>
          </div>
        </div>
      }
      <BackButton to="/news" />
      {!loading && <div className='share-cont'>
        <Share topic={news[parseInt(topicSlug)].title} para={news[parseInt(topicSlug)].description} />
      </div>}
    </div>
  )
}

export default Blog